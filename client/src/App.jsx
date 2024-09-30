// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Dashboard from "./components/Dashboard/Dashboard";
import ErrorPage from "./ErrorPage";
import Sign from "./components/Sign/Sign";
import { Profile, Bills, Create } from "./components/Dashboard/OtherFn";
import { useEffect, useState } from "react";
import {
  CountContext,
  UserDataContext,
  UserStatContext,
} from "./Context/Context";

axios.defaults.withCredentials = true;

const browserRoute = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Pricing",
        element: <Pricing />,
      },
      {
        path: "/Sign",
        element: <Sign />,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <Dashboard id={1} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Dashboard/",
        element: <Profile />,
      },
      {
        path: "/Dashboard/Bills",
        element: <Bills />,
      },
      {
        path: "/Dashboard/Create",
        element: <Create />,
      },
    ],
  },
]);

function App() {
  const [stat, setStat] = useState(() => {
    const savedStat = localStorage.getItem("stat");
    return savedStat !== null ? JSON.parse(savedStat) : false;
  });

  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData !== null ? JSON.parse(savedUserData) : [];
  });

  const [count, setCount] = useState(() => {
    const countState = localStorage.getItem("count");
    return countState !== null ? JSON.parse(countState) : 0;
  });

  useEffect(() => {
    localStorage.setItem("stat", JSON.stringify(stat));
  }, [stat]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(()=>{
    localStorage.setItem("count", JSON.stringify(count))
  },[count]);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <UserStatContext.Provider value={{ stat, setStat }}>
          <RouterProvider router={browserRoute}></RouterProvider>
        </UserStatContext.Provider>
      </UserDataContext.Provider>
    </CountContext.Provider>
  );
}

export default App;
