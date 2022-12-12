import { DocumentIcon } from '@heroicons/react/24/outline';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Button } from '../../atoms';

type Props = {
  data: any;
};

export default function Index(props: Props) {
  const [handlerPreview, sethandlerPreview] = useState<boolean>(false);
  let filterFieldDocument: string[] = ['file_kl', 'file_p6', 'file_p8'];

  return (
    <div className="relative mt-4">
      <div className="relative flex justify-between items-center">
        <h1 className="font-medium text-lg text-gray-700 leading-relaxed">
          Dokumen Pendukung
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
          'relative overflow-auto rounded-lg mt-4 transition-all duration-500 ease-in-out bg-white grid grid-cols-3 place-items-center pt-8',
          handlerPreview ? 'overflow-scroll min-h-fit' : 'h-8 overflow-hidden',
        ].join(' ')}>
        {filterFieldDocument.map((item) => {
          return (
            <div
              key={item}
              className="flex flex-col gap-4 justify-between items-center mb-4">
              <p className="text-gray-700 font-medium text-sm">
                {item.replace(/_/g, ' ').toUpperCase()}
              </p>
              {props.data[item] === null ? (
                '-'
              ) : (
                <a
                  title={`View ${item.replace(/_/g, ' ').toUpperCase()}`}
                  href={props.data[item]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 flex gap-1 text-sm">
                  <DocumentIcon className="h-5" />
                  View
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
