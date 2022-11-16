import React from 'react';

import { Loading } from '../';

type ButtonProps = {
  children?: React.ReactNode;
  classButton?: string;
  handlerClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | null;
  isDisabled?: boolean;
  isSubmit?: boolean;
  typeClass?: 'primary' | 'success' | 'danger' | 'warning' | string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export default function Index(props: ButtonProps) {
  return (
    <button
      onClick={props.handlerClick}
      type={props.type ?? 'button'}
      disabled={props.isDisabled ?? false}
      className={[
        'inline-flex items-center justify-center px-4 py-3 text-base font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md focus:outline-none ',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        props.typeClass === 'primary'
          ? 'bg-blue-500 hover:bg-blue-400 focus:shadow-outline-blue active:bg-blue-800 focus:border-blue-300'
          : props.typeClass === 'success'
          ? 'bg-green-500 hover:bg-green-400 focus:shadow-outline-green active:bg-green-800 focus:border-green-300'
          : props.typeClass === 'danger'
          ? 'bg-red-500 hover:bg-red-400 focus:shadow-outline-red active:bg-red-800 focus:border-red-300'
          : props.typeClass === 'warning'
          ? 'bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline-yellow active:bg-yellow-800 focus:border-yellow-300'
          : 'bg-gray-500 hover:bg-gray-400 focus:shadow-outline-gray',
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
