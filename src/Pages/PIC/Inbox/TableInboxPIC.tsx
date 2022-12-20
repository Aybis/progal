import { DocumentIcon, ShareIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Table,
  TableDataCurrency,
  Tbody,
  Thead,
} from '../../../Components/atoms';
import { TableData } from '../../../Components/molecules';
import { useAppSelector } from '../../../Services/redux/hook';
import { DataProject } from '../../../Services/redux/Types/project';

type Props = {
  dataProject?: DataProject[] | [];
  handlerMapping: (type: string, item: any) => void;
};

export default function TableInboxPIC(props: Props) {
  const { loading } = useAppSelector((state) => state.project);

  return (
    <Table classRoot="mt-5">
      <thead className="bg-zinc-50 border">
        <tr className="">
          <Thead rowSpan={2} className="sticky top-0">
            No
          </Thead>
          <Thead rowSpan={2} className="sticky top-0">
            Action
          </Thead>
          <Thead rowSpan={2} className="sticky top-0">
            No. IO
          </Thead>
          <Thead rowSpan={2} className="sticky top-0">
            Judul Proyek
          </Thead>

          <Thead colSpan={5} className="sticky top-0 border-l border-b">
            Jusbis
          </Thead>
        </tr>
        <tr>
          <Thead className="sticky top-0 border-l">Nilai COGS</Thead>
          <Thead className="sticky top-0 border-l">Revenue</Thead>
          <Thead className="sticky top-0 border-l">Project Margin</Thead>
          <Thead className="sticky top-0 border-l">Status</Thead>
          <Thead className="sticky top-0 border-l">Metode Pembiayaan</Thead>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          // state when fetch data
          <tr>
            <Tbody colSpan={10} className="text-center text-sm py-4">
              Loading...
            </Tbody>
          </tr>
        ) : props?.dataProject?.length === 0 ? (
          // state when data is null
          <TableData isEmpty colSpan={9} />
        ) : (
          // state when data is not null
          props?.dataProject?.map((item: DataProject, index: number) => (
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
                    handlerClick={() => props.handlerMapping('mapping', item)}>
                    <ShareIcon className="h-4" /> Mapping
                  </Button>
                  <Button
                    isTransparent="warning"
                    title="Preview Project"
                    classButton="text-sm flex gap-2"
                    handlerClick={() => props.handlerMapping('preview', item)}>
                    <DocumentIcon className="h-4" /> Preview
                  </Button>
                </div>
              </Tbody>
              <Tbody>{item.no_io}</Tbody>
              <Tbody className="text-left whitespace-nowrap">
                {item.inisiasi.title_project}
              </Tbody>
              <Tbody className="whitespace-nowrap">
                <TableDataCurrency
                  className="w-40"
                  value={item.inisiasi.nilai_cogs}
                  currency="Rp"
                />
                {/* Rp {.toLocaleString('id-ID')} */}
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
  );
}
