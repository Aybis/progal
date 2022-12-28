import { useEffect, useState } from 'react';
import { Modal } from '../../../Components/atoms';
import {
  Content,
  FormAmandemen,
  FormBoq,
  FormFile,
  FormSearch,
  LengthData,
} from '../../../Components/molecules';
import {
  getMitraHasProjectDone,
  setListMitraPicDoneFilter,
  setListMitraPicFilter,
} from '../../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import TableDone from './TableDone';

export default function Index() {
  const dispatch = useAppDispatch();
  const [showModal, setshowModal] = useState<boolean>(false);
  const { profile } = useAppSelector((state) => state.user);
  const { listMitraDone, listMitraFilterDone } = useAppSelector(
    (state) => state.hasMitra,
  );

  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      dispatch(setListMitraPicFilter(listMitraDone));
    } else {
      const filter = listMitraDone.filter((item) => {
        return (
          parseInt(item.project?.no_io!)
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
      dispatch(setListMitraPicDoneFilter(filter));
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
    if (profile?.id) {
      (async () => {
        return await dispatch(getMitraHasProjectDone(await profile?.id));
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <Content
      textHeading="Project Mitra Done"
      subHeading="List Project berdasarkan mitra yang sudah selesai">
      {/* Section Data Table */}
      <div className="relative bg-white p-4 rounded-lg mt-12">
        {/* Filter Input */}
        <FormSearch
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handlerSearch(event)
          }
        />
        <LengthData data={listMitraFilterDone} />

        {/* Section Table */}
        <TableDone
          data={listMitraFilterDone}
          handlerModalForm={handlerModalForm}
        />
      </div>

      <Modal
        classHeading="uppercase"
        headingModal={`Form ${
          modalForm.type?.toLowerCase() === 'permohonan'
            ? 'Permohonan Jangka Waktu'
            : modalForm.type?.toLowerCase() === 'persetujuan'
            ? 'Persetujuan Jangka Waktu'
            : modalForm.type
        }`}
        isShow={showModal}
        onClose={setshowModal}>
        {modalForm.type === 'boq' ? (
          <FormBoq
            dataProject={modalForm.data}
            handlerClose={(arg) => setshowModal(arg)}
          />
        ) : modalForm.type === 'amandemen' ? (
          <FormAmandemen
            onClose={(arg) => setshowModal(arg)}
            projectMitra={modalForm.data}
          />
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
    </Content>
  );
}
