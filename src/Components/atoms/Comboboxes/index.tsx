import { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';

const people = [
  { id: 1, name: 'Leslie Alexander' },
  // More users...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

type PropsComboBox = {
  setSearch: (data: string) => void | null;
  filterData?: (data: string) => void;
  setDataSelected?: (data: any) => void | null;
  listData: Array<string> | any;
  search?: string;
  placeholder?: string;
  dataSelected?: {} | any | null;
  keyIndex: string;
  label: string;
};

export default function Index(props: PropsComboBox) {
  const filterData: any =
    props.search === ''
      ? props.listData
      : props.listData.filter((item: any) => {
          return item[props.keyIndex]
            .toLowerCase()
            .includes(props?.search?.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={props.dataSelected}
      onChange={props.setDataSelected}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        {props.label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          placeholder="Type to search"
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          onChange={(e) => props.setSearch(e.target.value)}
          displayValue={(item: any) => item?.[props.keyIndex]}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filterData.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filterData.map((item: any) => (
              <Combobox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-blue-600 text-white' : 'text-gray-900',
                  )
                }>
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected && 'font-semibold',
                      )}>
                      {item[props.keyIndex]}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-blue-600',
                        )}>
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
