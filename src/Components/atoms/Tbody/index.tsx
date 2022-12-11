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
        'p-4 relative text-sm leading-relaxed font-medium text-gray-800 border-l',
        props.className,
      ].join(' ')}>
      {props.children}
    </td>
  );
}
