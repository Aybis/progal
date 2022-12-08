import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormInput } from '../';
import {
  getMitraHasProject,
  updateFileBAKN,
  updateFileKHS,
  updateFileKontrak,
  updateFilePermohonan,
  updateFilePersetujuan,
  updateFileSPH,
  updateFileSPPH,
  uploadFileBAKN,
  uploadFileKHS,
  uploadFileKontrak,
  uploadFilePermohonan,
  uploadFilePersetujuan,
  uploadFileSPH,
  uploadFileSPPH,
} from '../../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { Button } from '../../atoms';

type FormMitraProps = {
  onClose: (arg: boolean) => void;
  name?: string;
  dataMitra?: any;
  dataDocument?: any;
  typeForm?: 'update' | 'preview' | 'insert' | string;
};

export default function Index(props: FormMitraProps) {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const [tempFile, settempFile] = useState<string>('');
  const [formFile, setformFile] = useState<any>({
    no: props?.dataDocument?.no ?? '',
    tanggal: props?.dataDocument?.tanggal ?? '',
    file: null,
    project_mitra_id: props?.dataMitra?.id,
  });

  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'file') {
      settempFile(value);
    }
    setformFile((prev: any) => ({
      ...prev,
      [name]: name === 'file' ? e?.target?.files?.[0] : value,
    }));
  };

  const handlerUploadFile = async (form: any) => {
    switch (props.name?.toLowerCase()) {
      case 'spph':
        return await dispatch(uploadFileSPPH(form));

      case 'sph':
        return await dispatch(uploadFileSPH(form));

      case 'bakn':
        return await dispatch(uploadFileBAKN(form));

      case 'kontrak':
        return await dispatch(uploadFileKontrak(form));

      case 'permohonan':
        return await dispatch(uploadFilePermohonan(form));

      case 'persetujuan':
        return await dispatch(uploadFilePersetujuan(form));

      case 'khs':
        return await dispatch(uploadFileKHS(form));

      default:
        return;
    }
  };

  const handlerUpdateFile = async (form: any) => {
    switch (props.name?.toLowerCase()) {
      case 'spph':
        return await dispatch(
          updateFileSPPH(props.dataMitra?.id?.toString(), form),
        );

      case 'sph':
        return await dispatch(
          updateFileSPH(props.dataMitra?.id?.toString(), form),
        );

      case 'bakn':
        return await dispatch(
          updateFileBAKN(props.dataMitra?.id?.toString(), form),
        );

      case 'kontrak':
        return await dispatch(
          updateFileKontrak(props.dataMitra?.id?.toString(), form),
        );

      case 'permohonan':
        return await dispatch(
          updateFilePermohonan(props.dataMitra?.id?.toString(), form),
        );

      case 'persetujuan':
        return await dispatch(
          updateFilePersetujuan(props.dataMitra?.id?.toString(), form),
        );

      case 'khs':
        return await dispatch(
          updateFileKHS(props.dataMitra?.id?.toString(), form),
        );

      default:
        return;
    }
  };

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('file', formFile.file);
    formData.append('project_mitra_id', props?.dataMitra?.id);
    formData.append('tanggal', formFile.tanggal);
    formData.append('no', formFile.no);

    const res =
      props.typeForm === 'update'
        ? await handlerUpdateFile(formData)
        : await handlerUploadFile(formData);

    if (res.status === 200) {
      Swal.fire('Success', 'Berhasil Upload File', 'success');
      dispatch(getMitraHasProject(profile?.id));
      props.onClose(false);
    } else {
      Swal.fire(
        'Error',
        res?.response?.data?.message ?? 'Something Happened!',
        'error',
      );
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="relative flex flex-col gap-4">
      {Object.keys(formFile)
        .filter((form) => form !== 'project_mitra_id')
        .filter((form) =>
          props.name?.toLowerCase() === 'bakn' ? form !== 'no' : form,
        )
        .filter((form) =>
          props.typeForm === 'preview' ? form !== 'file' : form,
        )

        .map((key) => {
          return (
            <FormInput
              onChange={handlerChangeInput}
              key={key}
              isDisabled={props.typeForm === 'preview'}
              placeholder={key}
              inputValue={key === 'file' ? tempFile : formFile[key]}
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

      {props.dataDocument && (
        <>
          <label
            htmlFor="dokumen"
            className="text-sm font-medium text-gray-800 leading-relaxed mt-4">
            Dokumen {props.name}
          </label>
          <iframe
            src={props.dataDocument.file_url}
            height={700}
            className="rounded-md border border-gray-200 -mt-2"
            title={props.dataDocument.file_url}></iframe>
        </>
      )}

      {props.typeForm !== 'preview' && (
        <Button
          type="submit"
          typeClass="primary"
          classButton="w-fit px-4 text-base mt-2 py-2">
          {props.typeForm === 'update' ? 'Update' : 'Upload'}
        </Button>
      )}
    </form>
  );
}
