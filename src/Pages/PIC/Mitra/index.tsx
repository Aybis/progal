import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Button, Modal, Table, Tbody, Thead } from '../../../Components/atoms';
import {
  ButtonDocument,
  FormBoq,
  FormFile,
  FormSearch,
  FormUpdateMitra,
} from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';
import { getMitraHasProject } from '../../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { DataMitraHasProject } from '../../../Services/redux/Types/hasmitra';

export default function Index() {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const { listMitraPic } = useAppSelector((state) => state.hasMitra);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [filterData, setfilterData] = useState<DataMitraHasProject[]>([]);

  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setfilterData(listMitraPic);
    } else {
      const filter = listMitraPic.filter((item) => {
        return (
          item.project?.no_io

            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.deskripsi_pekerjaan
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.project?.inisiasi?.title_project
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item?.mitra?.nama_vendor
            ?.toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
      });
      setfilterData(filter);
    }
  };

  const [modalForm, setmodalForm] = useState({
    type: '',
    data: {},
    document: {},
    typeForm: '',
  });
  const handlerModalForm = (
    type: string,
    data: any,
    document?: any,
    typeForm?: any,
  ) => {
    setmodalForm({
      type,
      data,
      document,
      typeForm,
    });
    setshowModal(true);
  };

  useEffect(() => {
    (async () => {
      const res = await dispatch(getMitraHasProject(await profile?.id));
      setfilterData(res);
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
        <FormSearch
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handlerSearch(event)
          }
        />

        {/* Section Table */}
        <Table classRoot="mt-5">
          <thead className="border-b">
            <tr className="bg-zinc-50 text-base">
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 w-32 font-medium text-gray-700">
                No
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                Action
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                IO
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                Judul Pekerjaan
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                Desk. Pekerjaan
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                Mitra
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700  whitespace-nowrap">
                Nilai Realisasi COGS
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                Nilai Pekerjaan
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                Nilai Efisiensi
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700  whitespace-nowrap">
                Nilai Down Payment
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                Tata Cara Bayar
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                Jangka Waktu
              </Thead>
              <Thead
                rowSpan={2}
                className="text-center py-3 px-4 font-medium  border-r text-gray-700 border-b">
                Jenis Dokumen
              </Thead>
              <Thead
                colSpan={7}
                className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                Dokumen
              </Thead>
              <Thead
                colSpan={2}
                className="text-center py-3 px-4 font-medium text-gray-700 border-l border-b">
                PIC
              </Thead>
            </tr>
            <tr className="bg-zinc-50 text-base">
              <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                SPPH
              </Thead>
              <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                SPH
              </Thead>
              <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                BAKN
              </Thead>
              <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                KHS
              </Thead>
              <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                Kontrak
              </Thead>
              <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                Permohonan
              </Thead>
              <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                Persetujuan
              </Thead>
              <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                Proc
              </Thead>
              <Thead className="text-center py-3 px-4 font-medium text-gray-700">
                Legal
              </Thead>
            </tr>
          </thead>
          <tbody>
            {filterData.length > 0 &&
              // sort by number
              filterData.map((item, index) => (
                <tr key={item?.id} className="text-sm">
                  <Tbody className="text-center py-3 px-4">{index + 1}</Tbody>
                  <Tbody className="text-center py-3 px-4">
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
                      <Button
                        handlerClick={() => handlerModalForm('boq', item)}
                        title="Update Mitra"
                        type="button"
                        isTransparent="success"
                        classButton="text-sm py-1 gap-1 rounded bg-indigo-100 border border-indigo-200 text-indigo-600 hover:bg-indigo-500 hover:text-white">
                        <PlusIcon className="h-4" /> BoQ
                      </Button>
                    </div>
                  </Tbody>

                  <Tbody className="text-center py-3 px-4">
                    {item?.project?.no_io ?? ''}
                  </Tbody>
                  <Tbody className="text-center py-3 px-4">
                    {item.project?.inisiasi?.title_project ?? '-'}
                  </Tbody>
                  <Tbody className="text-center py-3 px-4 uppercase">
                    {item.deskripsi_pekerjaan?.toLowerCase() ?? '-'}
                  </Tbody>
                  <Tbody className="text-center whitespace-nowrap py-3 px-4 uppercase">
                    {item?.mitra?.nama_vendor?.toLowerCase()}
                  </Tbody>
                  <Tbody className="text-center py-3 px-4">
                    {item?.nilai_realisasi_cogs?.toLocaleString('id-ID')}
                  </Tbody>
                  <Tbody className="text-center py-3 px-4">
                    {item?.nilai_pekerjaan?.toLocaleString('id-ID')}
                  </Tbody>
                  <Tbody className="text-center py-3 px-4">
                    {item?.nilai_pekerjaan !== null &&
                      (
                        parseInt(item?.nilai_realisasi_cogs) -
                        parseInt(item?.nilai_pekerjaan)
                      ).toLocaleString('id-ID')}
                  </Tbody>
                  <Tbody className="text-center py-3 px-4">
                    {item?.nilai_down_payment?.toLocaleString('id-ID')}
                  </Tbody>
                  <Tbody className="text-center py-3 px-4">
                    {item?.tata_cara_pembayaran}
                  </Tbody>
                  <Tbody className="text-center whitespace-nowrap py-3 px-4">
                    {item.start_jangka_waktu_pekerjaan === null
                      ? ''
                      : item?.start_jangka_waktu_pekerjaan +
                        ' s/d ' +
                        item.end_jangka_waktu_pekerjaan}
                  </Tbody>
                  <Tbody className="text-center uppercase">
                    <span className="bg-orange-100 px-2 py-1 rounded-md text-orange-700 text-sm">
                      {item.jenis_dokumen}
                    </span>
                  </Tbody>
                  <Tbody className="border-l py-3 px-8">
                    <ButtonDocument
                      handlerClick={handlerModalForm}
                      isUpload={item?.spph}
                      documentName="SPPH"
                      item={item}
                    />
                  </Tbody>
                  <Tbody className="border-l py-3 px-8">
                    <ButtonDocument
                      handlerClick={handlerModalForm}
                      isUpload={item?.sph}
                      documentName="SPH"
                      item={item}
                    />
                  </Tbody>
                  <Tbody className="border-l py-3 px-8">
                    <ButtonDocument
                      handlerClick={handlerModalForm}
                      isUpload={item?.bakn}
                      documentName="BAKN"
                      item={item}
                    />
                  </Tbody>
                  <Tbody className="border-l py-3 px-8">
                    <ButtonDocument
                      handlerClick={handlerModalForm}
                      isUpload={item?.khs}
                      documentName="KHS"
                      item={item}
                    />
                  </Tbody>
                  <Tbody className="border-l py-3 px-8">
                    <ButtonDocument
                      handlerClick={handlerModalForm}
                      isUpload={item?.kontrak}
                      documentName="KONTRAK"
                      item={item}
                    />
                  </Tbody>
                  <Tbody className="border-l py-3 px-8">
                    <ButtonDocument
                      handlerClick={handlerModalForm}
                      isUpload={item?.permohonan}
                      documentName="Permohonan"
                      item={item}
                    />
                  </Tbody>
                  <Tbody className="border-l py-3 px-8">
                    <ButtonDocument
                      handlerClick={handlerModalForm}
                      isUpload={item?.persetujuan}
                      documentName="Persetujuan"
                      item={item}
                    />
                  </Tbody>

                  <Tbody className="border-l text-center whitespace-nowrap">
                    {item?.project?.pic_procurement.name}
                  </Tbody>
                  <Tbody className="border-l text-center whitespace-nowrap">
                    {item.project?.pic_legal.name}
                  </Tbody>
                </tr>
              ))}
          </tbody>
        </Table>
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
        ) : modalForm.type === 'boq' ? (
          <FormBoq />
        ) : modalForm.type !== '' ? (
          <FormFile
            onClose={(arg) => setshowModal(arg)}
            name={modalForm.type}
            typeForm={modalForm.typeForm}
            dataDocument={modalForm.document}
            dataMitra={modalForm.data}
          />
        ) : null}
      </Modal>
    </Layout>
  );
}
