import { useEffect, useState } from 'react';
import { Modal } from '../../../Components/atoms';
import {
  FormBoq,
  FormFile,
  FormSearch,
  FormUpdateMitra,
} from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';
import { getMitraHasProject } from '../../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { DataMitraHasProject } from '../../../Services/redux/Types/hasmitra';
import TableMitra from './TableMitra';

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
        <TableMitra data={filterData} handlerModalForm={handlerModalForm} />
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
          <FormBoq
            dataProject={modalForm.data}
            handlerClose={(arg) => setshowModal(arg)}
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
    </Layout>
  );
}
