import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  Outlet,
} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/errorPage';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage';
import { supabase } from './utils/supabase'; // Import your Supabase client

const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const session = supabase.auth.getSession();

  useEffect(() => {
    if (!session) {
      window.location.href = '/login';
    }
  }, [session]);

  return <>{element}</>;
};

const routes = [
  {
    path: '/',
    element: <ProtectedRoute element={<Root />} />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
];

const router = createBrowserRouter(
  routes
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
