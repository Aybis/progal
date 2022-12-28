import Cookies from 'js-cookie';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Amandemen,
  DetailAmandemen,
  DetailBoQ,
  DetailInisiasi,
  DetailMitra,
  Done,
  Login,
  NotFound,
  Project,
} from './Pages';
import Authenticated from './Routes/Authenticated';
import Gate from './Routes/Gate';
import { GetListMenu, GetProfileUser } from './Services/redux/Actions/user';
import { useAppDispatch, useAppSelector } from './Services/redux/hook';

// With Lazy
const Homepage = lazy(() => import('./Pages/Dashboard'));
const PICInbox = lazy(() => import('./Pages/PIC/Inbox'));
const ManagerInbox = lazy(() => import('./Pages/Manager/Inbox'));
const DetailProject = lazy(() => import('./Pages/Detail'));
const Mitra = lazy(() => import('./Pages/PIC/Mitra'));
const Monitoring = lazy(() => import('./Pages/Monitoring'));

function App() {
  const dispatch = useAppDispatch();
  const token = Cookies.get('session');
  const user = useAppSelector((state) => state.user);

  // get profile user
  const getProfile = async () => {
    const res: any = await dispatch(GetProfileUser());
    return res;
  };

  // get list menu user
  const getListMenu = async () => {
    const res: any = await dispatch(GetListMenu());
    return res;
  };

  // useeffect async
  useEffect(() => {
    if (token) {
      user?.profile && getProfile();
      user?.menu?.length === 0 && getListMenu();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.profile?.id]);

  return (
    <div className="relative">
      <Routes>
        <Route path="/login" element={<Gate />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<Authenticated />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/inbox" element={<ManagerInbox />} />
          <Route path="/allocate" element={<PICInbox />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-mitra" element={<Mitra />} />
          <Route path="/project-done" element={<Done />} />
          <Route path="/amandemen" element={<Amandemen />} />
          <Route path="/project/:id" element={<DetailProject />} />
          <Route path="/project/mitra/:id" element={<DetailMitra />} />
          <Route
            path="project/mitra/amandemen/:id"
            element={<DetailAmandemen />}
          />
          <Route path="/project/mitra/boq/:id" element={<DetailBoQ />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/inbox/:id" element={<DetailInisiasi />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
