import React from 'react';

type FormProps = {
  id?: string;
  classForm?: string;
  children?: React.ReactNode;
  handlerSubmit?: (event: React.FormEvent<HTMLFormElement>) => void | null;
};

export default function Index(props: FormProps) {
  return (
    <form
      onSubmit={props.handlerSubmit}
      id={props.id}
      className={['relative', props.classForm].join(' ')}>
      {props.children}
    </form>
  );
}
