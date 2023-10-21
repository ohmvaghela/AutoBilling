import { Navigate, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import SignupForm from "./components/SignupForm/SignupForm";
// import DefaultDashboard from "./components/Dashboard/DefaultDashboard";
import AdminLayout from "./components/Dashboard/layouts/Admin.js";
// import { useNavbar } from "./components/Navbar/NavbarContext";

const App = () => {
  // const { showNavbar } = useNavbar();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "signup",
          element: <SignupForm />,
        },
      ],
    },
  ]);

  return (
    // <div className="w-screen h-screen flex gap-4 flex-col">
    //   {showNavbar && <Navbar />}
    //   <Routes>
    //     <Route path="/home" element={<LandingPage />} />
    //     <Route path="/signup" element={<SignupForm />} />
    //     <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
    //     <Redirect from="/" to="/admin/dashboard" />
    //     {/* <Route path="/dashboard" element={<DefaultDashboard />} /> */}
    //     <Route path="*" element={<Navigate to="/home" />} />
    //   </Routes>
    // </div>
    <>
      {/* <ReactDOM.createRoot(document.getElementById("root")).render( */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
