import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout/Layout';
import AboutClass from './page/AboutClass';
import RestaurantView from './component/RestaurantView';
import Home from './page/Home';


function App() {
  const appRoute = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
        path: '/',
        element: <Home/>
      },
        {
        path: '/about',
        element: <AboutClass name='minhaj'/>
      },
        {
        path: '/restaurant/:resId',
        element: <RestaurantView />
      },
    ],
      errorElement: (
        <h1>Sorry Something Went wrong </h1>
      )
    }
  ])

  return (
    <RouterProvider router={appRoute} />
  );
}





export default App;
