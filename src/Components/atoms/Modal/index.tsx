import React from 'react';
import { Button } from '../';

type ModalProps = {
  children?: React.ReactNode;
  isShow?: boolean;
  onClose?: (arg: boolean) => void;
  headingModal?: string;
};

export default function Index(props: ModalProps) {
  return (
    <div
      className={[
        'fixed top-0 min-h-screen max-h-full w-full flex left-0 z-40 bg-white/40 backdrop-blur-md justify-center items-center transition-all duration-300',
        props.isShow
          ? ' translate-x-0 translate-y-'
          : '-translate-x-full -translate-y-full',
      ].join(' ')}>
      <div className="relative h-full max-w-4xl mx-auto container bg-white shadow-xl rounded-lg">
        <div className="relative flex items-center mt-2 border-b border-gray-200 p-4">
          <h1 className="text-xl xl:text-2xl font-semibold text-gray-800">
            {props.headingModal}
          </h1>
          <Button
            classButton="absolute top-2 right-4 bg-white/0 text-gray-500 p-1 rounded"
            handlerClick={() => props.onClose?.(!props.isShow)}
            typeClass="close">
            X
          </Button>
        </div>
        <div className="relative mt-4 p-4">{props?.children}</div>

        <div className="relative flex justify-end items-end mt-4 p-4">
          <Button
            handlerClick={() => props.onClose?.(!props.isShow)}
            typeClass="close">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
