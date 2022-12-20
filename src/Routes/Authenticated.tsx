import Cookies from 'js-cookie';
import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Layout from '../Layouts/Layout';

type Props = {
  path?: string;
  heading?: string;
  subheading?: string;
};

export default function Authenticated(props: Props) {
  const location = useLocation();
  const isAuth = Cookies.get('session');

  Cookies.set('redirect', location.pathname);

  return isAuth ? (
    <Layout>
      <Suspense fallback={<WrapperLoading />}>
        <Outlet />
      </Suspense>
    </Layout>
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
}

const WrapperLoading = () => {
  return (
    <div className="h-screen relative flex justify-center items-center">
      <p className="text-lg font-light text-blue-400">Loading</p>
      <div className="flex justify-center">
        <div className="dot animate-loader bg-blue-600"></div>
        <div className="dot animate-loader animation-delay-200 bg-blue-600"></div>
        <div className="dot animate-loader animation-delay-400 bg-blue-600"></div>
      </div>
    </div>
  );
};
