import React from 'react';

type TheadProps = {
  children: React.ReactNode;
  className?: string;
  rowSpan?: number;
  colSpan?: number;
};

export default function Index(props: TheadProps) {
  return (
    <th
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
      className={[
        'py-3 px-4 text-gray-800 whitespace-nowrap text-center text-base font-medium leading-relaxed tracking-wide',
        props.className,
      ].join(' ')}>
      {props.children}
    </th>
  );
}
