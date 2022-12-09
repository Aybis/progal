import React, { useEffect, useState } from 'react';
import { getListVendor } from '../../../Services/redux/Actions/vendor';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { Vendor } from '../../../Services/redux/Types/vendor';
import { Button, Comboboxes, RadioGroup } from '../../atoms';
import { FormInput } from '..';
import {
  convertCurrencyToNumber,
  convertToCurrency,
} from '../../../Services/Utils/currencyHelper';
import Swal from 'sweetalert2';
import {
  getListProject,
  handlerMappingMitra,
} from '../../../Services/redux/Actions/project';
import { getProjectHasMitra } from '../../../Services/redux/Actions/hasMitra';

type FormProps = {
  handlerClose?: (arg: boolean) => void;
  typePage?: 'inbox' | 'project' | string;
};

export default function Index(props: FormProps) {
  const dispatch = useAppDispatch();
  const { listVendor } = useAppSelector((state) => state.vendor);
  const { selectedProject } = useAppSelector((state) => state.project);
  const { selectedProjectMitra } = useAppSelector((state) => state.hasMitra);
  const { profile } = useAppSelector((state) => state.user);

  const [search, setsearch] = useState<string>('');
  const [jenis_dokumen, setjenis_dokumen] = useState<string>('');
  const [mitraSelected, setmitraSelected] = useState<Vendor>();

  const [form, setForm] = useState({
    jenis_dokumen: '',
    project_id:
      props.typePage === 'inbox'
        ? selectedProject?.id
        : selectedProjectMitra?.id,
    mitra_id: '',
    nilai_realisasi_cogs: '',
  });

  const listDokumen: Array<string> = ['nopes', 'spk', 'pks', 'sp', 'po'];
  // NoPes/SPK/PO/SP/PKS
  // handler onchange input
  const handlerInputChange = (e: any) => {
    const { name, value } = e.target;
    let pattern = /([0-9])\w+/g;

    setForm({
      ...form,
      [name]: pattern.test(value) ? convertToCurrency(value) : value,
    });
  };

  const handlerSubmitMappingMitra = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    form.mitra_id = mitraSelected?.id?.toString() ?? '';
    form.jenis_dokumen = jenis_dokumen;
    form.nilai_realisasi_cogs = convertCurrencyToNumber(
      form.nilai_realisasi_cogs,
    ).toString();

    const res = await dispatch(handlerMappingMitra(form));
    if (res.status === 200) {
      Swal.fire('Berhasil', 'Mapping Mitra Berhasil', 'success');
      if (props.typePage === 'inbox') {
        dispatch(getListProject(profile?.id));
      } else {
        dispatch(getProjectHasMitra(profile?.id));
      }
      props.handlerClose?.(false);
    } else {
      let err = Object.values(res?.response?.data).map((item: any) => {
        return item[0];
      });
      Swal.fire('Gagal', err.join(' '), 'error');
    }
  };

  useEffect(() => {
    dispatch(getListVendor());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form
        onSubmit={handlerSubmitMappingMitra}
        className="relative bg-white rounded-lg flex flex-col gap-5">
        <Comboboxes
          label="Mitra"
          search={search}
          dataSelected={mitraSelected ?? null}
          setDataSelected={setmitraSelected}
          keyIndex="nama_vendor"
          setSearch={setsearch}
          listData={listVendor}
        />

        <FormInput
          isRequired={true}
          placeholder="Rp 123.456.789"
          typeForm="currency"
          inputType="text"
          labelName="Nilai Realisasi COGS"
          inputValue={form.nilai_realisasi_cogs}
          onChange={handlerInputChange}
          inputName="nilai_realisasi_cogs"
          isError={
            form.nilai_realisasi_cogs.length > 0 &&
            !/([0-9])\w+/g.test(form.nilai_realisasi_cogs)
          }
          message="Nilai Realisasi COGS harus berupa angka"
        />

        <RadioGroup
          label="Jenis Dokumen"
          dokumenSelected={jenis_dokumen}
          setDokumenSelected={setjenis_dokumen}
          listData={listDokumen}
        />

        <Button
          isDisabled={
            jenis_dokumen === '' ||
            mitraSelected?.id === '' ||
            form.nilai_realisasi_cogs === ''
          }
          type="submit"
          typeClass="primary"
          classButton="mt-4 w-fit px-4 py-1.5 text-sm">
          Submit
        </Button>
      </form>
    </div>
  );
}
