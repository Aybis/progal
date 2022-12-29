import React from 'react';

type TableProps = {
  children: React.ReactNode;
  classRoot?: string;
  classTable?: string;
};

export default function Index(props: TableProps) {
  return (
    <div className={['relative flex flex-col', props.classRoot].join(' ')}>
      <div className="flex-grow overflow-auto rounded-md pb-8 h-fit max-h-[60vh]">
        <table
          className={['relative w-full border pt-2', props.classTable].join(
            ' ',
          )}>
          {props.children}
        </table>
      </div>
    </div>
  );
}
