import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/errorPage";
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage';

const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const session = supabase.auth.getSession();

  useEffect(() => {
    if (!session) {
      // Redirect to the login page if there is no active session
      window.location.href = '/login';
    }
  }, [session]);

  return <>{element}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
    ],
    
  },
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
