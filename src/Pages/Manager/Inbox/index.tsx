import { DocumentIcon, UserIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Table, Tbody, Thead } from '../../../Components/atoms';
import { FormDisposisi, FormSearch } from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';
import { setInisiasiSelected } from '../../../Services/redux/Actions/inisiasi';
import {
  GetListLegalPic,
  GetListProcurementPic,
} from '../../../Services/redux/Actions/user';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { DataInisiasi } from '../../../Services/redux/Types/inisiasi';

export default function Index() {
  const dispatch = useAppDispatch();
  const INISIASI = useAppSelector((state) => state.inisiasi);
  const [filterData, setfilterData] = useState<DataInisiasi[]>(
    INISIASI.listInisiasi,
  );
  const [showModalDisposisi, setshowModalDisposisi] = useState(false);

  const handlerFilterData = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setfilterData(INISIASI.listInisiasi);
    } else {
      const filter = INISIASI.listInisiasi.filter((item) => {
        return (
          item.io.internal_order
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.desc_project
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.end_customer
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase())
        );
      });

      setfilterData(filter);
    }
  };

  const handlerShowModalDisposisi = (data: any) => {
    dispatch(setInisiasiSelected(data));
    setshowModalDisposisi(true);
  };

  useEffect(() => {
    dispatch(GetListProcurementPic());
    dispatch(GetListLegalPic());
    setfilterData(INISIASI.listInisiasi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [INISIASI.listInisiasi]);

  return (
    <Layout textHeading="Inbox " subHeading="Project with Inisasi WON">
      <div className="relative mt-10 mb-24 bg-white p-4 rounded-lg shadow-lg">
        <div className="relative flex justify-between items-end gap-2 mb-4">
          <div>
            <p className="font-normal text-sm leading-relaxed text-gray-600">
              Result : {filterData.length} project
            </p>
          </div>
          <FormSearch onChange={handlerFilterData} />
        </div>

        {INISIASI.loading ? (
          'Loading...'
        ) : (
          <Table classRoot="mt-8">
            <thead className="bg-blue-100">
              <tr>
                <Thead>No</Thead>
                <Thead>Action</Thead>
                <Thead>No. IO</Thead>
                <Thead>Desc. Project</Thead>
                <Thead>Nilai</Thead>
                <Thead>Customer</Thead>
                <Thead>Tgl. Won</Thead>
              </tr>
            </thead>
            <tbody>
              {filterData.length === 0 ? (
                <tr className="bg-white">
                  <Tbody colSpan={7} className="text-center">
                    <p className="text-sm leading-relaxed text-gray-600">
                      Data tidak ditemukan
                    </p>
                  </Tbody>
                </tr>
              ) : (
                filterData.map((item: DataInisiasi, index: number) => (
                  <tr
                    className={[
                      index % 2 === 0 ? 'bg-white' : 'bg-zinc-50',
                      'hover:bg-blue-50 transition-all duration-300 text-sm leading-relaxed font-medium text-gray-800',
                    ].join(' ')}
                    key={item.id}>
                    <Tbody className="text-center">{index + 1}</Tbody>
                    <Tbody>
                      <div className="relative flex justify-center items-center gap-2 h-full">
                        <Button
                          isTransparent="success"
                          handlerClick={() => handlerShowModalDisposisi(item)}
                          title="Disposisi"
                          classButton="text-xs py-1.5 txt-center">
                          <UserIcon className="h-4" />
                        </Button>
                        <Button
                          title="View Detail Project"
                          isTransparent="warning"
                          classButton="text-xs py-1.5 txt-center">
                          <DocumentIcon className="h-4" />
                        </Button>
                      </div>
                    </Tbody>
                    <Tbody className="text-center">
                      {item?.io?.internal_order}
                    </Tbody>
                    <Tbody className="text-left whitespace-pre-wrap">
                      {item?.desc_project}
                    </Tbody>
                    <Tbody className="text-center whitespace-nowrap">
                      Rp {item?.nilai_cogs?.toLocaleString('id-ID')}
                    </Tbody>
                    <Tbody className="text-center whitespace-nowrap">
                      {item?.end_customer}
                    </Tbody>
                    <Tbody className="text-center whitespace-nowrap">
                      {item?.tgl_target_win}
                    </Tbody>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </div>

      <Modal
        headingModal="Disposisi"
        onClose={(arg) => setshowModalDisposisi(arg)}
        isShow={showModalDisposisi}>
        <FormDisposisi handlerClose={(arg) => setshowModalDisposisi(arg)} />
      </Modal>
    </Layout>
  );
}
