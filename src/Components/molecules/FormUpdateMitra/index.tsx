import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormInput } from '../';
import { updateMitraHasProject } from '../../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import {
  convertCurrencyToNumber,
  convertToCurrency,
} from '../../../Services/Utils/currencyHelper';
import { Button, RadioGroup } from '../../atoms';

type ProjectMitra = {
  onClose: (arg: boolean) => void;
  projectMitra?: any;
};

export default function Index(props: ProjectMitra) {
  const dispatch = useAppDispatch();
  const { loadingUpdateMitra } = useAppSelector((state) => state.hasMitra);
  const { profile } = useAppSelector((state) => state.user);
  const [caraBayarSelected, setcaraBayarSelected] = useState(
    props.projectMitra?.tata_cara_pembayaran ?? '',
  );

  const dataCaraBayar: Array<string> = [
    'One Time Charge',
    'Cash Before Delivery',
    'Cash on Delivery',
    'Progress',
    'Termin',
  ];

  const [form, setForm] = useState<any>({
    deskripsi_pekerjaan: props.projectMitra?.deskripsi_pekerjaan ?? '',
    is_down_payment: props.projectMitra?.is_down_payment ?? false,
    nilai_pekerjaan: props.projectMitra?.nilai_pekerjaan ?? '',
    nilai_realisasi_cogs: props.projectMitra?.nilai_realisasi_cogs ?? '',
    nilai_down_payment: props.projectMitra?.nilai_down_payment ?? '',
    start_jangka_waktu_pekerjaan:
      props.projectMitra?.start_jangka_waktu_pekerjaan ?? '',
    end_jangka_waktu_pekerjaan:
      props.projectMitra?.end_jangka_waktu_pekerjaan ?? '',
    tata_cara_pembayaran: props.projectMitra?.tata_cara_pembayaran ?? '',
  });

  const handlerInputChange = (e: any) => {
    const { name, value } = e.target;
    let pattern = /([0-9])\w+/g;

    setForm({
      ...form,
      [name]: pattern.test(value) ? convertToCurrency(value) : value,
    });
  };

  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // set form value currency
    form.tata_cara_pembayaran = caraBayarSelected;
    form.is_down_payment = form.nilai_down_payment.length > 0;
    form.nilai_realisasi_cogs =
      form.nilai_realisasi_cogs === ''
        ? ''
        : convertCurrencyToNumber(form.nilai_realisasi_cogs).toString();
    form.nilai_down_payment =
      form.nilai_down_payment === ''
        ? ''
        : convertCurrencyToNumber(form.nilai_down_payment);
    form.nilai_pekerjaan =
      form.nilai_pekerjaan === ''
        ? ''
        : convertCurrencyToNumber(form.nilai_pekerjaan).toString();

    // handler update
    const res = await dispatch(
      updateMitraHasProject(props.projectMitra.id, form, profile?.id),
    );

    // condition result
    if (res.status === 200) {
      Swal.fire('Berhasil', res?.data ?? 'Data berhasil diupdate', 'success');
      props.onClose(false);
    } else {
      Swal.fire('Gagal', 'Data gagal diupdate', 'error');
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="relative flex flex-col gap-4">
      {Object.keys(form)
        .filter((form) => form !== 'is_down_payment')
        .map((key) => {
          if (key === 'tata_cara_pembayaran') {
            return (
              <RadioGroup
                key={key}
                label="Tata Cara Pembayaran"
                setDokumenSelected={setcaraBayarSelected}
                dokumenSelected={caraBayarSelected}
                listData={dataCaraBayar}
              />
            );
          } else {
            if (key.includes('nilai')) {
              return (
                <FormInput
                  key={key}
                  placeholder="Rp 123.456.789"
                  typeForm="currency"
                  classLabel="capitalize"
                  inputType="text"
                  labelName={key.replace(/_/g, ' ')}
                  inputValue={form[key]}
                  inputName={key}
                  onChange={handlerInputChange}
                  isError={
                    form[key].length > 0 && !/([0-9])\w+/g.test(form[key])
                  }
                  message="Nilai Realisasi COGS harus berupa angka"
                />
              );
            }
            return (
              <FormInput
                key={key}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [key]: e.target.value,
                  });
                }}
                placeholder={key.replace(/_/g, ' ')}
                typeForm={key.includes('nilai') ? 'currency' : ''}
                inputType={key.includes('jangka') ? 'date' : 'text'}
                classLabel="capitalize"
                labelName={key.replace(/_/g, ' ')}
                inputName={key}
                inputValue={form[key]}
              />
            );
          }
        })}

      <Button
        isDisabled={loadingUpdateMitra}
        isSubmit={loadingUpdateMitra}
        type="submit"
        typeClass="primary"
        classButton="px-4 w-fit py-2 mt-4 text-base">
        Submit
      </Button>
    </form>
  );
}
