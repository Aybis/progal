import { ArrowUpIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { FormPreview } from '..';
import { DataJasbis } from '../../../Services/redux/Types/inisiasi';
import { Button } from '../../atoms';

type Props = {
  data?: DataJasbis;
};

export default function Index(props: Props) {
  const [handlerPreview, sethandlerPreview] = useState<boolean>(false);
  let filterKey: Array<string> = [
    'id',
    'dokumen',
    'inisiasi_id',
    'created_at',
    'ipdated_at',
  ];
  let filterCurrency = [
    'indirect_cost',
    'down_payment',
    'harga_penawaran',
    'cogs',
    'ebitda_project',
    'indirect_cost',
    'revenue',
  ];

  return (
    <div className="relative mt-4">
      <div className="relative flex justify-between items-center">
        <h1 className="font-medium text-lg text-gray-700 leading-relaxed">
          Justifikasi Bisnis
        </h1>

        <Button
          handlerClick={() => sethandlerPreview(!handlerPreview)}
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

      <div
        className={[
          'relative bg-white overflow-auto p-4 rounded-lg mt-4 transition-all duration-500 ease-in-out',
          handlerPreview
            ? 'overflow-scroll h-[52vh] max-h-full'
            : 'h-4 overflow-hidden',
        ].join(' ')}>
        <div className="relative flex flex-col gap-4 pt-4">
          {props.data &&
            Object.entries(props.data)
              .filter((form) => filterKey.includes(form[0]) === false)
              .map((item) => {
                return (
                  <FormPreview
                    isDocument={item[0].includes('dokumen')}
                    key={item[0]}
                    label={item[0].replace(/_/g, ' ')}
                    value={
                      item[0].includes('nilai') ||
                      filterCurrency.includes(item[0])
                        ? item[1].toLocaleString('id-ID')
                        : item[0].includes('margin')
                        ? `${item[1]}%`
                        : item[1] || '-'
                    }
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}
