import React from 'react';

type TableProps = {
  children: React.ReactNode;
  classRoot?: string;
  classTable?: string;
};

export default function Index(props: TableProps) {
  return (
    <div
      className={['relative w-full overflow-auto', props.classRoot].join(' ')}>
      <table className={['w-full', props.classTable].join(' ')}>
        {props.children}
      </table>
    </div>
  );
}
