import {
  DocumentPlusIcon,
  PencilIcon,
  TrashIcon,
  DocumentCheckIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Button, Input, Modal } from '../../../Components/atoms';
import { FormFile, FormUpdateMitra } from '../../../Components/molecules';
import { setHeader } from '../../../Configs/api';
import Layout from '../../../Layouts/Layout';
import progalApi from '../../../Middleware/progal-api';

type ProjectMitra = {
  id: number | string;
  amandemen?: [];
  bakn?: any;
  bast?: any;
  boq_item?: [];
  deskripsi_pekerjaan?: string;
  end_jangka_waktu_pekerjaan?: string;
  is_down_payment?: boolean;
  jenis_dokumen?: string;
  khs?: any;
  kontrak?: any;
  mitra?: {
    akun_vendor?: string;
    alamat?: string;
    deskripsi_vendor?: string;
    direktur?: string;
    email?: string;
    fax?: string;
    id: number;
    jenis_vendor_id?: number;
    nama_vendor?: string;
    no_tlpn?: string;
    pic?: string;
  };
  nilai_down_payment?: string;
  nilai_pekerjaan?: string;
  nilai_realisasi_cogs?: string;
  permohonan?: any;
  persetujuan?: any;
  project?: any;
  sph?: any;
  spph?: any;
  start_jangka_waktu_pekerjaan: string;
  status?: string;
  tata_cara_pembayaran?: string;
};

export default function Index() {
  const [dataProjectMitra, setdataProjectMitra] = useState<ProjectMitra[]>([]);
  const [dataFilter, setdataFilter] = useState<ProjectMitra[]>([]);
  const [showModal, setshowModal] = useState<boolean>(false);

  const [modalForm, setmodalForm] = useState({
    type: '',
    data: {},
  });

  const handlerModalForm = (type: string, data: any) => {
    setmodalForm({
      type,
      data,
    });
    setshowModal(true);
  };

  const handlerSearchProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      setdataFilter(dataProjectMitra);
    } else {
      const data = dataProjectMitra.filter((item) => {
        return item.mitra?.nama_vendor
          ?.toLowerCase()
          .includes(value.toLowerCase());
      });
      setdataFilter(data);
    }
  };

  useEffect(() => {
    const getProject = async () => {
      setHeader();

      const response: any = await progalApi.mitra({
        params: {
          pic_id: 134,
        },
      });
      setdataProjectMitra(response);
      setdataFilter(response);
      return response;
    };
    getProject();
  }, []);

  return (
    <Layout
      textHeading="Project Mitra"
      subHeading="List Project berdasarkan mitra">
      {/* Section Data Table */}
      <div className="relative bg-white p-4 rounded-lg mt-12">
        {/* Filter Input */}
        <div className="relative flex gap-2">
          <div className="relative">
            <Input
              onChange={handlerSearchProject}
              classInput="w-64 placeholder:text-gray-400 placeholder:font-normal placeholder:italic pl-10 text-sm"
              placeholder="Search Something"
            />
            <MagnifyingGlassIcon className="h-5 absolute top-2.5 left-3 text-gray-400" />
          </div>
          <Button type="button" typeClass="primary" classButton="text-sm">
            Search
          </Button>
        </div>

        {/* Section Table */}
        <div className="relative w-full mt-8 overflow-x-auto">
          <table className="relative w-full border border-zinc-200">
            <thead className="border-b">
              <tr className="bg-zinc-50 text-base">
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 w-32 font-medium text-gray-700">
                  No
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                  Action
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                  IO
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                  Desk. Pekerjaan
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                  Mitra
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  Nilai
                </th>
                <th
                  colSpan={6}
                  className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                  Dokumen
                </th>
                <th
                  colSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 border-l border-b">
                  PIC
                </th>
              </tr>
              <tr className="bg-zinc-50 text-base">
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  SPPH
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  SPH
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  BAKN
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  KHS
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  Kontrak
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  Surat
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  Proc
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">
                  Legal
                </th>
              </tr>
            </thead>
            <tbody>
              {dataFilter.length > 0 &&
                dataFilter.map((item, index) => (
                  <tr key={item?.id} className="text-sm">
                    <td className="text-center py-3 px-4">{index + 1}</td>
                    <td className="text-center py-3 px-4">
                      <div className="relative flex justify-center gap-2">
                        <Button
                          title="Delete Mitra"
                          type="button"
                          classButton="text-sm py-1 gap-1 rounded bg-red-100 border border-red-200 text-red-600 hover:bg-red-500 hover:text-white">
                          <TrashIcon className="h-4" /> Mitra
                        </Button>
                        <Button
                          handlerClick={() => handlerModalForm('update', item)}
                          title="Update Mitra"
                          type="button"
                          typeClass="others"
                          classButton="text-sm py-1 gap-1 rounded bg-indigo-100 border border-indigo-200 text-indigo-600 hover:bg-indigo-500 hover:text-white">
                          <PencilIcon className="h-3" /> Mitra
                        </Button>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      {item?.project?.no_io ?? ''}
                    </td>
                    <td className="text-left py-3 px-4 whitespace-pre-wrap">
                      {item.deskripsi_pekerjaan ?? '-'}
                    </td>
                    <td className="text-center py-3 px-4 whitespace-nowrap">
                      {item?.mitra?.nama_vendor}
                    </td>
                    <td className="text-left py-3 px-4 whitespace-nowrap">
                      Rp {item?.nilai_realisasi_cogs}
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      {/* <Button
                      handlerClick={() =>
                        handlerModalForm('spph', itemMitra)
                      }
                      title="Upload SPPH"
                      classButton="p-1 bg-opacity-10 text-indigo-700 hover:text-white"
                      typeClass="others">
                      <DocumentPlusIcon className="h-5" />
                    </Button> */}

                      <div className="relative flex gap-2">
                        <Button
                          handlerClick={() => handlerModalForm('update', item)}
                          title="Preview File"
                          type="button"
                          typeClass="others"
                          classButton="text-sm py-1 gap-1 rounded bg-green-100 border border-green-200 text-green-600 hover:bg-green-500 hover:text-white">
                          <DocumentCheckIcon className="h-5" />
                        </Button>
                        <Button
                          title="Update File"
                          type="button"
                          typeClass="others"
                          classButton="text-sm py-1 gap-1 rounded bg-indigo-100 border border-indigo-200 text-indigo-600 hover:bg-indigo-500 hover:text-white">
                          <DocumentDuplicateIcon className="h-5" />
                        </Button>
                      </div>
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <Button
                        handlerClick={() => handlerModalForm('sph', item)}
                        title="Upload SPH"
                        classButton="p-1 bg-opacity-10 text-blue-700 hover:text-white"
                        typeClass="primary">
                        <DocumentPlusIcon className="h-5" />
                      </Button>
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <Button
                        handlerClick={() => handlerModalForm('bakn', item)}
                        title="Upload BAKN"
                        classButton="p-1 bg-opacity-10 text-blue-700 hover:text-white"
                        typeClass="primary">
                        <DocumentPlusIcon className="h-5" />
                      </Button>
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <Button
                        handlerClick={() => handlerModalForm('khs', item)}
                        title="Upload KHS"
                        classButton="p-1 bg-opacity-10 text-blue-700 hover:text-white"
                        typeClass="primary">
                        <DocumentPlusIcon className="h-5" />
                      </Button>
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <Button
                        handlerClick={() => handlerModalForm('kontrak', item)}
                        title="Upload Kontrak"
                        classButton="p-1 bg-opacity-10 text-blue-700 hover:text-white"
                        typeClass="primary">
                        <DocumentPlusIcon className="h-5" />
                      </Button>
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <Button
                        handlerClick={() => handlerModalForm('surat', item)}
                        title="Upload Surat"
                        classButton="p-1 bg-opacity-10 text-blue-700 hover:text-white"
                        typeClass="primary">
                        <DocumentPlusIcon className="h-5" />
                      </Button>
                    </td>

                    <td className="text-center py-3 px-4 border-l capitalize">
                      {/* {item.pic_procurement.name.toLowerCase()} */}
                    </td>
                    <td className="text-center py-3 px-4 border-l capitalize">
                      {/* {item.pic_legal.name.toLowerCase()} */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        classHeading="uppercase"
        headingModal={`Form ${modalForm.type}`}
        isShow={showModal}
        onClose={setshowModal}>
        {modalForm.type === 'update' ? (
          <FormUpdateMitra projectMitra={modalForm.data} />
        ) : modalForm.type !== '' ? (
          <FormFile name={modalForm.type} data={modalForm.data} />
        ) : null}
      </Modal>
    </Layout>
  );
}
