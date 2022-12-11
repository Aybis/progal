import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../Components/atoms';
import { FormDisposisi, FormSearch } from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';
import { setInisiasiSelected } from '../../../Services/redux/Actions/inisiasi';
import {
  GetListLegalPic,
  GetListProcurementPic,
} from '../../../Services/redux/Actions/user';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { DataInisiasi } from '../../../Services/redux/Types/inisiasi';
import TableInboxManager from './TableInboxManager';

export default function Index() {
  const dispatch = useAppDispatch();
  const INISIASI = useAppSelector((state) => state.inisiasi);
  const [filterData, setfilterData] = useState<DataInisiasi[]>(
    INISIASI.listInisiasi,
  );
  const [showModalDisposisi, setshowModalDisposisi] = useState(false);
  const navigate = useNavigate();

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

  const handlerShowModalDisposisi = (type: string, data: any) => {
    dispatch(setInisiasiSelected(data));
    if (type === 'disposisi') {
      setshowModalDisposisi(true);
    }
    if (type === 'preview') {
      navigate(`/inbox/${data.id}`);
    }
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

        <TableInboxManager
          handlerMapping={handlerShowModalDisposisi}
          data={filterData}
        />
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
