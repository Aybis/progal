import React from 'react';
import { Tbody } from '../../atoms';

type Props = {
  children?: React.ReactNode;
  className?: string;
  value?: string;
  colSpan?: number;
  rowSpan?: number;
  isNull?: false | boolean;
  isEmpty?: false | boolean;
  isLoading?: false | boolean;
};

export default function Index(props: Props) {
  return (
    <tr>
      <Tbody
        className={[props.className, 'text-center'].join(' ')}
        colSpan={props.colSpan}>
        {props.children}
        {props.isNull && 'Data tidak ditemukan'}
        {props.isEmpty && 'Tidak ada data'}
        {props.isLoading && 'Loading...'}
      </Tbody>
    </tr>
  );
}
