import React from 'react';

type Props = {
  data?: [] | any;
};

export default function Index(props: Props) {
  return (
    <div className="mt-4 relative">
      <p className="font-normal text-sm leading-relaxed text-gray-600">
        Result : {props.data.length} project
      </p>
    </div>
  );
}
