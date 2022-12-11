import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { FormInput, PreviewDocumentMitra } from '..';
import { Button, Divider } from '../../atoms';

type Props = {
  data?: any;
};

export default function Index(props: Props) {
  const [handlerPreview, sethandlerPreview] = useState<boolean>(false);
  let filterField: string[] = [
    'project_id',
    'id',
    'amandemen',
    'bakn',
    'bast',
    'boq_item',
    'created_at',
    'updated_at',
    'khs',
    'spph',
    'sph',
    'kontrak',
    'permohonan',
    'persetujuan',
    'is_down_payment',
    'mitra_id',
    'position',
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
          Mitra{' '}
          {props.data !== undefined ? props.data?.mitra?.nama_vendor : null}
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
            'relative overflow-auto rounded-lg mt-4 transition-all duration-500 ease-in-out',
            handlerPreview
              ? 'overflow-scroll min-h-fit'
              : 'h-8 overflow-hidden',
          ].join(' ')}>
          <div className="bg-white relative p-4 h-full flex flex-col gap-4 transition-all duration-300">
            <Divider nameDivide="Detail Mitra" colorBg="bg-white" />

            {Object.entries(props.data)
              .filter((form) => filterField.includes(form[0]) === false)
              .map((item: any) => (
                <FormInput
                  key={item[0]}
                  isReadOnly={true}
                  classLabel="capitalize"
                  labelName={item[0].replace(/_/g, ' ')}
                  inputValue={
                    item[0].includes('nilai')
                      ? item[1] !== null
                        ? item[1].toLocaleString('id-ID')
                        : '-'
                      : item[1] || '-'
                  }
                  isDisabled={true}
                />
              ))}

            {/* end detail Mitra */}

            <Divider nameDivide="Dokumen Pendukung" colorBg="bg-white" />
            <PreviewDocumentMitra data={props.data} />

            <Divider nameDivide="BoQ Item" colorBg="bg-white" />
          </div>
        </div>
      ) : (
        'Tidak ada mitra'
      )}
    </div>
  );
}
