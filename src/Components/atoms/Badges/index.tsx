import React from 'react';

type BadgesProps = {
  value?: string | number;
  type?: 'success' | 'error' | 'warning' | 'info' | 'default';
  classBadges?: string;
};

export default function Index(props: BadgesProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        props.type === 'success' ? 'bg-green-100 text-green-800' : '',
        props.type === 'error' ? 'bg-red-100 text-red-800' : '',
        props.type === 'warning' ? 'bg-yellow-100 text-yellow-800' : '',
        props.type === 'info' ? 'bg-blue-100 text-blue-800' : '',
        props.type === 'default' ? 'bg-gray-100 text-gray-800' : '',
        props.classBadges,
      ].join(' ')}>
      {props.value}
    </span>
  );
}
