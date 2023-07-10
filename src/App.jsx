import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
//PAGES
import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetail from './pages/ProductDetail';
import Notfound from './pages/404';
//UTILITY
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  //REACT QUERY CLIENT
  const queryClient = new QueryClient();

  //NAVIGASI KE HALAMAN HALAMAN

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate replace to={'/home'} />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'menu',
          element: <Menu />,
        },
        {
          path: 'product-detail/:productId',
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: '*',
      element: <Notfound />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
