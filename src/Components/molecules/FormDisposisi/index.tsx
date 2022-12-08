import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { InputSelect } from '..';
import { DisposisiProjectToPIC } from '../../../Services/redux/Actions/inisiasi';
import { useAppDispatch, useAppSelector } from '../../../Services/redux/hook';
import { Button } from '../../atoms';

type Form = {
  pic_procurement?: string;
  pic_legal?: string;
  no_io?: string | number;
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
    no_io: '',
    inisiasi_id: '',
  });

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    // condition when user dont selected
    if (form.pic_legal === '' || form.pic_procurement === '') {
      Swal.fire(
        'Warning',
        'PIC Procurement dan PIC Legal tidak boleh kosong',
        'warning',
      );
    } else {
      // if user has been selected set id from inisiasiSelected
      form.no_io = inisiasiSelected?.io.internal_order;
      form.inisiasi_id = inisiasiSelected?.id;
    }

    // handler submit disposisi
    const result = await dispatch(DisposisiProjectToPIC(form));
    if (result.status === 200) {
      Swal.fire('Success', result?.data ?? 'Disposisi Berhasil', 'success');
      props.handlerClose?.(false);
    } else {
      Swal.fire('Error', result?.message ?? 'Disposisi Gagal!', 'error');
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="relative flex flex-col gap-4">
      <InputSelect
        label="PIC Procurement :"
        placeholder="PIC"
        name="pic_procurement"
        value={form.pic_procurement}
        onChange={(e) => handlerOnChange(e as any)}>
        {USER?.procurement.map((item: any) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </InputSelect>

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
