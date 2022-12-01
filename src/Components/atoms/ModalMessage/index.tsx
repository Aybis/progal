import React from 'react';
import { Button } from '../';
import { getImageFromAssets } from '../../../Services/Utils/assetHelper';

type ModalMessageProps = {
  children?: React.ReactNode;
  isShow?: boolean;
  onClose?: (arg: boolean) => void;
  heading?: string;
  description?: string;
  typeModal?: 'success' | 'error' | 'warning' | 'info' | string;
};

export default function Index(props: ModalMessageProps) {
  return (
    <div
      className={[
        'fixed top-0 min-h-screen max-h-full w-full flex left-0 z-40   justify-center items-center transition-all duration-300 overflow-hidden',
        props.isShow
          ? ' backdrop-blur-sm bg-white/0 translate-y-0'
          : 'bg-transparent translate-y-full',
      ].join(' ')}>
      <div className="relative h-full max-w-lg mx-auto container bg-white shadow-xl rounded-xl p-8">
        <img
          src={
            props.typeModal === 'success'
              ? getImageFromAssets('svg/done.svg')
              : props.typeModal === 'error'
              ? getImageFromAssets('svg/error.svg')
              : props.typeModal === 'warning'
              ? getImageFromAssets('svg/warning.svg')
              : props.typeModal === 'info'
              ? getImageFromAssets('svg/info.svg')
              : props.typeModal === 'assign'
              ? getImageFromAssets('svg/sent.svg')
              : props.typeModal === 'auth'
              ? getImageFromAssets('svg/auth.svg')
              : getImageFromAssets('svg/info.svg')
          }
          alt=""
          className="h-36 mx-auto"
        />

        <div className="relative my-5 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold text-center leading-relaxed">
            {props.heading}
          </h1>
          <p className="text-lg font-normal leading-relaxed mt-2 text-center">
            {props.description}
          </p>
        </div>

        <Button
          classButton="w-full pt-4 pb-4 text-lg mt-8"
          handlerClick={() => props.onClose?.(!props.isShow)}
          typeClass={props.typeModal}>
          Close
        </Button>
      </div>
    </div>
  );
}
