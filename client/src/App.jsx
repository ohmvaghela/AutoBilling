import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import SignupForm from "./components/SignupForm/SignupForm";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex gap-4 flex-col">
        <Navbar />
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
