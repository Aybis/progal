import React from 'react';

type LabelProps = {
  labelName?: string;
  classLabel?: string;
  children?: React.ReactNode;
};

const Index = (props: LabelProps) => {
  return (
    <label
      className={[
        'block text-sm font-medium text-gray-700 leading-relaxed',
        props.classLabel,
      ].join(' ')}>
      {props.labelName}
      {props.children ?? null}
    </label>
  );
};

export default Index;
