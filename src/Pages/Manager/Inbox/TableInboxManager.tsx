import { DocumentIcon, UserIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Table,
  TableDataCurrency,
  Tbody,
  Thead,
} from '../../../Components/atoms';
import { TableData } from '../../../Components/molecules';
import { useAppSelector } from '../../../Services/redux/hook';
import { DataInisiasi } from '../../../Services/redux/Types/inisiasi';

type Props = {
  data?: DataInisiasi[] | [];
  handlerMapping: (type: string, item: any) => void;
};

export default function TableInboxManager(props: Props) {
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
          <Thead rowSpan={2} className="sticky top-0">
            End Customer
          </Thead>
          <Thead colSpan={4} className="sticky top-0 border-l border-b">
            Jusbis
          </Thead>
        </tr>
        <tr>
          <Thead className="sticky top-0 border-l">Nilai COGS</Thead>
          <Thead className="sticky top-0 border-l">Revenue</Thead>
          <Thead className="sticky top-0 border-l">Project Margin</Thead>
          <Thead className="sticky top-0 border-l">Status</Thead>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          // state when fetch data
          <tr>
            <Tbody colSpan={9} className="text-center text-sm py-4">
              Loading...
            </Tbody>
          </tr>
        ) : props?.data?.length === 0 ? (
          // state when data is null
          <TableData isEmpty colSpan={9} />
        ) : (
          // state when data is not null
          props?.data?.map((item: DataInisiasi, index: number) => (
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
                    handlerClick={() =>
                      props.handlerMapping('disposisi', item)
                    }>
                    <UserIcon className="h-4" /> Disposisi
                  </Button>
                  <Button
                    isTransparent="warning"
                    handlerClick={() => props.handlerMapping('preview', item)}
                    title="Preview Project"
                    classButton="text-sm flex gap-2">
                    <DocumentIcon className="h-4" /> Preview
                  </Button>
                </div>
              </Tbody>
              <Tbody>{item?.io?.internal_order}</Tbody>
              <Tbody className="text-left whitespace-pre-line">
                {item?.title_project ?? item?.desc_project}
              </Tbody>
              <Tbody className="whitespace-pre-line">
                {item?.end_customer}
              </Tbody>
              <Tbody className="">
                <TableDataCurrency
                  className="w-40"
                  currency="Rp"
                  value={item.nilai_cogs}
                />
              </Tbody>
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
