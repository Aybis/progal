import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormInput } from '..';
import progalApi from '../../../Middleware/progal-api';
import { DataMitraHasProject } from '../../../Services/redux/Types/hasmitra';
import {
  convertCurrencyToNumber,
  convertToCurrency,
} from '../../../Services/Utils/currencyHelper';
import { Button } from '../../atoms';

// tipe component form amandemen
type FormAmandemen = {
  onClose?: (arg: boolean) => void;
  projectMitra?: DataMitraHasProject | any;
};

// tipe data amandemen
type Amandemen = {
  created_at?: string;
  end_jangka_waktu_pekerjaan?: string;
  file_bakn?: string;
  file_surat_undangan?: string;
  file_url?: string;
  id?: number;
  nilai_pekerjaan?: number;
  nilai_realisasi_cogs?: number;
  project_mitra_id?: number;
  start_jangka_waktu_pekerjaan?: string;
  tanggal_bakn?: string;
  tanggal_surat_undangan?: string;
  tata_cara_bayar?: string;
  updated_at?: string;
};

export default function Index(props: FormAmandemen) {
  const [errorMessage, seterrorMessage] = useState<any>([]);

  let getLastAmandemen: Amandemen = props.projectMitra.amandemen.pop() ?? null;

  // form insert amandemen
  const [form, setform] = useState<any>({
    project_mitra_id:
      getLastAmandemen?.project_mitra_id ?? props.projectMitra?.id,
    nilai_realisasi_cogs:
      getLastAmandemen?.nilai_realisasi_cogs ??
      props.projectMitra?.nilai_realisasi_cogs,
    nilai_pekerjaan:
      getLastAmandemen?.nilai_pekerjaan ?? props.projectMitra?.nilai_pekerjaan,
    start_jangka_waktu_pekerjaan:
      getLastAmandemen?.start_jangka_waktu_pekerjaan ?? '',
    end_jangka_waktu_pekerjaan:
      getLastAmandemen?.end_jangka_waktu_pekerjaan ?? '',
    tanggal_surat_undangan: getLastAmandemen?.tanggal_surat_undangan ?? '',
    file_surat_undangan: '',
    tanggal_bakn:
      getLastAmandemen?.tanggal_bakn ?? props.projectMitra?.bakn?.tanggal ?? '',
    file_bakn: '',
  });

  // handler input change
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let pattern = /([0-9])\w+/g;

    //   condition when name is file
    if (name.includes('file')) {
      setform({
        ...form,
        [name]: event?.target?.files?.[0],
      });
    }

    //   condition when name is text and currency
    setform({
      ...form,
      [name]: name.includes('nilai')
        ? pattern.test(value)
          ? convertToCurrency(value)
          : value
        : value,
    });
  };

  // submit create amandemen
  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // remove . in currency
    form.nilai_realisasi_cogs =
      form.nilai_realisasi_cogs === ''
        ? ''
        : convertCurrencyToNumber(form.nilai_realisasi_cogs).toString();
    form.nilai_pekerjaan =
      form.nilai_pekerjaan === ''
        ? ''
        : convertCurrencyToNumber(form.nilai_pekerjaan).toString();

    // set form data to multipartform
    const formData = new FormData();

    Object.keys(form).forEach((item) => {
      formData.append(item, form[item]);
    });

    try {
      const res = await progalApi.insertAmandemen(formData);

      Swal.fire('Success', res?.data, 'success');
      props.onClose?.(false);
      return res;
    } catch (error: any) {
      Swal.fire(
        'Error',
        error?.response?.message ?? 'Something Happened',
        'error',
      );
      seterrorMessage(error?.response?.data);
      return error;
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="p-4 relative flex flex-col gap-4">
      {Object.entries(form)
        .filter((key) => !key.includes('project_mitra_id'))
        .map(([key, value]: any) => {
          return (
            <FormInput
              key={key}
              inputName={key}
              inputValue={value}
              typeForm={key.includes('nilai') ? 'currency' : 'text'}
              onChange={handlerChange}
              inputType={
                key.includes('file')
                  ? 'file'
                  : key.includes('tanggal') || key.includes('jangka')
                  ? 'date'
                  : 'text'
              }
              isError={errorMessage?.[key]}
              isMessage={key.includes('nilai')}
              message={
                key.includes('nilai')
                  ? 'Nilai ini diambil dari data sebelumnya'
                  : errorMessage?.[key]
                  ? errorMessage[key]
                  : ''
              }
              labelName={key.replace(/_/g, ' ').toUpperCase()}
            />
          );
        })}
      <Button
        type="submit"
        typeClass="primary"
        classButton="py-2 w-fit px-5 mt-3 shadow-lg shadow-blue-200">
        Submit
      </Button>
    </form>
  );
}
