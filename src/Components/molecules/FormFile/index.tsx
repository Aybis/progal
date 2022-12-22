import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormInput } from '../';
import {
  getMitraHasProject,
  updateFileBAKN,
  updateFileBapp,
  updateFileBapProgress,
  updateFileBast,
  updateFileBaut,
  updateFileDo,
  updateFileKHS,
  updateFileKontrak,
  updateFilePermohonan,
  updateFilePersetujuan,
  updateFilePoSap,
  updateFilePrSap,
  updateFileSPH,
  updateFileSPPH,
  uploadFileBAKN,
  uploadFileBapp,
  uploadFileBaProgress,
  uploadFileBast,
  uploadFileBaut,
  uploadFileDo,
  uploadFileKHS,
  uploadFileKontrak,
  uploadFilePermohonan,
  uploadFilePersetujuan,
  uploadFilePoSap,
  uploadFilePrSap,
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
  console.log(props.name?.toLowerCase());
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
      [name]: name.includes('file') ? e?.target?.files?.[0] : value,
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

      case 'bast':
        return await dispatch(uploadFileBast(form));

      /*
      -------------------------------------
      */
      case 'baut':
        return await dispatch(uploadFileBaut(form));

      case 'bapp':
        return await dispatch(uploadFileBapp(form));

      case 'ba-progress':
        return await dispatch(uploadFileBaProgress(form));

      case 'do_file':
        return await dispatch(uploadFileDo(form));

      case 'pr-sap':
        return await dispatch(uploadFilePrSap(form));

      case 'po-sap':
        return await dispatch(uploadFilePoSap(form));
      /*
      -------------------------------------
      */
      default:
        return;
    }
  };

  const handlerUpdateFile = async (form: any) => {
    switch (props.name?.toLowerCase()) {
      case 'spph':
        return await dispatch(
          updateFileSPPH(props?.dataDocument?.id.toString(), form),
        );

      case 'sph':
        return await dispatch(
          updateFileSPH(props?.dataDocument?.id?.toString(), form),
        );

      case 'bakn':
        return await dispatch(
          updateFileBAKN(props?.dataDocument?.id?.toString(), form),
        );

      case 'kontrak':
        return await dispatch(
          updateFileKontrak(props?.dataDocument?.id?.toString(), form),
        );

      case 'permohonan':
        return await dispatch(
          updateFilePermohonan(props?.dataDocument?.id?.toString(), form),
        );

      case 'persetujuan':
        return await dispatch(
          updateFilePersetujuan(props?.dataDocument?.id?.toString(), form),
        );

      case 'khs':
        return await dispatch(
          updateFileKHS(props?.dataDocument?.id?.toString(), form),
        );

      case 'bast':
        return await dispatch(
          updateFileBast(props?.dataDocument?.id?.toString(), form),
        );

      /*
      -------------------------------------
      */
      case 'baut':
        return await dispatch(
          updateFileBaut(props?.dataDocument?.id?.toString(), form),
        );

      case 'bapp':
        return await dispatch(
          updateFileBapp(props?.dataDocument?.id?.toString(), form),
        );

      case 'ba-progress':
        return await dispatch(
          updateFileBapProgress(props?.dataDocument?.id?.toString(), form),
        );

      case 'do_file':
        return await dispatch(
          updateFileDo(props?.dataDocument?.id?.toString(), form),
        );

      case 'pr-sap':
        return await dispatch(
          updateFilePrSap(props?.dataDocument?.id?.toString(), form),
        );

      case 'po-sap':
        return await dispatch(
          updateFilePoSap(props?.dataDocument?.id?.toString(), form),
        );
      /*
      -------------------------------------
      */

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
        // hidden form for project mitra id
        .filter((form) => form !== 'project_mitra_id')
        // remove form no when form is bakn
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
              labelName={key.replace('_', ' ')}
              inputName={key}
              accept="application/pdf"
            />
          );
        })}

      {props.dataDocument && (
        <>
          <label
            htmlFor="dokumen"
            className="text-sm font-medium text-gray-800 leading-relaxed mt-4">
            Dokumen{' '}
            {props.name?.toLowerCase() === 'permohonan'
              ? 'Permohonan Jangka Waktu'
              : props.name?.toLowerCase() === 'persetujuan'
              ? 'Persetujuan Jangka Waktu'
              : ''}
          </label>

          <a
            href={props.dataDocument.file_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 font-medium text-sm">
            View Document
          </a>
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
