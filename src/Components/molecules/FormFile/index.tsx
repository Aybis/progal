import React, { useState } from 'react';
import { FormInput } from '../';
import { setHeader } from '../../../Configs/api';
import progalApi from '../../../Middleware/progal-api';
import { Button } from '../../atoms';

type FormMitraProps = {
  name?: string;
  data?: any;
};

export default function Index(props: FormMitraProps) {
  console.log(props.data);

  const [formFile, setformFile] = useState({
    no: '',
    tanggal: '',
    file: '',
    project_mitra_id: props?.data?.id,
  });

  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformFile((prev) => ({ ...prev, [name]: value }));
  };

  const handlerFileSpph = async () => {
    setHeader();

    try {
      const res = await progalApi.insertSpph(formFile);

      console.log('res', res);
    } catch (error: any) {
      console.log('err', error?.response);
    }
  };

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('file', formFile.file);
    formData.append('project_mitra_id', props?.data?.id);
    formData.append('tanggal', formFile.tanggal);
    formData.append('no', formFile.no);

    console.log(formData);
  };

  return (
    <form onSubmit={handlerSubmit} className="relative flex flex-col gap-4">
      {Object.keys(formFile)
        .filter((form) => form !== 'project_mitra_id')
        .map((key) => {
          return (
            <FormInput
              onChange={handlerChangeInput}
              key={key}
              placeholder={key}
              typeForm={key.includes('nilai') ? 'currency' : ''}
              inputType={
                key.includes('tanggal')
                  ? 'date'
                  : key.includes('file')
                  ? 'file'
                  : 'text'
              }
              classLabel="capitalize"
              labelName={
                key.replace('_', ' ') + ' ' + props.name?.toUpperCase()
              }
              inputName={key}
            />
          );
        })}

      <Button
        type="submit"
        typeClass="primary"
        classButton="w-fit px-4 text-base mt-2">
        Submit
      </Button>
    </form>
  );
}
