import React from 'react';

type DropdownProps = {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  name?: string;
  id?: string;
  value?: string;
  dataValue?: any;
};

export default function Index(props: DropdownProps) {
  return (
    <select className="relative px-4 py-2 text-base" placeholder="Dropdown">
      {props?.dataValue?.length > 0 &&
        props?.dataValue?.map((item: any, index: number) => {
          return (
            <option
              key={index}
              value={item.value}
              className="relative px-4 py-2 text-base">
              {item.label}
            </option>
          );
        })}
    </select>
  );
}
