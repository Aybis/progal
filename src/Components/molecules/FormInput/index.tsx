import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Input, Label } from '../../atoms';

type FormProps = {
  labelName: string;
  classLabel?: string;
  inputType?: string;
  classInput?: string;
  inputName: string;
  inputValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  formClassRoot?: string;
  isRequired?: boolean;
  isError?: boolean;
  message?: string;
};

export default function Index(props: FormProps) {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div className={['relative', props.formClassRoot].join(' ')}>
      <Label labelName={props.labelName} classLabel={props.classLabel} />
      <div className="relative">
        <Input
          inputName={props.inputName}
          onChange={props.onChange}
          placeholder={props.placeholder}
          classInput={['mt-2', props.classInput].join(' ')}
          inputValue={props.inputValue}
          type={
            props.inputType === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : props.inputType
          }
          isDisabled={props.isDisabled}
          isReadOnly={props.isReadOnly}
          isRequired={props.isRequired}
          isError={props.isError}
          message={props.message}
        />
        {props.inputType === 'password' ? (
          showPassword ? (
            <button
              type="button"
              onClick={() => setshowPassword(false)}
              className="absolute inset-y-0 right-3 top-5 flex items-center text-sm leading-5 w-fit h-fit cursor-pointer">
              <EyeIcon className="h-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setshowPassword(true)}
              className="absolute inset-y-0 right-3 top-5 flex items-center text-sm leading-5 w-fit h-fit cursor-pointer">
              <EyeSlashIcon className="h-5" />
            </button>
          )
        ) : null}
      </div>
    </div>
  );
}
