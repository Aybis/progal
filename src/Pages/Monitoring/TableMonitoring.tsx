import { DocumentIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  LinkDocument,
  Table,
  TableDataCurrency,
  Tbody,
  Thead,
} from '../../Components/atoms';
import { DataMitraHasProject } from '../../Services/redux/Types/hasmitra';

type Props = {
  handlerModalForm?: (
    type: string,
    data: any,
    document?: any,
    typeForm?: any,
  ) => void;
  data: DataMitraHasProject[];
};

export default function TableMonitoring(props: Props) {
  const navigate = useNavigate();
  return (
    <Table classRoot="mt-5">
      <thead className="border-b">
        <tr className="bg-zinc-50 text-base">
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 w-32 font-medium text-gray-700">
            No
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            Action
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            IO
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            Judul Pekerjaan
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            Desk. Pekerjaan
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            Mitra
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700  whitespace-nowrap">
            Nilai Realisasi COGS
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            Nilai Pekerjaan
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            Nilai Efisiensi
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700  whitespace-nowrap">
            Nilai Down Payment
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            Tata Cara Bayar
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
            Jangka Waktu
          </Thead>
          <Thead
            rowSpan={2}
            className="text-center py-3 px-4 font-medium  border-r text-gray-700 border-b">
            Jenis Dokumen
          </Thead>
          <Thead
            colSpan={8}
            className="text-center py-3 px-4 font-medium text-gray-700 border-b">
            Dokumen
          </Thead>
          <Thead
            colSpan={2}
            className="text-center py-3 px-4 font-medium text-gray-700 border-l border-b">
            PIC
          </Thead>
        </tr>
        <tr className="bg-zinc-50 text-base">
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            SPPH
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            SPH
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            BAKN
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            KHS
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            Kontrak
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            Permohonan Perpanjangan Waktu
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            Persetujuan Perpanjangan Waktu
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            BAST
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            Proc
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700">
            Legal
          </Thead>
        </tr>
      </thead>
      <tbody>
        {props.data.length > 0 &&
          // sort by number
          props.data.map((item: DataMitraHasProject, index: number) => {
            return (
              <tr key={item?.id} className="text-sm">
                <Tbody className="text-center py-3 px-4">{index + 1}</Tbody>
                <Tbody className="text-center py-3 px-4">
                  <div className="relative flex justify-center gap-2">
                    <Button
                      handlerClick={() =>
                        navigate(`/project/${item?.project?.id}`)
                      }
                      title="Preview Project"
                      type="button"
                      classButton="gap-1"
                      isTransparent="warning">
                      <DocumentIcon className="h-4" /> Preview
                    </Button>
                  </div>
                </Tbody>

                <Tbody className="text-center py-3 px-4">
                  {item?.project?.no_io ?? ''}
                </Tbody>
                <Tbody className="text-left py-3 px-4">
                  {item.project?.inisiasi?.title_project ?? '-'}
                </Tbody>
                <Tbody className="text-left py-3 px-4 uppercase">
                  {item.deskripsi_pekerjaan?.toLowerCase() ?? '-'}
                </Tbody>
                <Tbody className="text-center whitespace-nowrap py-3 px-4 uppercase">
                  {item?.mitra?.nama_vendor?.toLowerCase()}
                </Tbody>
                <Tbody className="text-center py-3 px-4">
                  <TableDataCurrency
                    currency="Rp"
                    value={item?.nilai_realisasi_cogs}
                  />
                </Tbody>
                <Tbody className="text-center py-3 px-4">
                  <TableDataCurrency
                    currency="Rp"
                    value={item?.nilai_pekerjaan}
                  />
                </Tbody>
                <Tbody className="text-center py-3 px-4">
                  <TableDataCurrency
                    currency="Rp"
                    value={
                      item?.nilai_pekerjaan !== null
                        ? parseInt(item?.nilai_realisasi_cogs) -
                          parseInt(item?.nilai_pekerjaan)
                        : 0
                    }
                  />
                </Tbody>
                <Tbody className="text-center py-3 px-4">
                  <TableDataCurrency
                    currency="Rp"
                    value={item?.nilai_down_payment}
                  />
                </Tbody>
                <Tbody className="text-center py-3 px-4">
                  {item?.tata_cara_pembayaran}
                </Tbody>
                <Tbody className="text-center whitespace-nowrap py-3 px-4">
                  {item.start_jangka_waktu_pekerjaan === null
                    ? ''
                    : item?.start_jangka_waktu_pekerjaan +
                      ' s/d ' +
                      item.end_jangka_waktu_pekerjaan}
                </Tbody>
                <Tbody className="text-center uppercase">
                  <span className="bg-orange-100 px-2 py-1 rounded-md text-orange-700 text-sm">
                    {item.jenis_dokumen}
                  </span>
                </Tbody>
                <Tbody className="border-l py-3 px-8 text-center">
                  {item?.spph ? (
                    <LinkDocument url={item?.spph?.file_url} />
                  ) : (
                    '-'
                  )}
                </Tbody>
                <Tbody className="border-l py-3 px-8">
                  {item?.sph ? <LinkDocument url={item?.sph?.file_url} /> : '-'}
                </Tbody>
                <Tbody className="border-l py-3 px-8">
                  {item?.bakn ? (
                    <LinkDocument url={item?.bakn?.file_url} />
                  ) : (
                    '-'
                  )}
                </Tbody>
                <Tbody className="border-l py-3 px-8">
                  {item?.khs ? <LinkDocument url={item?.khs?.file_url} /> : '-'}
                </Tbody>
                <Tbody className="border-l py-3 px-8">
                  {item?.kontrak ? (
                    <LinkDocument url={item?.kontrak?.file_url} />
                  ) : (
                    '-'
                  )}
                </Tbody>
                <Tbody className="border-l text-center py-3 px-8">
                  {item?.permohonan ? (
                    <LinkDocument url={item?.permohonan?.file_url} />
                  ) : (
                    '-'
                  )}
                </Tbody>
                <Tbody className="border-l py-3 px-8">
                  {item?.persetujuan ? (
                    <LinkDocument url={item?.persetujuan?.file_url} />
                  ) : (
                    '-'
                  )}
                </Tbody>
                <Tbody className="border-l py-3 px-8">
                  {item?.bast ? (
                    <div>
                      {/* BAREKON */}
                      {item?.bast?.file_ba_rekon !== null && (
                        <LinkDocument
                          url={item?.bast?.file_ba_rekon}
                          name="BA REKON"
                        />
                      )}
                      {item?.bast?.file_bapp !== null && (
                        <LinkDocument url={item?.bast?.file_bapp} name="BAPP" />
                      )}
                      {item?.bast?.file_baso !== null && (
                        <LinkDocument url={item?.bast?.file_baso} name="BASO" />
                      )}
                      {item?.bast?.file_baut !== null && (
                        <LinkDocument url={item?.bast?.file_baut} name="BAUT" />
                      )}
                      {item?.bast?.file_do !== null && (
                        <LinkDocument url={item?.bast?.file_do} name="DO" />
                      )}
                    </div>
                  ) : (
                    '-'
                  )}
                </Tbody>

                <Tbody className="border-l text-center whitespace-nowrap">
                  {item?.project?.pic_procurement.name}
                </Tbody>
                <Tbody className="border-l text-center whitespace-nowrap">
                  {item.project?.pic_legal.name}
                </Tbody>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
