import React from 'react';

type TbodyProps = {
  children: React.ReactNode;
  className?: string;
  rowSpan?: number;
  colSpan?: number;
};

export default function Index(props: TbodyProps) {
  return (
    <td
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
      className={[
        'p-4 relative text-sm font-medium text-gray-800',
        props.className,
      ].join(' ')}>
      {props.children}
    </td>
  );
}
