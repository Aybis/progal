import React from 'react';

type Props = {
  label?: string;
  value?: any;
  name?: string;
  isDocument?: boolean;
  nameFile?: string;
  isDate?: boolean;
  isCurrency?: boolean;
};

export default function Index(props: Props) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-b sm:border-gray-200 sm:pb-5">
      <label
        htmlFor="first-name"
        className="block text-sm font-base text-gray-500 sm:mt-px sm:pt-2 uppercase">
        {props.label}
      </label>
      {props.isDocument ? (
        <div className="mt-1 sm:col-span-2 sm:mt-0 flex relative gap-1 items-center">
          :
          <a
            href={props.value}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 text-sm">
            {props?.nameFile ?? 'View Document'}
          </a>
        </div>
      ) : (
        <div className="mt-1 sm:col-span-2 sm:mt-0 flex relative gap-1 items-center">
          :
          <input
            type="text"
            disabled
            readOnly
            value={
              props.isDate
                ? `${new Date(props.value).getDate()} - ${new Date(
                    props.value,
                  ).getMonth()} - ${new Date(props.value).getFullYear()} `
                : props.isCurrency
                ? `Rp ${props.value}`
                : props.value
            }
            name={props.name}
            autoComplete="given-name"
            className={[
              'block w-full text-gray-800 font-semibold rounded-md border-gray-300 bg-zinc-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
            ].join(' ')}
          />
        </div>
      )}
    </div>
  );
}
