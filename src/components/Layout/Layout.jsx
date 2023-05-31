import { Outlet } from 'react-router';
import { Suspense } from 'react';

import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </>
  );
};
