import { PlusIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Button, Comboboxes } from '../../Components/atoms';
import { FormInput } from '../../Components/molecules';
import Layout from '../../Layouts/Layout';
import progalApi from '../../Middleware/progal-api';

type Mitra = {
  alamat?: string | null;
  deskripsi_vendor?: string | null;
  direktur?: string | null;
  email?: string | null;
  id?: number;
  jenis_vendor_id?: number | string;
  nama_vendor?: string;
  no_tlpn?: string | null;
  pic?: string | null;
};

export default function Index() {
  const [search, setsearch] = useState<string>('');
  const [mitraSelected, setmitraSelected] = useState<Mitra>();
  const dataProject = JSON.parse(localStorage.getItem('project') ?? '{}');
  const [listMitra, setlistMitra] = useState<Mitra[]>([]);
  const [formMitra, setformMitra] = useState([
    {
      labelName: 'Deskripsi Pekerjaan',
      data: [],
      name: 'description',
      value: '',
      typeForm: 'text',
      placeholder: 'Deskripsi Pekerjaan',
    },
    {
      labelName: 'Nilai Realisasi',
      data: [],
      name: 'realisasi',
      value: '0',
      typeForm: 'currency',
      placeholder: 'Rp. 123.456.789',
    },
    {
      labelName: 'Nilai Pengerjaan',
      data: [],
      name: 'pengerjaan',
      value: '0',
      typeForm: 'currency',
      placeholder: 'Rp. 123.456.789',
    },
    {
      labelName: 'Efisiensi',
      data: [],
      name: 'efisiensi',
      value: '',
      typeForm: 'text',
      placeholder: 'Nilai Realisasi - Nilai Pengerjaan',
    },
  ]);

  // handler convert string to curency
  const convertToCurrency = (value: string) => {
    const number = parseInt(value.replace(/[^0-9]/g, ''), 10);
    return number.toString() ? number.toLocaleString('id-ID') : '';
  };

  // handler onchange input
  const handlerInputChange = (e: any) => {
    const { name, value } = e.target;

    setformMitra((prev) => {
      return prev.map((item) => {
        console.log(convertToCurrency(value));

        if (item.name === name) {
          return {
            ...item,
            value:
              item.typeForm === 'currency' ? convertToCurrency(value) : value,
          };
        }
        return item;
      });
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

  useEffect(() => {
    getListMitra();
  }, []);

  return (
    <Layout textHeading="Update Project">
      {/* Detail Project  */}
      <div className="relative p-4 mt-4 rounded-lg flex justify-center items-center bg-blue-200/30 backdrop-blur-sm">
        <h1 className="text-center text-xl leading-relaxed text-blue-700 font-bold">
          {dataProject?.no_io} - {dataProject?.inisiasi?.desc_project ?? ''}
        </h1>
      </div>

      {/* Section Form  */}
      <div className="relative mt-10">
        <div className="relative flex justify-between items-center">
          <h1 className="font-semibold text-lg leading-relaxed text-gray-800">
            Input Mitra
          </h1>
          <Button typeClass="primary">
            <PlusIcon className="h-5 text-white" />
          </Button>
        </div>
        {/* Form Mitra */}
        <div className="relative mt-4 p-4 bg-white rounded-lg flex flex-col gap-4">
          <Comboboxes
            label="Mitra"
            search={search}
            dataSelected={mitraSelected ?? null}
            setDataSelected={setmitraSelected}
            keyIndex="nama_vendor"
            setSearch={setsearch}
            listData={listMitra}
          />
          {formMitra.map((item, index) => {
            return (
              <FormInput
                key={index}
                labelName={item.labelName}
                classLabel="text-sm"
                inputType={item.typeForm}
                classInput="w-full"
                inputName={item.name}
                typeForm={item.typeForm}
                inputValue={
                  item.name === 'efisiensi'
                    ? convertToCurrency(
                        (
                          convertCurrencyToNumber(
                            formMitra.find((item) => item.name === 'realisasi')
                              ?.value || '',
                          ) -
                          convertCurrencyToNumber(
                            formMitra.find((item) => item.name === 'pengerjaan')
                              ?.value || '',
                          )
                        ).toString(),
                      )
                    : item.value
                }
                onChange={(e) => handlerInputChange(e)}
                placeholder={item.placeholder}
                isDisabled={item.name === 'efisiensi'}
                isReadOnly={false}
                formClassRoot="w-full"
                isRequired={false}
                isError={false}
                message=""
              />
            );
          })}

          <Button typeClass="primary" classButton="mt-4 w-fit px-6 text-sm">
            Submit
          </Button>
        </div>
      </div>
    </Layout>
  );
}
