import React from 'react';

type TheadProps = {
  children: React.ReactNode;
  className?: string;
  rowSpan?: number;
  colSpan?: number;
  isFreeze?: boolean;
  positionTopHeight?: string;
  isChildThead?: boolean;
};

export default function Index(props: TheadProps) {
  return (
    <th
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
      className={[
        'p-4 text-gray-800 whitespace-nowrap text-center text-sm font-medium uppercase leading-relaxed tracking-wide',
        props.isFreeze ? 'sticky bg-gray-100 z-10' : '',
        props.isChildThead ? 'top-14 border-gray-200' : 'top-0',
        props.className,
      ].join(' ')}>
      {props.children}
    </th>
  );
}
