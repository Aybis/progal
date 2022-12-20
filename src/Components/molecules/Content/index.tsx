import { ArrowDownLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atoms';

type LayoutsProps = {
  children: React.ReactNode;
  textHeading?: string;
  subHeading?: string;
  backNavigation?: false | boolean;
};

export default function Index(props: LayoutsProps) {
  const navigate = useNavigate();

  return (
    <main className="relative bg-zinc-50 p-4 min-h-screen max-h-full max-w-full">
      {/* Heading and Back Button */}
      <div className="relative">
        {/* Back Button  */}
        {props.backNavigation && (
          <Button
            handlerClick={() => navigate(-1)}
            classButton="flex gap-2 hover:scale-105 mb-4 mt-2 text-base tacking-wide">
            <ArrowDownLeftIcon className="h-4 transform rotate-45" />
            Kembali
          </Button>
        )}
        {/* End Back Button  */}

        {/* Heading and SubHeading */}
        <h1 className="text-3xl font-semibold leading-relaxed text-zinc-900">
          {props.textHeading}
        </h1>
        <p className="text-xl leading-relaxed mt-0.5 font-light text-zinc-900">
          {props.subHeading}
        </p>
        {/* End Heading and SubHeading */}
      </div>

      {/* End Heading and Back Button */}

      {/* Main Content */}
      {props.children}
      {/* End Main Content */}
    </main>
  );
}
