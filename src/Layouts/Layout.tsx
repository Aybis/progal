import { ArrowDownLeftIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Components/atoms';
import Header from './Header';
import Sidebar from './Sidebar';

type LayoutsProps = {
  children: React.ReactNode;
  textHeading?: string;
  subHeading?: string;
  backNavigation?: false | boolean;
};

export default function Layout(props: LayoutsProps) {
  const navigate = useNavigate();

  const [showButtonUp, setshowButtonUp] = useState<boolean>(false);

  const handlerClickGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setshowButtonUp(true);
    } else {
      setshowButtonUp(false);
    }
  });

  return (
    <div className="relative min-h-screen max-h-full max-w-full">
      <div className="relative max-w-full pl-0 lg:pl-64">
        {/* Sidebar */}
        <Sidebar />

        {/* Section Header */}
        <Header />
        {/* End Section Header */}

        {/* Container Header and Main */}
        <div className="relative w-full">
          {showButtonUp && (
            <div className="fixed bottom-4 right-12 z-40">
              <Button
                typeClass="primary"
                handlerClick={handlerClickGoToTop}
                classButton="rounded-full">
                <ArrowUpIcon className="h-8 p-1" />
              </Button>
            </div>
          )}

          {/* Section Main Content */}
          <main className="relative bg-zinc-100 p-4 min-h-screen max-h-full max-w-full">
            <div className="relative">
              {/* Back Button  */}
              {props.backNavigation && (
                <Button
                  handlerClick={() => navigate(-1)}
                  classButton="flex gap-2 hover:scale-105 mb-4 mt-2 text-base tacking-wide">
                  <ArrowDownLeftIcon className="h-6 transform rotate-45" />
                  Kembali
                </Button>
              )}
              <h1 className="text-3xl font-semibold leading-relaxed text-zinc-900">
                {props.textHeading}
              </h1>
              <p className="text-xl leading-relaxed mt-0.5 font-light text-zinc-900">
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
