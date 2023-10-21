import React, { useEffect } from "react";
// import { useNavbar } from "../Navbar/NavbarContext";
import { useNavbar } from "../Navbar/NavbarContext";

const DefaultDashboard = () => {
  const { setShowNavbar } = useNavbar();

  useEffect(() => {
    // Hide Navbar when entering the dashboard
    setShowNavbar(false);
    return () => {
      // Show Navbar when leaving the dashboard
      setShowNavbar(true);
    };
  }, [setShowNavbar]);
  return (
    <>
      <div className="h-full flex w-screen bg-white mx-auto gap-6">
        <div className="w-2/12 h-[600px] rounded-sm bg-orange-300 mt-[40px] ">
          {/* <h1>hi</h1> */}
        </div>
        <div className="w-8/12 h-[600px] rounded-md mt-[40px] bg-purple-500">
          {/* <h1>how are you</h1> */}
        </div>
      </div>
    </>
  );
};

export default DefaultDashboard;
