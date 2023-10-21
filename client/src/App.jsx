import { Navigate, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import SignupForm from "./components/SignupForm/SignupForm";
import DefaultDashboard from "./components/Dashboard/DefaultDashboard";
import Dashboard from "./components/Dashboard/Dashboard";
import { Chart } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "My Dataset",
      data: [100, 200, 300, 400, 500, 600],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [{ ticks: { min: 0 } }],
  },
};


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/home",
          element: <LandingPage />,
        },
        {
          path: "signup",
          element: <SignupForm />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard>
      <div className="chart">
        <Chart type="bar" data={data} options={options} />
      </div>
    </Dashboard>
,
    }
  ]);



  
  return (
    <>
      <div className="w-screen h-screen flex gap-4 flex-col">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
