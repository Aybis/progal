import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { FormInput } from '..';
import { Button } from '../../atoms';

type Props = {
  data?: any;
};

export default function Index(props: Props) {
  const [handlerPreview, sethandlerPreview] = useState<boolean>(false);

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

  const handlerClick = () => {
    sethandlerPreview(!handlerPreview);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative mt-4">
      <div className="relative flex justify-between items-center">
        <h1 className="font-medium text-lg text-gray-700 leading-relaxed">
          Inisiasi
        </h1>

        <Button
          handlerClick={() => handlerClick()}
          typeClass="others"
          classButton="transition-all duration-500">
          <ArrowUpIcon
            className={[
              'h-5 transform transition-all duration-300',
              handlerPreview ? 'rotate-0' : 'rotate-180',
            ].join(' ')}
          />
        </Button>
      </div>

      {props.data !== undefined ? (
        <div
          className={[
            'relative bg-white overflow-auto p-4 rounded-lg mt-4 transition-all duration-500 ease-in-out',
            handlerPreview ? 'overflow-scroll h-[80vh]' : 'h-4 overflow-hidden',
          ].join(' ')}>
          <div className="relative flex flex-col gap-4 bg-white p-4">
            {Object.entries(props.data)
              .filter((form) => filterKey.includes(form[0]) === false)
              .map((item: any) => (
                <FormInput
                  isDisabled={true}
                  isReadOnly={true}
                  key={item[0]}
                  classLabel="capitalize"
                  labelName={item[0].replace(/_/g, ' ')}
                  inputValue={
                    item[0].includes('nilai')
                      ? item[1].toLocaleString('id-ID')
                      : item[1] || '-'
                  }
                />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}