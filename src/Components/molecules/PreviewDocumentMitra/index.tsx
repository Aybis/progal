import React from 'react';

type Props = {
  data: any;
};

export default function Index(props: Props) {
  let fielDocument: string[] = [
    'spph',
    'sph',
    'bakn',
    'khs',
    'kontrak',
    'permohonan',
    'persetujuan',
    'bast',
    'baut',
    'bapp',
    'ba_progress',
    'do_file',
    'prsap',
    'posap',
  ];
  let fieldDocumentFilter: string[] = [
    'no',
    'tanggal',
    'file_name',
    'file_bast',
  ];

  return (
    <div className="bg-white p-4 rounded-lg relative grid grid-flow-row-dense md:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
      {Object.entries(props.data)
        .filter((form) => fielDocument.includes(form[0]) === true)
        ?.map((item: any) => (
          <div
            key={item[0]}
            className="relative flex flex-col gap-2 flex-shrink-0 w-full border rounded-md p-4">
            <div className="relative flex items-center gap-2">
              <div className="relative w-2 h-2 rounded-full bg-indigo-500"></div>
              <p className="font-medium text-base uppercase text-gray-700">
                {item[0].replace(/_/g, ' ')}
              </p>
            </div>
            <div className="relative flex flex-col gap-4 w-full">
              {item[1] !== null ? (
                <div className="relative flex flex-col gap-1 mt-2 pt-2 border-t">
                  {Object.entries(item[1])
                    .filter(
                      (document) =>
                        fieldDocumentFilter.includes(document[0]) === true,
                    )
                    .map((doc: any) => {
                      return (
                        <div
                          key={doc[0]}
                          className="relative flex justify-between w-full">
                          <p className="capitalize font-medium text-sm text-gray-500 w-24 flex justify-between">
                            <span className="w-20">
                              {doc[0].replace(/_/g, ' ')}
                            </span>
                            <span>:</span>
                          </p>

                          {/* FIle bast bundling */}
                          {doc[0].includes('file') ? (
                            item[1][doc[0]] !== null ? (
                              <a
                                href={
                                  item[0].toLowerCase() === 'bast'
                                    ? item[1][doc[0]]
                                    : item[1].file_url
                                }
                                target="_blank"
                                className="text-sm font-medium text-blue-500 leading-relaxed cursor-pointer text-right  text-ellipsis"
                                rel="noreferrer">
                                {doc[1].split('_').slice(1).join('_')}
                              </a>
                            ) : (
                              '-'
                            )
                          ) : (
                            <p className="text-sm font-semibold text-gray-800 text-right">
                              {doc[1]}
                            </p>
                          )}
                        </div>
                      );
                    })}
                </div>
              ) : null}
            </div>
          </div>
        ))}
    </div>
  );
}
