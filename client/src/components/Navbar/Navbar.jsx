import Button from "../Button/Button";

const Navbar = () => {
  // bg-[#f6f9fc]

  return (
    <nav className="flex justify-center items-center w-screen h-[68px] sticky top-0 z-50 ">
      <div className="flex items-center py-3 px-4 w-[1080px]">
        <div className="p-1 font-xl">logo</div>
        <div className="flex items-center justify-between flex-1">
          <div className="flex justify-center items-center list-none  ">
            <ul className=" flex justify-center items-center">
              <li className="px-5 py-2.5 ml-4 hover:text-[#0a2540]/75 cursor-pointer font-bold">
                Contact
              </li>
              <li className="px-5 py-2.5 font-bold hover:text-[#0a2540]/75 cursor-pointer">
                About Us
              </li>
              <li className="px-5 py-2.5 font-bold hover:text-[#0a2540]/75 cursor-pointer">
                Resources
              </li>
              <li className="px-5 py-2.5 font-bold hover:text-[#0a2540]/75 cursor-pointer">
                Pricing
              </li>
              <li className="px-5 py-2.5 font-bold hover:text-[#0a2540]/75 cursor-pointer">
                Help
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center">
            <Button text="Sign in" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
