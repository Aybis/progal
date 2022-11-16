import Cookies from 'js-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function Gate() {
  const location = useLocation();
  const isAuth = Cookies.get('session');
  const redirect = Cookies.set('redirect', location.pathname);

  if (!isAuth && redirect) {
    localStorage.setItem('redirect', redirect);
  }

  return isAuth ? (
    <Navigate to={'/'} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
