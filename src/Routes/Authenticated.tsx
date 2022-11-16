import Cookies from 'js-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function Authenticated() {
  const location = useLocation();
  const isAuth = Cookies.get('session');

  Cookies.set('redirect', location.pathname);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
}
