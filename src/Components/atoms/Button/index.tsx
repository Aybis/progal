import React from 'react';

import { Loading } from '../';

type ButtonProps = {
  children?: React.ReactNode;
  classButton?: string;
  handlerClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | null;
  isDisabled?: boolean;
  isSubmit?: boolean;
  typeClass?: 'primary' | 'success' | 'danger' | 'warning' | 'close' | string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  title?: string;
};

export default function Index(props: ButtonProps) {
  return (
    <button
      title={props.title}
      onClick={props.handlerClick}
      type={props.type ?? 'button'}
      disabled={props.isDisabled ?? false}
      className={[
        'inline-flex items-center justify-center p-2 text-base font-medium leading-5 ease-in-out border border-transparent rounded-md focus:outline-none transition-all duration-300',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        props.typeClass === 'primary'
          ? 'bg-blue-500 hover:bg-blue-400 focus:shadow-outline-blue active:bg-blue-800 focus:border-blue-300 text-white'
          : props.typeClass === 'success'
          ? 'bg-green-500 hover:bg-green-400 focus:shadow-outline-green active:bg-green-800 focus:border-green-300 text-white'
          : props.typeClass === 'danger'
          ? 'bg-red-500 hover:bg-red-400 focus:shadow-outline-red active:bg-red-800 focus:border-red-300 text-white'
          : props.typeClass === 'warning'
          ? 'bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline-yellow active:bg-yellow-800 focus:border-yellow-300 text-white'
          : props.typeClass === 'close'
          ? 'bg-gray-100 border border-gray-300 text-gray-500 hover:bg-gray-200 focus:shadow-outline-gray active:bg-gray-300 focus:border-gray-300'
          : props.typeClass === 'error'
          ? 'bg-red-500 hover:bg-red-400 focus:shadow-outline-red active:bg-red-800 focus:border-red-300 text-white'
          : props.typeClass === 'others'
          ? 'bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline-red active:bg-indigo-800 focus:border-indigo-300 text-white'
          : 'bg-gray-500 hover:bg-gray-400 focus:shadow-outline-gray text-white',

        props.classButton,
      ].join(' ')}>
      {props.isSubmit ? (
        <Loading height="4" width="4" color={'white'} />
      ) : (
        props.children
      )}
    </button>
  );
}
