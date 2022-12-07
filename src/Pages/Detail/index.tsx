import { PlusIcon } from '@heroicons/react/24/solid';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button, Comboboxes, RadioGroup } from '../../Components/atoms';
import { FormInput } from '../../Components/molecules';
import { setHeader } from '../../Configs/api';
import Layout from '../../Layouts/Layout';
import progalApi from '../../Middleware/progal-api';

type Mitra = {
  alamat?: string | null;
  deskripsi_vendor?: string | null;
  direktur?: string | null;
  email?: string | null;
  id?: string | number;
  jenis_vendor_id?: number | string;
  nama_vendor?: string;
  no_tlpn?: string | null;
  pic?: string | null;
};

type DataProject = {
  id: number;
  inisiasi_id?: number;
  kl_dokumen?: string;
  no_io: string;
  p6_dokumen?: string;
  p8_dokumen?: string;
  inisiasi: {
    desc_project: string;
  };
  pic_legal: {
    id: number;
    name: string;
  };
  pic_procurement: {
    id: number;
    name: string;
  };
};

export default function Index() {
  const { id } = useParams();
  const [search, setsearch] = useState<string>('');
  const [loadingSubmit, setloadingSubmit] = useState<boolean>(false);
  const [jenis_dokumen, setjenis_dokumen] = useState<string>('');
  const [mitraSelected, setmitraSelected] = useState<Mitra>();
  const dataProject: DataProject = JSON.parse(
    localStorage.getItem('project') ?? '{}',
  );
  const [listMitra, setlistMitra] = useState<Mitra[]>([]);
  const [formMitra, setformMitra] = useState({
    jenis_dokumen: '',
    project_id: id,
    mitra_id: '',
    nilai_realisasi_cogs: '',
  });

  const listDokumen: Array<string> = ['nopes', 'kontrak', 'spk'];

  // handler convert string to curency
  const convertToCurrency = (value: string) => {
    const number = parseInt(value.replace(/[^0-9]/g, ''), 10);
    return number.toString() ? number.toLocaleString('id-ID') : '';
  };

  // handler onchange input
  const handlerInputChange = (e: any) => {
    const { name, value } = e.target;
    let pattern = /([0-9])\w+/g;

    setformMitra({
      ...formMitra,
      [name]: pattern.test(value) ? convertToCurrency(value) : value,
    });
  };

  // handler convert currency to number
  const convertCurrencyToNumber = (value: string) => {
    const number = parseInt(value.replace(/[^0-9]/g, ''), 10);
    return number;
  };

  // handler get list data mitra
  const getListMitra = async () => {
    const res: any = await progalApi.listMitra();

    setlistMitra(res.data);
  };

  const handlerMappingMitra = async (data: object) => {
    setHeader();

    try {
      const res: any = await progalApi.mappingMitra(data);
      console.log('res', res);
      Swal.fire('Berhasil', 'Mitra berhasil dimapping', 'success');
      setloadingSubmit(false);
      return res;
    } catch (error: any) {
      console.log('err', error);
      setloadingSubmit(false);
      Swal.fire('Error', error?.message, 'error');
    }
  };

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setloadingSubmit(true);
    formMitra.mitra_id = mitraSelected?.id?.toString() ?? '';
    formMitra.jenis_dokumen = jenis_dokumen;
    formMitra.nilai_realisasi_cogs = convertCurrencyToNumber(
      formMitra.nilai_realisasi_cogs,
    ).toString();
    handlerMappingMitra(formMitra);
  };

  useEffect(() => {
    getListMitra();
  }, []);

  return (
    <Layout textHeading="Mapping Mitra">
      {/* Detail Project  */}
      <div className="relative p-4 mt-10 rounded-lg flex justify-center items-center bg-blue-200/30 backdrop-blur-sm">
        <h1 className="text-center text-xl leading-relaxed text-blue-700 font-semibold">
          {dataProject?.no_io} - {dataProject?.inisiasi?.desc_project ?? ''}
        </h1>
      </div>

      {/* Section Form  */}
      <div className="relative mt-10">
        <div className="relative flex justify-between items-center">
          <h1 className="font-semibold text-lg leading-relaxed text-gray-800">
            Tambah Mitra
          </h1>
          <Button typeClass="primary" isDisabled={true} classButton="p-0.5">
            <PlusIcon className="h-5 text-white" />
          </Button>
        </div>
        {/* Form Mitra */}
        <form
          onSubmit={handlerSubmit}
          className="relative mt-4 p-4 bg-white rounded-lg flex flex-col gap-4">
          <Comboboxes
            label="Mitra"
            search={search}
            dataSelected={mitraSelected ?? null}
            setDataSelected={setmitraSelected}
            keyIndex="nama_vendor"
            setSearch={setsearch}
            listData={listMitra}
          />

          <FormInput
            placeholder="Rp 123.456.789"
            typeForm="currency"
            inputType="text"
            labelName="Nilai Realisasi COGS"
            inputValue={formMitra.nilai_realisasi_cogs}
            onChange={handlerInputChange}
            inputName="nilai_realisasi_cogs"
            isError={
              formMitra.nilai_realisasi_cogs.length > 0 &&
              !/([0-9])\w+/g.test(formMitra.nilai_realisasi_cogs)
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
              formMitra.nilai_realisasi_cogs === ''
            }
            isSubmit={loadingSubmit}
            type="submit"
            typeClass="primary"
            classButton="mt-4 w-fit px-4 py-1.5 text-sm">
            Submit
          </Button>
        </form>
      </div>
    </Layout>
  );
}
