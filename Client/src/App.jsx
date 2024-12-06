// import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Pages/home';
import Our_Team from './Pages/our_team';
import FAQS from './Pages/faqs';
import Schedule from './Pages/schedule';
import Sponsors from './Pages/sponsors';

function App() {

  const Layout = () => {
    return (
      <>
        <div style={{ background: "black", color: "white" }}>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/our_team",
          element: <Our_Team/>,
        },
        {
          path: "/faqs",
          element: <FAQS/>,
        },
        {
          path: "/schedule",
          element: <Schedule/>,
        },
        {
          path: "/sponsors",
          element: <Sponsors/>,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
