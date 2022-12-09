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
        'p-4 text-gray-600 whitespace-nowrap text-center text-sm font-medium uppercase leading-relaxed tracking-wide',
        props.className,
      ].join(' ')}>
      {props.children}
    </th>
  );
}
