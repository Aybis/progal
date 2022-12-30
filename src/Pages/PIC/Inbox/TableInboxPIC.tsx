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
  handlerMapping: (type: string, item: any) => void;
};

export default function TableInboxPIC(props: Props) {
  const { loading, filterProject } = useAppSelector((state) => state.project);

  return (
    <Table classRoot="mt-5">
      <thead className="bg-zinc-50 border">
        <tr className="">
          <Thead rowSpan={2} isFreeze>
            No
          </Thead>
          <Thead rowSpan={2} isFreeze>
            Action
          </Thead>
          <Thead rowSpan={2} isFreeze>
            No. IO
          </Thead>
          <Thead rowSpan={2} isFreeze>
            Judul Proyek
          </Thead>
          <Thead rowSpan={2} isFreeze>
            AM
          </Thead>
          <Thead colSpan={6} isFreeze className="border-l border-b">
            Jusbis
          </Thead>
        </tr>
        <tr>
          <Thead isChildThead isFreeze className="border-l">
            Revenue
          </Thead>
          <Thead isChildThead isFreeze className="border-l">
            Nilai COGS
          </Thead>
          <Thead isChildThead isFreeze className="border-l">
            Project Margin
          </Thead>
          <Thead isChildThead isFreeze className="border-l">
            Status
          </Thead>
          <Thead isChildThead isFreeze className="border-l">
            Metode Pembiayaan
          </Thead>
          <Thead isChildThead isFreeze className="border-l">
            Dokumen
          </Thead>
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
        ) : filterProject?.length === 0 ? (
          // state when data is null
          <TableData isEmpty colSpan={9} />
        ) : (
          // state when data is not null
          filterProject?.map((item: DataProject, index: number) => (
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
              <Tbody>{parseInt(item.no_io)}</Tbody>
              <Tbody className="text-left whitespace-nowrap">
                {item?.inisiasi?.title_project}
              </Tbody>
              <Tbody className="text-left whitespace-nowrap">
                {item?.inisiasi?.am?.name}
              </Tbody>
              <Tbody className="">
                <TableDataCurrency
                  className="w-40"
                  currency="Rp"
                  value={item?.inisiasi?.jasbisis?.[0]?.cogs!}
                />
              </Tbody>
              <Tbody className="whitespace-nowrap">
                <TableDataCurrency
                  className="w-40"
                  value={item?.inisiasi?.jasbisis?.[0]?.revenue!}
                  currency="Rp"
                />
              </Tbody>
              <Tbody className="whitespace-nowrap">
                {item?.inisiasi?.jasbisis?.[0]
                  ? item?.inisiasi?.jasbisis?.[0].ebitda_project_margin + '%'
                  : '-'}
              </Tbody>
              <Tbody className="whitespace-nowrap">
                {item?.inisiasi?.jasbisis?.[0]?.status ?? '-'}
              </Tbody>
              <Tbody className="whitespace-nowrap">
                {item?.inisiasi?.jasbisis?.[0]?.metode_pembiayaan ?? '-'}
              </Tbody>
              <Tbody className="whitespace-nowrap">
                {item?.inisiasi?.jasbisis?.[0] ? (
                  <a
                    href={item?.inisiasi.jasbisis?.[0]?.dokumen_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-700">
                    View
                  </a>
                ) : (
                  '-'
                )}
              </Tbody>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}
