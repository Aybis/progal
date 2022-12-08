import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Button, Modal } from '../../../Components/atoms';
import {
  ButtonDocument,
  FormFile,
  FormSearch,
  FormUpdateMitra,
} from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';
import { getMitraHasProject } from '../../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';

export default function Index() {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const { listMitraPic } = useAppSelector((state) => state.hasMitra);
  const [showModal, setshowModal] = useState<boolean>(false);

  // const [dataFilter, setdataFilter] =
  //   useState<DataMitraHasProject[]>(listMitraPic);
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

  // const handlerSearchProject = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   console.log(dataFilter);
  //   if (value === '') {
  //     setdataFilter(listMitraPic);
  //   } else {
  //     const data = listMitraPic.filter((item) => {
  //       return (
  //         item.mitra?.nama_vendor
  //           ?.toLowerCase()
  //           .includes(value.toLowerCase()) ||
  //         item.deskripsi_pekerjaan
  //           ?.toLowerCase()
  //           .includes(value.toLowerCase()) ||
  //         item.project?.no_io?.toLowerCase().includes(value.toLowerCase())
  //       );
  //     });
  //     setdataFilter(data);
  //   }
  // };

  useEffect(() => {
    (async () => {
      await dispatch(getMitraHasProject(await profile?.id));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <Layout
      textHeading="Project Mitra"
      subHeading="List Project berdasarkan mitra">
      {/* Section Data Table */}
      <div className="relative bg-white p-4 rounded-lg mt-12">
        {/* Filter Input */}
        <FormSearch />

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
              {listMitraPic.length > 0 &&
                listMitraPic.map((item, index) => (
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
                      Rp {item?.nilai_realisasi_cogs?.toLocaleString('id-ID')}
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <ButtonDocument
                        handlerClick={() => handlerModalForm('update', item)}
                        isUpload={item?.spph}
                        documentName="SPPH"
                        item={item}
                      />
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <ButtonDocument
                        handlerClick={() => handlerModalForm('update', item)}
                        isUpload={item?.sph}
                        documentName="SPH"
                        item={item}
                      />
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <ButtonDocument
                        handlerClick={() => handlerModalForm('update', item)}
                        isUpload={item?.bakn}
                        documentName="BAKN"
                        item={item}
                      />
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <ButtonDocument
                        handlerClick={() => handlerModalForm('update', item)}
                        isUpload={item?.khs}
                        documentName="KHS"
                        item={item}
                      />
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <ButtonDocument
                        handlerClick={() => handlerModalForm('update', item)}
                        isUpload={item?.kontrak}
                        documentName="KONTRAK"
                        item={item}
                      />
                    </td>
                    <td className="text-center py-3 px-8 border-l whitespace-nowrap">
                      <ButtonDocument
                        handlerClick={() => handlerModalForm('update', item)}
                        isUpload={item?.permohonan}
                        documentName="Permohonan"
                        item={item}
                      />
                    </td>

                    <td className="text-center py-3 px-4 border-l capitalize">
                      {item?.project?.pic_procurement.name.toLowerCase()}
                    </td>
                    <td className="text-center py-3 px-4 border-l capitalize">
                      {item.project?.pic_legal.name.toLowerCase()}
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
          <FormUpdateMitra
            onClose={(arg) => setshowModal(arg)}
            projectMitra={modalForm.data}
          />
        ) : modalForm.type !== '' ? (
          <FormFile name={modalForm.type} data={modalForm.data} />
        ) : null}
      </Modal>
    </Layout>
  );
}
