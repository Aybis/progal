import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badges } from '../Components/atoms';
import { getListInisiasiWon } from '../Services/redux/Actions/inisiasi';
import { getListProject } from '../Services/redux/Actions/project';
import { useAppDispatch, useAppSelector } from '../Services/redux/hook';
import { DataProject } from '../Services/redux/Types/project';

export default function Sidebar() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const INISIASI = useAppSelector((state) => state.inisiasi);
  const { listProject } = useAppSelector((state) => state.project);

  const checkIsManager = async () => {
    let data: string[] = [];
    user?.menu?.forEach((element: any) => {
      element.child.forEach((child: any) => {
        data.push(child.link);
      });
    });

    data.includes('/inbox') && getInisiasiWonForManager();

    data.includes('/allocate') &&
      location.pathname === '/allocate' &&
      getDisposisiForPIC();
  };

  const getInisiasiWonForManager = async () => {
    const res: any = await dispatch(getListInisiasiWon());
    return res;
  };

  const getDisposisiForPIC = async () => {
    const res: DataProject[] = await dispatch(getListProject());
    return res;
  };

  useEffect(() => {
    // when manager load inbox manager
    checkIsManager();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.menu]);

  return (
    <aside className="flex w-0 lg:w-64 transition-all duration-500 inset-y-0 left-0 fixed z-0 lg:z-20">
      <div className="flex min-h-0 flex-1 flex-col shadow-lg shadow-gray-200/50 bg-white transition-all duration-500">
        <div className="flex flex-1 flex-col overflow-y-auto pt-6 pb-4 transition-all duration-500">
          {/* Logo */}
          <div className="relative flex flex-col gap-1 flex-shrink-0 items-start -mt-2 pl-5">
            <p className="font-semibold text-lg text-left">
              Procurement <span className="font-light text-xs">&</span>{' '}
            </p>
            <p className="-mt-1.5 font-semibold text-lg">Contract Management</p>
          </div>
          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 mt-5 space-y-4">
            {user?.menu?.length > 0
              ? user?.menu?.map((item: any, index: number) => (
                  <div className="relative mt-2" key={index}>
                    <p className="text-[12px] font-extralight text-gray-500">
                      {item?.name}
                    </p>
                    <ul className="space-y-2 mt-2">
                      {item?.child?.map((sub: any, index: number) => (
                        <li key={index}>
                          <Link
                            to={sub?.link}
                            className={`flex gap-2 items-center p-2 text-sm leading-relaxed rounded hover:bg-blue-50 hover:text-blue-600 hover:font-semibold transition-all duration-300 ${
                              location.pathname === sub?.link
                                ? 'bg-gradient-to-r from-blue-50 to-white text-blue-600 font-semibold'
                                : 'border-transparent text-gray-400 font-normal'
                            }`}>
                            - {sub?.name}
                            {sub.link === '/inbox' && (
                              <Badges
                                classBadges="absolute right-2"
                                value={INISIASI.listInisiasi.length}
                                type="error"
                              />
                            )}
                            {sub.link === '/allocate' && (
                              <Badges
                                classBadges="absolute right-2"
                                value={listProject.length}
                                type="error"
                              />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : null}
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
