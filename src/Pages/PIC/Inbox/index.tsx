import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../Components/atoms';
import {
  Content,
  FormMappingMitra,
  FormSearch,
  LengthData,
} from '../../../Components/molecules';
import {
  getListProject,
  setSelectedProject,
} from '../../../Services/redux/Actions/project';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { DataProject } from '../../../Services/redux/Types/project';
import TableInboxPIC from './TableInboxPIC';

export default function Index() {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const { listProject } = useAppSelector((state) => state.project);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [filterData, setfilterData] = useState<DataProject[]>([]);
  const navigate = useNavigate();

  const handlerMapping = (type: string, item: DataProject) => {
    dispatch(setSelectedProject(item));
    if (type === 'mapping') {
      setshowModal(true);
    }

    if (type === 'preview') {
      navigate(`/project/${item.id}}`);
    }
  };

  const handlerFilterData = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setfilterData(listProject);
    } else {
      const filter = listProject.filter((item) => {
        return (
          item.no_io?.toString()?.includes(event.target.value) ||
          item.inisiasi.title_project
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.inisiasi.end_customer
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.inisiasi.nilai_cogs
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase())
        );
      });

      setfilterData(filter);
    }
  };

  useEffect(() => {
    if (profile?.id) {
      (async () => {
        const res = await dispatch(getListProject());
        setfilterData(res.data);
        return res;
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <Content
      textHeading="Disposisi"
      subHeading="List Project Disposisi oleh Manager">
      <div className="relative bg-white p-4 rounded-lg mt-12">
        <FormSearch onChange={handlerFilterData} />
        <LengthData data={filterData} />

        {/* Section Table */}
        <TableInboxPIC
          dataProject={filterData}
          handlerMapping={handlerMapping}
        />
      </div>

      <Modal
        headingModal="Form Mapping Mitra"
        isShow={showModal}
        onClose={(arg) => setshowModal(arg)}>
        <FormMappingMitra
          typePage="inbox"
          handlerClose={(arg) => setshowModal(arg)}
        />
      </Modal>
    </Content>
  );
}
