import { DocumentIcon, PencilIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Table,
  TableDataCurrency,
  Tbody,
  Thead,
} from '../../../Components/atoms';
import { ButtonDocument, TableData } from '../../../Components/molecules';
import { useAppSelector } from '../../../Services/redux/hook';
import { DataMitraHasProject } from '../../../Services/redux/Types/hasmitra';

type Props = {
  handlerModalForm: (
    type: string,
    data: any,
    document?: any,
    typeForm?: any,
  ) => void;
  data: DataMitraHasProject[];
};

export default function TableMitra(props: Props) {
  const navigate = useNavigate();
  const { listMitraFilter, loading } = useAppSelector(
    (state) => state.hasMitra,
  );

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
            <p>(COGS - Pekerjaan)</p>
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
            colSpan={15}
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
            PR SAP
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            PO SAP
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            DO
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            BAPP
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            BA Progress
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            BAUT
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            BAST
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            Permohonan Perpanjangan Waktu
          </Thead>
          <Thead className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
            Persetujuan Perpanjangan Waktu
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
        {loading && listMitraFilter.length === 0 ? (
          <TableData colSpan={30} isLoading={loading} />
        ) : listMitraFilter.length === 0 ? (
          <TableData colSpan={30} isEmpty />
        ) : (
          listMitraFilter.map((item: DataMitraHasProject, index: number) => (
            <tr key={item?.id} className="text-sm">
              <Tbody className="text-center py-3 px-4">{index + 1}</Tbody>
              <Tbody className="text-center py-3 px-4">
                <div className="relative flex justify-center gap-2">
                  <Button
                    handlerClick={() => props.handlerModalForm('update', item)}
                    title="Update Mitra"
                    type="button"
                    classButton="gap-1"
                    isTransparent="update">
                    <PencilIcon className="h-3" /> Mitra
                  </Button>
                  <Button
                    handlerClick={() => props.handlerModalForm('boq', item)}
                    title="Tambah BoQ"
                    type="button"
                    classButton="gap-1"
                    isTransparent="primary">
                    <PlusIcon className="h-4" /> BoQ
                  </Button>
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
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.spph}
                  documentName="SPPH"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.sph}
                  documentName="SPH"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.bakn}
                  documentName="BAKN"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.khs}
                  documentName="KHS"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.kontrak}
                  documentName="KONTRAK"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.pr_sap}
                  documentName="PR SAP"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.po_sap}
                  documentName="PO SAP"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.do}
                  documentName="DO"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.bapp}
                  documentName="BAPP"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.bap}
                  documentName="BAP"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.baut}
                  documentName="BAUT"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.bast}
                  documentName="BAST"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.permohonan}
                  documentName="Permohonan"
                  item={item}
                />
              </Tbody>
              <Tbody className="border-l py-3 px-8">
                <ButtonDocument
                  handlerClick={props.handlerModalForm}
                  isUpload={item?.persetujuan}
                  documentName="Persetujuan"
                  item={item}
                />
              </Tbody>

              <Tbody className="border-l text-center whitespace-nowrap">
                {item?.project?.pic_procurement.name}
              </Tbody>
              <Tbody className="border-l text-center whitespace-nowrap">
                {item.project?.pic_legal.name}
              </Tbody>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}
