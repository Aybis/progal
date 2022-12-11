import React from 'react';
import { FormInput } from '../../../Components/molecules';
import { useAppSelector } from '../../../Services/redux/hook';

type Props = {
  data?: any;
};

export default function PreviewForm(props: Props) {
  const { inisiasiSelected } = useAppSelector((state) => state.inisiasi);
  let filterKey: Array<string> = [
    'id',
    'am_id',
    'ubis_id',
    'status_id',
    'customer_id',
    'segment_id',
    'portofolio_id',
    'io_id',
    'customer_inisiasi_id',
    'created_at',
    'updated_at',
    'product_category_id',
    'product_solution_id',
    'deleted_at',
    'bud_id',
    'kbli_id',
    'obl_id',
    'id_lop',
    'end_customer_id',
    'funel_id',
    'is_solution',
    'top_id',
    'durasi_id',
    'io',
    'jasbisis',
  ];
  //   .replace(/_/g, ' ')
  return (
    <div className="relative flex flex-col gap-4">
      {Object.entries(inisiasiSelected)
        .filter((form) => filterKey.includes(form[0]) === false)
        .map((item) => (
          <FormInput
            isDisabled={true}
            isReadOnly={true}
            key={item[0]}
            // classLabel="capitalize"
            labelName={item[0]}
            inputValue={item[1] || '-'}
          />
        ))}
    </div>
  );
}
