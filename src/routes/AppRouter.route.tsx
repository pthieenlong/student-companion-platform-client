import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { LoginLayout } from '../features/auth';
import { Homepage } from '../pages/home';

import { MainLayout } from '../pages/main';
// import User from '../pages/User/User';
import { SchedulePage } from '../pages/schedule';
import { Introduction } from '../pages/introduction';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

function AppRouter() {
  const isLogin = useSelector((state: RootState) => state.login.isLogin)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      // element: isLogin ? <Layout/> : <Navigate to="/introduction" replace/>,
      children: [
        {
          path: '/',
          index: true,
          element: <Homepage/>
        },
        // {
        //   path: '/user/:username',
        //   element: <User/>
        // },
        {
          path: '/schedule',
          element: <SchedulePage/>
        }
      ]
    },
    {
      path: '/introduction',
    element: isLogin ? <Navigate to="/" replace/> : <Introduction/>
    },
    {
      path: '/auth',
      children: [
        {
          path: 'signin',
          element: !isLogin ? <LoginLayout/> : <Navigate to="/" replace/>
        },
        {
          path: 'signup',
          element: <div>Register</div>
        }
      ]
    },
    
    
  ]);
  
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter