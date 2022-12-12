import { useEffect, useState } from 'react';
import { Modal } from '../../../Components/atoms';
import {
  FormDocument,
  FormMappingMitra,
  FormSearch,
  LengthData,
} from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';
import {
  getProjectHasMitra,
  setSelectedProjectMitra,
} from '../../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { DataProjectHasMitra } from '../../../Services/redux/Types/hasmitra';
import TableProject from './TableProject';

export default function Index() {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const [showModal, setshowModal] = useState<boolean>(false);
  const ProjectMitra = useAppSelector((state) => state.hasMitra);

  const [typeForm, settypeForm] = useState<string>('');

  const handlerClick = (type: string, item: DataProjectHasMitra) => {
    dispatch(setSelectedProjectMitra(item));
    settypeForm(type);
    setshowModal(true);
  };

  useEffect(() => {
    (async () => {
      await dispatch(getProjectHasMitra(await profile?.id));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <Layout
      textHeading="Project Update"
      subHeading="List Project Update oleh PIC">
      {/* Section Table Data */}
      <div className="relative bg-white p-4 rounded-lg mt-12">
        {/* Filter Search */}
        <FormSearch />
        <LengthData data={ProjectMitra.listProjectMitra} />
        {/* Section Table */}
        <TableProject handlerClick={handlerClick} />
      </div>

      <Modal
        headingModal={
          typeForm === 'mapping' ? 'Tambah Mitra' : 'Upload Dokumen'
        }
        isShow={showModal}
        onClose={(arg) => setshowModal(arg)}>
        {typeForm === 'mapping' ? (
          <FormMappingMitra
            typePage="project"
            handlerClose={(arg) => setshowModal(arg)}
          />
        ) : (
          <FormDocument handlerClose={(arg) => setshowModal(arg)} />
        )}
      </Modal>
    </Layout>
  );
}
