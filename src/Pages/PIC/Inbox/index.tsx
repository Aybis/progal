import { DocumentIcon, ShareIcon } from '@heroicons/react/24/solid';
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
        <Table classRoot="mt-8">
          <thead>
            <tr className="bg-zinc-100">
              <Thead>No</Thead>
              <Thead>Action</Thead>
              <Thead>No. IO</Thead>
              <Thead>Project</Thead>
              <Thead>Nilai COGS</Thead>
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
                  className="text-sm text-center border-b border-zinc-100">
                  <Tbody>{index + 1}</Tbody>
                  <Tbody>
                    <div className="relative justify-center items-center flex gap-2">
                      <Button
                        isTransparent="update"
                        title="Mapping Mitra"
                        handlerClick={() => handlerMapping(item)}>
                        <ShareIcon className="h-5" />
                      </Button>
                      <Button isTransparent="warning" title="Preview Project">
                        <DocumentIcon className="h-5" />
                      </Button>
                    </div>
                  </Tbody>
                  <Tbody>{item.no_io}</Tbody>
                  <Tbody className="text-left">
                    {item.inisiasi.desc_project}
                  </Tbody>
                  <Tbody className="whitespace-nowrap">
                    Rp {item.inisiasi.nilai_cogs.toLocaleString('id-ID')}
                  </Tbody>
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
