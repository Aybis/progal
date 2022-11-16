import React from 'react';

type LabelProps = {
  labelName: string;
  classLabel?: string;
  children?: React.ReactNode;
};

const Index = (props: LabelProps) => {
  return (
    <label
      className={[
        'text-base font-medium text-gray-800 leading-relaxed',
        props.classLabel,
      ].join(' ')}>
      {props.labelName}
      {props.children ?? null}
    </label>
  );
};

export default Index;
