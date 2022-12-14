import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { InputSelect } from '..';
import { DisposisiProjectToPIC } from '../../../Services/redux/Actions/inisiasi';
import {
  GetListLegalPic,
  GetListProcurementPic,
} from '../../../Services/redux/Actions/user';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { Button } from '../../atoms';

type Form = {
  pic_procurement?: string;
  pic_legal?: string;
  no_io?: string;
  inisiasi_id?: string | number;
};

type FormProps = {
  handlerClose?: (arg: boolean) => void;
};

export default function Index(props: FormProps) {
  const USER = useAppSelector((state) => state.user);
  const { inisiasiSelected, loadingDisposisi } = useAppSelector(
    (state) => state.inisiasi,
  );
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<Form>({
    pic_procurement: '',
    pic_legal: '',
    no_io: parseInt(inisiasiSelected?.io?.internal_order).toString(),
    inisiasi_id: inisiasiSelected?.id,
  });

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    // handler submit disposisi
    const result = await dispatch(DisposisiProjectToPIC(form));
    if (result.status === 200) {
      Swal.fire('Success', result?.data ?? 'Disposisi Berhasil', 'success');
      props.handlerClose?.(false);
    }
  };

  let filterPicProcurement = [
    'SEIRAWAN EKA SAKTI',
    'BIMA RISWANTA TARIGAN',
    'DWI ANDIKA PUTRA',
    'ADE HERMAN NASUTION',
    'RIO ADITYA',
    'DIAN ABDURRAHMAN',
    'PUTRA WIDJAYA',
  ];

  useEffect(() => {
    if (USER?.procurement.length === 0 && USER?.legal.length === 0) {
      dispatch(GetListProcurementPic());
      dispatch(GetListLegalPic());
    }
  }, [USER?.procurement, USER?.legal, dispatch]);

  // console.log(inisiasiSelected?.jasbisis?.[0].cogs! > 100000000);

  return (
    <form onSubmit={handlerSubmit} className="relative flex flex-col gap-4">
      <InputSelect
        label="PIC Procurement :"
        placeholder="PIC"
        name="pic_procurement"
        value={form.pic_procurement}
        onChange={(e) => handlerOnChange(e as any)}>
        {USER?.procurement
          .filter(
            (user: any) => filterPicProcurement.includes(user?.name) === true,
          )
          .map((item: any) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
      </InputSelect>

      {inisiasiSelected?.jasbisis?.[0]?.cogs! > 100000000 && (
        <InputSelect
          label="PIC Legal :"
          placeholder="PIC"
          name="pic_legal"
          value={form.pic_legal}
          onChange={(e) => handlerOnChange(e as any)}>
          {USER?.legal.map((item: any) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </InputSelect>
      )}

      <Button
        isSubmit={loadingDisposisi}
        isDisabled={loadingDisposisi}
        type="submit"
        typeClass="primary"
        title="Submit Disposisi"
        classButton="mt-4 w-fit px-6">
        Assign
      </Button>
    </form>
  );
}
