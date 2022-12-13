import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormInput } from '../';
import {
  getMitraHasProject,
  updateFileBAKN,
  updateFileBast,
  updateFileKHS,
  updateFileKontrak,
  updateFilePermohonan,
  updateFilePersetujuan,
  updateFileSPH,
  updateFileSPPH,
  uploadFileBAKN,
  uploadFileBast,
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
  const [tempFileBast, settempFileBast] = useState<any>({
    file_do: '',
    file_baut: '',
    file_ba_rekon: '',
    file_baso: '',
    file_bapp: '',
  });
  const [formFile, setformFile] = useState<any>({
    no: props?.dataDocument?.no ?? '',
    tanggal: props?.dataDocument?.tanggal ?? '',
    file: null,
    project_mitra_id: props?.dataMitra?.id,
    file_do: null,
    file_baut: null,
    file_ba_rekon: null,
    file_baso: null,
    file_bapp: null,
  });

  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'file') {
      settempFile(value);
    }

    if (props.name?.toLowerCase() === 'bast') {
      settempFileBast((prev: any) => ({
        ...prev,
        [name]: value,
      }));
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
    // only BAST form
    if (props.name?.toLowerCase() === 'bast') {
      formData.append('file_do', formFile.file_do);
      formData.append('file_baut', formFile.file_baut);
      formData.append('file_ba_rekon', formFile.file_ba_rekon);
      formData.append('file_baso', formFile.file_baso);
      formData.append('file_bapp', formFile.file_bapp);
    }

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
        // show only file when form is bast
        .filter((form) =>
          props.name?.toLowerCase() === 'bast'
            ? form !== 'file'
            : form !== 'file_do' &&
              form !== 'file_baut' &&
              form !== 'file_ba_rekon' &&
              form !== 'file_baso' &&
              form !== 'file_bapp',
        )
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
              inputValue={
                key.includes('file_')
                  ? tempFileBast[key]
                  : key === 'file'
                  ? tempFile
                  : formFile[key]
              }
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

          {props.name?.toLowerCase() === 'bast' ? (
            Object.keys(tempFileBast).map((key) => {
              return props.dataDocument?.[key] === null ? (
                ''
              ) : (
                <a
                  key={key}
                  href={props.dataDocument?.[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-medium text-sm">
                  View {key.replace('_', ' ').toUpperCase()}
                </a>
              );
            })
          ) : (
            <a
              href={props.dataDocument.file_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-medium text-sm">
              View Document
            </a>
          )}
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
