import {
  BellIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  UserIcon,
} from '@heroicons/react/24/outline';
import {
  ArrowLeftOnRectangleIcon,
  Square3Stack3DIcon,
  UserIcon as UserIconActive,
} from '@heroicons/react/24/solid';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useAppSelector } from '../Services/redux/hook';

export default function Header() {
  const userState = useAppSelector((state) => state.user);
  const [showDropdown, setshowDropdown] = useState<boolean>(false);

  const handlerLogout = async () => {
    localStorage.removeItem('token');
    Cookies.remove('session');
    Swal.fire('Success', 'Logout Success', 'success');
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };

  return (
    <header className="relative bg-white shadow-lg shadow-gray-200/50 border-l border-zinc-50 z-10 max-h-full box-border">
      <section className="relative gap-8 flex justify-between py-4 pr-8 pl-4 items-center ">
        {/* User */}
        <div className="relative w-fit text-zinc-800 leading-relaxed tracking-wide">
          <p className="tex-sm font-light">Welcome back, </p>
          <h1 className="text-base font-bold mt-2">
            {userState?.profile?.name}
          </h1>
        </div>
        {/* Search Bar */}
        <div className="relative w-1/2">
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search IO"
              className="pl-12 px-4 py-2 text-base w-full font-medium bg-white border-2 border-gray-200 rounded-md placeholder:text-gray-500"
            />
            <div className="absolute top-2.5 left-3">
              <MagnifyingGlassIcon className="h-6 text-gray-500" />
            </div>
          </div>
        </div>
        {/* Icon */}
        <div>
          <div className="relative flex gap-4">
            <div className="group hidden relative p-2 rounded-lg bg-transparent hover:bg-zinc-100 transition-all duration-300 text-zinc-500 hover:text-blue-500 cursor-pointer">
              <Squares2X2Icon className="h-6 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group hidden relative p-2 rounded-lg bg-transparent hover:bg-zinc-100 transition-all duration-300 text-zinc-500 hover:text-blue-500 cursor-pointer">
              <BellIcon className="h-6 group-hover:scale-105 transition-all duration-300" />
            </div>
            <button
              onClick={() => setshowDropdown(!showDropdown)}
              className={[
                'group relative p-2 rounded-lg bg-transparent hover:bg-zinc-100 transition-all duration-150 text-zinc-500 hover:text-blue-500 cursor-pointer',
                showDropdown ? 'bg-zinc-100 text-blue-500' : '',
              ].join(' ')}>
              {showDropdown ? (
                <UserIconActive className="h-6 group-hover:scale-105 transition-all duration-300" />
              ) : (
                <UserIcon className="h-6 group-hover:scale-105 transition-all duration-300" />
              )}
            </button>

            {showDropdown ? (
              <ul className="absolute grid divide-y divide-gray-200 border right-0 top-12 bg-white rounded-md p-2 w-44">
                <li className="py-1.5 px-4 flex gap-3 items-center text-sm font-medium text-gray-700 leading-relaxed hover:bg-zinc-100 transition-all duration-300">
                  <Square3Stack3DIcon className="h-4" />
                  Back to Apps
                </li>
                <li
                  onClick={() => handlerLogout()}
                  className="py-1.5 px-4 flex gap-3 cursor-pointer items-center text-sm font-medium text-gray-700 leading-relaxed hover:bg-zinc-100 transition-all duration-300">
                  <ArrowLeftOnRectangleIcon className="h-4" />
                  Logout
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </section>
    </header>
  );
}
