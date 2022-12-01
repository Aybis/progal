import React from 'react';

type InputProps = {
  type?: 'text' | 'number' | 'date' | 'password' | string;
  classInput?: string;
  inputName?: string;
  inputValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | null;
  isDisabled?: boolean;
  placeholder?: string;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isError?: boolean;
  message?: string;
};

export default function Index(props: InputProps) {
  return (
    <>
      <input
        type={props.type ?? 'text'}
        className={[
          'w-full px-3 py-2 text-base font-medium text-gray-800 placeholder:text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:shadow-outline',
          props.isError && 'border-red-500',
          props.isDisabled &&
            'bg-gray-200 disabled:cursor-not-allowed disabled:pointer-events-none',
          props.classInput,
        ].join(' ')}
        name={props.inputName}
        value={props.inputValue}
        onChange={props.onChange}
        placeholder={props.placeholder}
        disabled={props.isDisabled ?? false}
        readOnly={props.isReadOnly ?? false}
        required={props.isRequired ?? false}
      />

      {props.isError && (
        <p className="text-red-500 text-xs italic">
          {props.message ?? '  Please fill out this field.'}
        </p>
      )}
    </>
  );
}
