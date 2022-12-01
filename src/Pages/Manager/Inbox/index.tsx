import {
  DocumentIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Button, Input, Modal } from '../../../Components/atoms';
import { setHeader } from '../../../Configs/api';
import Layout from '../../../Layouts/Layout';
import progalApi from '../../../Middleware/progal-api';

type DataInisiasi = {
  id?: number | string;
  io: {
    internal_order: string;
  };
  tgl_target_win: string;
  desc_project?: string;
  nilai_cogs: number;
  end_customer?: string;
  jasbisis?: any;
};

type FormDisposisi = {
  pic_procurement?: string;
  pic_legal?: string;
  no_io?: string | number;
  inisiasi_id?: string | number;
};

export default function Index() {
  const [data, setdata] = useState<DataInisiasi[]>([]);
  const [filterData, setfilterData] = useState<DataInisiasi[]>([]);
  const [showModalDisposisi, setshowModalDisposisi] = useState(false);
  const [loadingData, setloadingData] = useState(false);
  const [loadingDisposisi, setloadingDisposisi] = useState(false);
  const [projectSelected, setprojectSelected] = useState<DataInisiasi>();
  const [formDisposisi, setformDisposisi] = useState<FormDisposisi>({
    pic_procurement: '',
    pic_legal: '',
    no_io: '',
    inisiasi_id: '',
  });

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformDisposisi({
      ...formDisposisi,
      [e.target.name]: e.target.value,
    });
  };

  const handlerFilterData = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setfilterData(data);
    } else {
      console.log('masil');
      const filter = data.filter((item) => {
        return (
          item.io.internal_order
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.desc_project
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.end_customer
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase())
        );
      });

      setfilterData(filter);
    }
  };

  const getInboxInisiasi = async () => {
    setloadingData(true);
    setHeader();
    const res: any = await progalApi.inisiasiWon();
    setdata(res);
    setfilterData(res);
    setloadingData(false);
    return res;
  };

  const handlerShowModalDisposisi = (data: any) => {
    setprojectSelected(data);

    setformDisposisi({
      pic_procurement: '',
      pic_legal: '',
      no_io: '',
      inisiasi_id: '',
    });

    setshowModalDisposisi(true);
  };

  const handlerAssignPIC = async (data: FormDisposisi) => {
    setHeader();
    try {
      const res: any = await progalApi.disposisi(data);
      Swal.fire('Yeay!', 'Disposisi Berhasil!', 'success');
      setshowModalDisposisi(false);
      setloadingDisposisi(false);
      return res;
    } catch (error: any) {
      setloadingDisposisi(false);
      Swal.fire('Oh No!', 'Disposisi Gagal!', 'error');
      return error;
    }
  };

  const handlerDisposisi = () => {
    setloadingDisposisi(true);
    if (
      formDisposisi.pic_legal === '' ||
      formDisposisi.pic_procurement === ''
    ) {
      Swal.fire(
        'Warning',
        'PIC Procurement dan PIC Legal tidak boleh kosong',
        'warning',
      );
      setloadingDisposisi(false);
    } else {
      formDisposisi.no_io = projectSelected?.io.internal_order;
      formDisposisi.inisiasi_id = projectSelected?.id;
      handlerAssignPIC(formDisposisi);
    }
  };

  useEffect(() => {
    getInboxInisiasi();
  }, []);

  return (
    <Layout textHeading="Inbox " subHeading="Project with Inisasi WON">
      <div className="relative mt-10 mb-24 bg-white p-4 rounded-lg shadow-lg">
        <div className="relative flex justify-between items-end gap-2 mb-4">
          <div>
            <p className="font-normal text-sm leading-relaxed text-gray-600">
              Result : {filterData.length} project
            </p>
          </div>
          <div className="relative">
            <Input
              onChange={handlerFilterData}
              classInput="w-64 placeholder:text-gray-400 placeholder:font-normal placeholder:italic pl-10 text-sm"
              placeholder="Search Something"
            />
            <MagnifyingGlassIcon className="h-5 absolute top-2.5 left-3 text-gray-400" />
          </div>
        </div>

        {loadingData ? (
          'Loading...'
        ) : (
          <div className="relative w-full overflow-auto">
            <table className="w-full">
              <thead className="bg-blue-100">
                <tr className="text-sm ">
                  <th className="py-3 px-4 whitespace-nowrap text-center font-medium leading-relaxed tracking-wide uppercase">
                    No
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap text-center font-medium leading-relaxed tracking-wide uppercase">
                    Action
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap text-left font-medium leading-relaxed tracking-wide uppercase">
                    IO
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap text-left font-medium leading-relaxed tracking-wide uppercase">
                    Desc. Project
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap text-left font-medium leading-relaxed tracking-wide uppercase">
                    Harga
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap text-left font-medium leading-relaxed tracking-wide uppercase">
                    Customer
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap text-left font-medium leading-relaxed tracking-wide uppercase">
                    Tgl. Win
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="font-medium text-lg leading-relaxed text-gray-500 pt-4 text-center">
                      Tidak ada data
                    </td>
                  </tr>
                ) : (
                  filterData.map((item, index) => (
                    <tr
                      key={item.id}
                      className={[
                        index % 2 === 0 ? 'bg-white' : 'bg-zinc-50',
                        'hover:bg-blue-50 transition-all duration-300 text-sm leading-relaxed font-medium text-gray-800',
                      ].join(' ')}>
                      <td className="p-4 text-sm font-medium text-gray-800 text-center">
                        {index + 1}
                      </td>
                      <td className="p-4 relative text-sm h-20 max-h-full font-medium text-gray-800">
                        <div className="relative flex justify-center items-center gap-2 h-full">
                          <Button
                            handlerClick={() => handlerShowModalDisposisi(item)}
                            title="Disposisi"
                            typeClass="success"
                            classButton="text-xs py-1.5 txt-center">
                            <UserIcon className="h-4" />
                          </Button>
                          <Button
                            title="View Detail Project"
                            typeClass="others"
                            classButton="text-xs py-1.5 txt-center">
                            <DocumentIcon className="h-4" />
                          </Button>
                        </div>
                      </td>
                      <td className="p-4 relative">{item.io.internal_order}</td>
                      <td className="p-4 whitespace-pre-line">
                        {item.desc_project?.toUpperCase()}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        Rp {item.nilai_cogs.toLocaleString('id-ID')}
                      </td>
                      <td className="p-4 whitespace-pre-line">
                        {item.end_customer}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        {item.tgl_target_win}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal
        headingModal="Disposisi"
        onClose={(arg) => setshowModalDisposisi(arg)}
        isShow={showModalDisposisi}>
        <div className="relative flex flex-col gap-4">
          <div>
            <label
              htmlFor=""
              className="font-medium leading-relaxed text-gray-700">
              PIC Procurement :{' '}
            </label>
            <select
              required={true}
              name="pic_procurement"
              value={formDisposisi.pic_procurement}
              onChange={(e) => handlerOnChange(e as any)}
              className="relative w-full mt-2 border border-gray-200 pl-4 py-3 rounded-md">
              <option selected value="">
                Select PIC
              </option>
              <option value="">Bang Hanif</option>
              <option value="135">Mas Bay</option>
              <option value="134">UE</option>
            </select>
          </div>
          <div>
            <label
              htmlFor=""
              className="font-medium leading-relaxed text-gray-700">
              PIC Legal :{' '}
            </label>
            <select
              required={true}
              name="pic_legal"
              value={formDisposisi.pic_legal}
              onChange={(e) => handlerOnChange(e as any)}
              className="relative w-full mt-2 border border-gray-200 pl-4 py-3 rounded-md">
              <option selected value="">
                Select PIC
              </option>
              <option value="">Bang Hanif</option>
              <option value="135">Mas Bay</option>
              <option value="134">UE</option>
            </select>
          </div>

          <Button
            isSubmit={loadingDisposisi}
            handlerClick={handlerDisposisi}
            typeClass="primary"
            title="Submit Disposisi"
            classButton="mt-4 w-fit px-6">
            Assign
          </Button>
        </div>
      </Modal>
    </Layout>
  );
}
