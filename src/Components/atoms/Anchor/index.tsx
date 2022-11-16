import React from 'react';

type AnchorProps = {
  href?: string;
  classAnchor?: string;
  children?: React.ReactNode;
  target?: string;
  title?: string;
};
export default function Index(props: AnchorProps) {
  return (
    <a
      target={props.target ?? ''}
      rel={'noreferrer'}
      href={props.href ?? ''}
      title={props.title ?? ''}
      className={[
        'text-gray-600 text-sm cursor-pointer hover:text-blue-600 transition-all duration-300 w-fit',
        props.classAnchor,
      ].join(' ')}>
      {props.children}
    </a>
  );
}
