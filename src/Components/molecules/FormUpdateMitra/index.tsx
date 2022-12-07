import React, { useState } from 'react';
import { FormInput } from '../';
import {
  convertCurrencyToNumber,
  convertToCurrency,
} from '../../../Services/Utils/currencyHelper';
import { Button, RadioGroup } from '../../atoms';

type ProjectMitra = {
  onSubmit?: (data: any) => void;
  projectMitra?: any;
};

export default function Index(props: ProjectMitra) {
  console.log('data', props.projectMitra);
  const [caraBayarSelected, setcaraBayarSelected] = useState('');

  const dataCaraBayar: Array<string> = [
    'One Time Charge',
    'Cash Before Delivery',
    'Cash on Delivery',
    'Progress',
    'Termin',
  ];

  const [form, setForm] = useState<any>({
    deskripsi_pekerjaan: '',
    is_down_payment: false,
    nilai_pekerjaan: '',
    nilai_realisasi_cogs: props.projectMitra.nilai_realisasi_cogs ?? '',
    nilai_down_payment: '',
    start_jangka_waktu_pekerjaan: '',
    end_jangka_waktu_pekerjaan: '',
    tata_cara_pembayaran: '',
  });

  const handlerInputChange = (e: any) => {
    const { name, value } = e.target;
    let pattern = /([0-9])\w+/g;

    setForm({
      ...form,
      [name]: pattern.test(value) ? convertToCurrency(value) : value,
    });
  };

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.tata_cara_pembayaran = caraBayarSelected;
    form.is_down_payment = form.nilai_down_payment.length > 0;
    form.nilai_realisasi_cogs =
      form.nilai_realisasi_cogs !== ''
        ? ''
        : convertCurrencyToNumber(form.nilai_realisasi_cogs).toString();
    form.nilai_down_payment =
      form.nilai_down_payment !== ''
        ? ''
        : convertCurrencyToNumber(form.nilai_down_payment).toString();
    form.nilai_pekerjaan =
      form.nilai_pekerjaan !== ''
        ? ''
        : convertCurrencyToNumber(form.nilai_pekerjaan).toString();
    console.log(form);
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
                inputName="nilai_realisasi_cogs"
              />
            );
          }
        })}

      <Button
        type="submit"
        typeClass="primary"
        classButton="px-4 w-fit py-2 mt-4 text-base">
        Submit
      </Button>
    </form>
  );
}
