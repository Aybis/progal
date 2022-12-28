import React from 'react';
import { Table, TableDataCurrency, Tbody, Thead } from '../../atoms';

type Props = {
  data: any;
  nameVendor?: string;
  spk?: any;
};

export default function Index(props: Props) {
  return (
    <Table>
      <thead>
        <tr className="border-b bg-zinc-50">
          <Thead>No</Thead>
          <Thead>Brand</Thead>
          <Thead>Jenis</Thead>
          <Thead>Deskripsi</Thead>
          <Thead>Serial Number</Thead>
          <Thead>Harga Satuan</Thead>
          <Thead>Qty</Thead>
          <Thead>Kategori</Thead>
          <Thead>Distributor</Thead>
          <Thead>Mitra</Thead>
          <Thead>No SPK</Thead>
        </tr>
      </thead>
      <tbody>
        {props?.data?.length === 0 ? (
          <tr>
            <Tbody colSpan={11} className="text-center">
              Tidak ada data
            </Tbody>
          </tr>
        ) : (
          props?.data?.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <Tbody className="px-4 py-2">{index + 1}</Tbody>
                <Tbody className="px-4 py-2">{item?.item?.brand}</Tbody>
                <Tbody className="px-4 py-2">{item?.item?.jenis}</Tbody>
                <Tbody className="px-4 py-2 whitespace-nowrap">
                  {item?.item?.deskripsi}
                </Tbody>
                <Tbody className="px-4 py-2">{item?.item?.serial_number}</Tbody>
                <Tbody className="px-4 py-2">
                  <TableDataCurrency
                    className="w-40"
                    currency="Rp"
                    value={item?.harga}
                  />
                </Tbody>
                <Tbody className="px-4 py-2">{item.qty}</Tbody>
                <Tbody className="px-4 py-2 whitespace-nowrap">
                  {item?.item?.kategori}
                </Tbody>
                <Tbody className="px-4 py-2 text-center">
                  {item?.item?.jenis_distribusi}
                </Tbody>
                <Tbody className="px-4 py-2 text-center">
                  {props?.nameVendor}
                </Tbody>
                <Tbody className="px-4 py-2 text-center">{props.spk}</Tbody>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
}
