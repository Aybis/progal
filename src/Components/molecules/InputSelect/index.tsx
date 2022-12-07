import React from 'react';
import { Label } from '../../atoms';

type InputSelectProps = {
  label?: string;
  dataOption?: any;
  value?: string;
  name?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  children?: React.ReactNode;
};

export default function Index(props: InputSelectProps) {
  return (
    <div>
      <Label>{props.label}</Label>
      <select
        required={true}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="relative w-full mt-2 border border-gray-200 pl-4 py-3 rounded-md text-sm text-gray-600 leading-relaxed">
        <option disabled value="">
          Select {props.placeholder}
        </option>
        {props.children}
      </select>
    </div>
  );
}
