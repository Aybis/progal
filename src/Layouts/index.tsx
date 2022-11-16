import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type LayoutsProps = {
  children: React.ReactNode;
  textHeading?: string;
  subHeading?: string;
};

export default function Index(props: LayoutsProps) {
  return (
    <div className="relative min-h-screen max-h-full max-w-full">
      <div className="relative max-w-full pl-64">
        {/* Sidebar */}
        <Sidebar />

        {/* Section Header */}
        <Header />
        {/* End Section Header */}

        {/* Container Header and Main */}
        <div className="relative w-full">
          {/* Section Main Content */}
          <main className="relative bg-zinc-100 p-4 min-h-screen max-h-full max-w-full">
            <div className="relative">
              <h1 className="text-3xl font-semibold leading-relaxed text-zinc-900">
                {props.textHeading}
              </h1>
              <p className="text-base leading-relaxed mt-1 font-light text-zinc-900 w-1/4">
                {props.subHeading}
              </p>
            </div>
            {props.children}
          </main>
          {/*End Section Main Content */}
        </div>
      </div>
    </div>
  );
}
