import { DocumentIcon, DocumentPlusIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { Button, Table, Tbody, Thead } from '../../../Components/atoms';
import { useAppSelector } from '../../../Services/redux/hook';

type Props = {
  handlerClick: (type: string, data: any) => void;
};

export default function TableProject(props: Props) {
  const ProjectMitra = useAppSelector((state) => state.hasMitra);
  const navigate = useNavigate();

  return (
    <Table classRoot="mt-5">
      <thead className="bg-zinc-50 text-base border-b">
        <tr>
          <Thead rowSpan={2}>No</Thead>
          <Thead rowSpan={2}>Action</Thead>
          <Thead rowSpan={2}>No. IO</Thead>
          <Thead rowSpan={2}>Judul Proyek</Thead>
          <Thead colSpan={2} className="border-b border-l">
            Mitra
          </Thead>
          <Thead colSpan={3} className="border-b border-l">
            Jusbis
          </Thead>
          <Thead colSpan={3} className="border-b border-l">
            Dokumen
          </Thead>
          <Thead colSpan={2} className="border-b border-l">
            PIC
          </Thead>
        </tr>
        <tr>
          <Thead className="border-l">Jumlah</Thead>
          <Thead className="border-l">Nilai COGS</Thead>
          <Thead className="border-l">Revenue</Thead>
          <Thead className="border-l">Project Margin</Thead>
          <Thead className="border-l">Nilai COGS</Thead>
          <Thead className="border-l">P6</Thead>
          <Thead className="border-l">P8</Thead>
          <Thead className="border-l">KL</Thead>
          <Thead className="border-l">Procurement</Thead>
          <Thead className="border-l">Legal</Thead>
        </tr>
      </thead>
      <tbody>
        {ProjectMitra.listProjectMitra.length > 0 &&
          ProjectMitra.listProjectMitra.map((item, index) => (
            <tr
              key={index}
              className="text-sm hover:bg-zinc-50 transition-all duration-300">
              <Tbody className="text-center py-3 px-4">{index + 1}</Tbody>
              <Tbody className="text-center py-3 px-4">
                <div className="relative flex gap-2 justify-center items-center">
                  <Button
                    handlerClick={() => props.handlerClick('mapping', item)}
                    title="Tambah Mitra"
                    type="button"
                    isTransparent="primary"
                    classButton="flex gap-1 px-2 text-sm">
                    <PlusIcon className="h-4" /> Mitra
                  </Button>
                  <Button
                    handlerClick={() => props.handlerClick('update', item)}
                    title="Update Project"
                    type="button"
                    isTransparent="update"
                    classButton="flex gap-1 px-2 text-sm">
                    <DocumentPlusIcon className="h-4" /> Project
                  </Button>

                  <Button
                    handlerClick={() => navigate(`/project/${item.id}`)}
                    title="Preview Project"
                    type="button"
                    classButton="gap-1"
                    isTransparent="warning">
                    <DocumentIcon className="h-4" /> Preview
                  </Button>
                </div>
              </Tbody>
              <Tbody className="text-center py-3 px-4">{item.no_io}</Tbody>
              <Tbody className="text-left py-3 px-4 uppercase">
                {item.inisiasi.desc_project}
              </Tbody>

              {/* Mitra */}
              <Tbody className="text-center py-3 px-4 w-24">
                {item.project_mitra.length}
              </Tbody>
              <Tbody className="text-center py-3 px-2 whitespace-nowrap">
                <div className="relative w-40 flex justify-between items-center">
                  <p>Rp</p>
                  <p>
                    {item.project_mitra
                      .reduce((a, b) => a + b.nilai_realisasi_cogs, 0)
                      .toLocaleString('id-ID')}
                  </p>
                </div>
              </Tbody>

              {/* Jusbis */}
              <Tbody className="text-center py-3 px-4 whitespace-nowrap">
                -
              </Tbody>
              <Tbody className="text-center py-3 px-4 whitespace-nowrap">
                -
              </Tbody>
              <Tbody className="text-center py-3 px-2 whitespace-nowrap border-l border-r">
                <div className="relative flex w-40 justify-between items-center">
                  <p>Rp</p>
                  <p>{item.inisiasi.nilai_project.toLocaleString('id-ID')}</p>
                </div>
              </Tbody>

              {/* DOKUMEN */}
              <Tbody className="text-center py-3 px-4 whitespace-nowrap">
                {item.file_p6}
              </Tbody>
              <Tbody className="text-center py-3 px-4 whitespace-nowrap">
                {item.file_p8}
              </Tbody>
              <Tbody className="text-center py-3 px-4 whitespace-nowrap">
                {item.file_kl}
              </Tbody>
              {/* PIC */}
              <Tbody className="text-center py-3 px-4 whitespace-nowrap">
                {item.pic_procurement.name}
              </Tbody>
              <Tbody className="text-center py-3 px-4 whitespace-nowrap">
                {item.pic_legal.name}
              </Tbody>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}