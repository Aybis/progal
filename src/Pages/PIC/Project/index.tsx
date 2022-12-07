import { PlusIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { Button, Modal } from '../../../Components/atoms';
import { FormMappingMitra, FormSearch } from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';
import {
  getProjectHasMitra,
  setSelectedProjectMitra,
} from '../../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { DataProjectHasMitra } from '../../../Services/redux/Types/hasmitra';

export default function Index() {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const ProjectMitra = useAppSelector((state) => state.hasMitra);
  const [showModal, setshowModal] = useState<boolean>(false);

  const handlerShowModal = (item: DataProjectHasMitra) => {
    dispatch(setSelectedProjectMitra(item));
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

        {/* Section Table */}
        <div className="relative w-full mt-8 overflow-x-auto">
          <table className="relative w-full">
            <thead className="bg-zinc-50 text-base border-b">
              <tr>
                <th rowSpan={2} className="text-center py-3 px-4 w-32">
                  No
                </th>
                <th rowSpan={2} className="text-center py-3 px-4">
                  Action
                </th>
                <th rowSpan={2} className="text-center py-3 px-4">
                  IO
                </th>
                <th rowSpan={2} className="text-center py-3 px-4">
                  Project
                </th>
                <th rowSpan={2} className="text-center py-3 px-4">
                  Nilai
                </th>
                <th rowSpan={2} className="text-center py-3 px-4 border-r">
                  Mitra
                </th>
                <th colSpan={2} className="text-center py-3 px-4 border-b">
                  PIC
                </th>
              </tr>
              <tr>
                <th className="text-center py-3 px-4">Procurement</th>
                <th className="text-center py-3 px-4 border-l">Legal</th>
              </tr>
            </thead>
            <tbody>
              {ProjectMitra.listProjectMitra.length > 0 &&
                ProjectMitra.listProjectMitra.map((item, index) => (
                  <tr
                    key={index}
                    className="text-sm hover:bg-zinc-50 transition-all duration-300">
                    <td className="text-center py-3 px-4">{index + 1}</td>
                    <td className="text-center py-3 px-4">
                      <Button
                        handlerClick={() => handlerShowModal(item)}
                        title="Tambah Mitra"
                        type="button"
                        typeClass="primary"
                        classButton="text-sm py-1 rounded bg-blue-100 border border-blue-200 text-blue-600 hover:bg-blue-500 hover:text-white">
                        <PlusIcon className="h-4" /> Mitra
                      </Button>
                    </td>
                    <td className="text-center py-3 px-4">{item.no_io}</td>
                    <td className="text-left py-3 px-4">
                      {item.inisiasi.desc_project}
                    </td>
                    <td className="text-left py-3 px-4 whitespace-nowrap">
                      Rp {item.inisiasi.nilai_project.toLocaleString('id-ID')}
                    </td>
                    <td className="text-center py-3 px-4 w-24">
                      {item.project_mitra.length}
                    </td>
                    <td className="text-center py-3 px-4 border-l">
                      {item.pic_procurement.name}
                    </td>
                    <td className="text-center py-3 px-4 border-l">
                      {item.pic_legal.name}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        headingModal="Form Tambah Mitra"
        isShow={showModal}
        onClose={(arg) => setshowModal(arg)}>
        <FormMappingMitra
          typePage="project"
          handlerClose={(arg) => setshowModal(arg)}
        />
      </Modal>
    </Layout>
  );
}
