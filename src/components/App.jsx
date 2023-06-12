import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';

import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { ShopPage } from '../pages/ShopPage/ShopPage';
import { CartPage } from '../pages/CartPage/CartPage';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const ShopPage = lazy(() => import('../pages/ShopPage/ShopPage'));
// const CartPage = lazy(() => import('../pages/CartPage/CartPage'));

// ===================================================
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dishes/:route" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
