import React, { useEffect, useState } from 'react';
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
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error:supabaseError } = await supabase.auth.refreshSession();
        const { session } = data;
        if (!session) {
          setRedirect(true);
        }
      } catch (error) {
        console.error('Error refreshing session:', error);
      }
    };
    checkSession();
  }, []);
  if (redirect) {
    window.location.href = '/login';
    return null; 
  }

  return <>{element}</>;
};

export default ProtectedRoute;



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
