import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Amandemen,
  CheckProject,
  DetailProject,
  Homepage,
  Login,
  ManagerInbox,
  Mitra,
  NotFound,
  PICInbox,
  Project,
} from './Pages';
import Authenticated from './Routes/Authenticated';
import Gate from './Routes/Gate';
import { GetProfileUser } from './Services/redux/Actions/user';
import { useAppDispatch } from './Services/redux/hook';

function App() {
  const dispatch = useAppDispatch();
  const token = Cookies.get('session');
  // useeffect async
  useEffect(() => {
    const getProfile = async () => {
      const res: any = await dispatch(GetProfileUser());
      return res;
    };

    if (token) {
      getProfile();
    }
  }, []);

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
          <Route path="/project-done" element={<Project />} />
          <Route path="/amandemen" element={<Amandemen />} />
          <Route path="/project-detail" element={<CheckProject />} />
          <Route path="/detail/:id" element={<DetailProject />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
