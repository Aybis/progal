import React from 'react';

type TableProps = {
  children: React.ReactNode;
  classRoot?: string;
  classTable?: string;
};

export default function Index(props: TableProps) {
  return (
    <div
      className={['relative flex flex-col max-h-full', props.classRoot].join(
        ' ',
      )}>
      <div className="flex-grow overflow-auto rounded-md pb-4">
        <table
          className={['relative w-full border', props.classTable].join(' ')}>
          {props.children}
        </table>
      </div>
    </div>
  );
}
