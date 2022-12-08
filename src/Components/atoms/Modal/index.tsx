import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Button } from '../';

type ModalProps = {
  children?: React.ReactNode;
  isShow?: boolean;
  onClose?: (arg: boolean) => void;
  headingModal?: string;
  classHeading?: string;
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
      <div className="relative max-h-full max-w-2xl mx-auto container bg-white shadow-xl rounded-lg">
        <div className="relative flex justify-between items-center mt-2 border-b border-gray-200 p-4">
          <h1
            className={[
              'text-xl xl:text-2xl font-semibold text-gray-800',
              props.classHeading,
            ].join(' ')}>
            {props.headingModal}
          </h1>
          <Button
            classButton="relative bg-white/0 text-gray-500 p-0.5 rounded"
            handlerClick={() => props.onClose?.(!props.isShow)}
            typeClass="close">
            <XMarkIcon className="h-5" />
          </Button>
        </div>
        {props.isShow && (
          <div className="relative mt-4 h-[50vh] p-4 overflow-auto">
            {props?.children}
          </div>
        )}

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
