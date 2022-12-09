import { DocumentIcon, ShareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Button, Modal, Table, Tbody, Thead } from '../../../Components/atoms';
import { FormMappingMitra, FormSearch } from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';
import { setSelectedProject } from '../../../Services/redux/Actions/project';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { DataProject } from '../../../Services/redux/Types/project';

export default function Index() {
  const dispatch = useAppDispatch();
  const { listProject, loading } = useAppSelector((state) => state.project);
  const [showModal, setshowModal] = useState<boolean>(false);

  const handlerMapping = (item: DataProject) => {
    setshowModal(true);
    dispatch(setSelectedProject(item));
  };

  return (
    <Layout
      textHeading="Disposisi"
      subHeading="List Project Disposisi oleh Manager">
      <div className="relative bg-white p-4 rounded-lg mt-12">
        <FormSearch />

        {/* Section Table */}
        <Table classRoot="mt-5">
          <thead>
            <tr className="bg-zinc-100">
              <Thead className="sticky top-0">No</Thead>
              <Thead className="sticky top-0">Action</Thead>
              <Thead className="sticky top-0">No. IO</Thead>
              <Thead className="sticky top-0">Project</Thead>
              <Thead className="sticky top-0">Nilai Realisasi COGS</Thead>
              <Thead className="sticky top-0">Revenue</Thead>
              <Thead className="sticky top-0">Project Margin</Thead>
              <Thead className="sticky top-0">Status</Thead>
              <Thead className="sticky top-0">Jusbis</Thead>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // state when fetch data
              <tr>
                <Tbody colSpan={5} className="text-center text-sm py-4">
                  Loading...
                </Tbody>
              </tr>
            ) : listProject.length === 0 ? (
              // state when data is null
              <tr>
                <Tbody colSpan={5} className="text-center text-sm py-4">
                  Data Not Found
                </Tbody>
              </tr>
            ) : (
              // state when data is not null
              listProject.map((item: DataProject, index: number) => (
                <tr
                  key={item.id}
                  className="text-sm text-center border-b border-zinc-100 hover:bg-zinc-50 transition-all duration-300">
                  <Tbody>{index + 1}</Tbody>
                  <Tbody>
                    <div className="relative justify-center items-center flex gap-2">
                      <Button
                        isTransparent="primary"
                        title="Mapping Mitra"
                        classButton="text-sm flex gap-2"
                        handlerClick={() => handlerMapping(item)}>
                        <ShareIcon className="h-4" /> Mapping
                      </Button>
                      <Button
                        isTransparent="warning"
                        title="Preview Project"
                        classButton="text-sm flex gap-2">
                        <DocumentIcon className="h-4" /> Preview
                      </Button>
                    </div>
                  </Tbody>
                  <Tbody>{item.no_io}</Tbody>
                  <Tbody className="text-left whitespace-pre-line">
                    {item.inisiasi.title_project}
                  </Tbody>
                  <Tbody className="whitespace-nowrap">
                    Rp {item.inisiasi.nilai_cogs.toLocaleString('id-ID')}
                  </Tbody>
                  <Tbody className="whitespace-nowrap">-</Tbody>
                  <Tbody className="whitespace-nowrap">-</Tbody>
                  <Tbody className="whitespace-nowrap">-</Tbody>
                  <Tbody className="whitespace-nowrap">-</Tbody>
                </tr>
              ))
            )}
          </tbody>
        </Table>
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
    </Layout>
  );
}
