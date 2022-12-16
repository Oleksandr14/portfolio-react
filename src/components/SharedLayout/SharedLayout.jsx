import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
