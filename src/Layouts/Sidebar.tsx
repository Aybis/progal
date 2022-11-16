import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import {
  ChatBubbleLeftEllipsisIcon,
  EnvelopeIcon as EnvelopeIconActive,
  EnvelopeOpenIcon as EnvelopeOpenIconActive,
  Squares2X2Icon as Squares2X2IconActive,
  WrenchScrewdriverIcon as WrenchScrewdriverIconActive,
} from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const menu = [
    {
      sub: 'Homepage',
      data: [
        {
          name: 'Dashboard',
          icon: Squares2X2Icon,
          iconActive: Squares2X2IconActive,
          url: '/',
        },
      ],
    },
    {
      sub: 'Assign',
      data: [
        {
          name: 'Inbox',
          icon: EnvelopeIcon,
          iconActive: EnvelopeIconActive,
          url: '/inbox',
        },
      ],
    },
    {
      sub: 'Allocate',
      data: [
        {
          name: 'Inbox',
          icon: EnvelopeIcon,
          iconActive: EnvelopeIconActive,

          url: '/allocate',
        },
      ],
    },
    {
      sub: 'Main',
      data: [
        {
          name: 'Project',
          icon: EnvelopeOpenIcon,
          iconActive: EnvelopeOpenIconActive,
          url: '/project',
        },
        {
          name: 'Amandemen',
          icon: WrenchScrewdriverIcon,
          iconActive: WrenchScrewdriverIconActive,
          url: '/amandemen',
        },
        {
          name: 'Monitoring',
          icon: EnvelopeOpenIcon,
          iconActive: EnvelopeOpenIconActive,
          url: '/monitoring',
        },
      ],
    },
  ];

  const location = useLocation();

  return (
    <aside className="w-64 inset-y-0 flex left-0 fixed z-20">
      <div className="flex min-h-0 flex-1 flex-col shadow-lg shadow-gray-200/50 bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-6 pb-4">
          {/* Logo */}
          <div className="flex gap-2.5 flex-shring-0 items-center px-4">
            <div className="relative text-center h-14 w-14 p-3 flex justify-center items-center bg-blue-500 border border-gray-100 rounded-lg font-bold text-4xl text-white shadow-inner">
              <h1 className="-mt-1">e-</h1>
            </div>
            <div className="relative text-sm uppercase text-zinc-800 leading-relaxed tracking-wide">
              <p className="font-semibold">Procurement</p>
              <p className="-mt-1 font-light">&</p>
              <p className="-mt-1.5 font-semibold">Legal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 mt-20 space-y-6">
            {menu.map((item, index) => (
              <div key={index} className="relative">
                <h4 className="text-zinc-500 font-medium tracking-wide leading-relaxed text-sm">
                  {item.sub}
                </h4>
                <ul className="relative mt-2 space-y-2">
                  {item.data.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.url}
                        className={[
                          'group flex items-center px-2 py-2 text-base leading-relaxed hover:font-semibold rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-300',
                          location.pathname === subItem.url
                            ? 'text-blue-500 font-bold'
                            : 'text-gray-400 font-normal',
                        ].join(' ')}>
                        {location.pathname === subItem.url ? (
                          <subItem.iconActive
                            className="flex-shrink-0 h-7 text-blue-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <subItem.icon
                            className="flex-shrink-0 h-7 text-gray-400/80 group-hover:text-blue-500 transition-all duration-300"
                            aria-hidden="true"
                          />
                        )}

                        <span className="ml-3">{subItem.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Logout */}
          <div className="flex flex-shrink-0 rounded-xl p-4 flex-col justify-center items-center bg-zinc-50 mx-4">
            <div className="relative">
              <ChatBubbleLeftEllipsisIcon className="h-24 text-blue-500" />
            </div>

            <div className="relative text-center w-full">
              <p className="text-sm text-zinc-600 tracking-wide leading-relaxed">
                Have a problem?
              </p>
              <button
                onClick={() =>
                  alert(
                    'Bebas sih, mau lewat apps atau email semuanya juga yang handle Bang Hanif 🤣🤣🤣, jadi langsung japri beliau saja ya 🙏🙏🙏',
                  )
                }
                className="text-white font-semibold px-4 py-2 rounded-lg bg-blue-500 w-full mt-4 hover:bg-blue-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
