import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FormInput } from '..';
import progalApi from '../../../Middleware/progal-api';
import { convertToCurrency } from '../../../Services/Utils/currencyHelper';
import { Button, Comboboxes } from '../../atoms';

type Props = {
  dataProject: any;
  handlerClose?: (arg: boolean) => void;
};

export default function Index(props: Props) {
  console.log(props.dataProject);
  const [dataItem, setdataItem] = useState([]);
  const [itemSelected, setitemSelected] = useState<any>();
  const [search, setsearch] = useState<string>('');

  const [form, setform] = useState<any>({
    project_mitra_id: props?.dataProject?.id,
    item_id: '',
    qty: '',
    harga: '',
  });

  const handlerChangeInput = (e: any) => {
    const { name, value } = e.target;
    let pattern = /([0-9])\w+/g;

    setform({
      ...form,
      [name]: pattern.test(value) ? convertToCurrency(value) : value,
    });
  };
  const listDatatem = async () => {
    const res = await progalApi.listItem();
    setdataItem(res.data.data);
    return res;
  };

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.item_id = itemSelected?.id;
    form.harga = form.harga.replace(/[^0-9]/g, '');

    try {
      const res = await progalApi.insertBoQ(form);

      Swal.fire('Success', res.data, 'success');
      props?.handlerClose?.(false);
      return res;
    } catch (error: any) {
      Swal.fire('Error', error.message, 'error');
      return error;
    }
  };

  useEffect(() => {
    (async () => {
      return await listDatatem();
    })();
  }, []);

  return (
    <form onSubmit={handlerSubmit} className="relative flex flex-col gap-4">
      <Comboboxes
        label="Item"
        search={search}
        dataSelected={itemSelected ?? null}
        setDataSelected={setitemSelected}
        keyIndex="jenis"
        setSearch={setsearch}
        listData={dataItem}
      />

      {/* looping form */}
      {Object.keys(form)
        .filter((field) => field !== 'item_id' && field !== 'project_mitra_id')
        .map((item: any) => (
          <FormInput
            key={item}
            labelName={item}
            inputName={item}
            onChange={handlerChangeInput}
            inputValue={form[item] ?? ''}
          />
        ))}

      <Button type="submit" classButton="gap-1 py-2 mt-4" typeClass="primary">
        Submit
      </Button>
    </form>
  );
}
