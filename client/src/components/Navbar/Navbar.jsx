import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { ResourceMenus } from "../../utils/helpers";

const Navbar = () => {
  // bg-[#f6f9fc]
  const [color, setColor] = useState(false);
  const [isResources, setIsResources] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    // #0a2540]/75
    <nav
      className={`${color ? "bg-[#f6f9fc]" : "transparent"} ${
        color && "bg-opacity-88"
      } flex transition-all duration-700 justify-center items-center w-screen h-[68px] sticky top-0 z-50`}
    >
      <div className="flex items-center py-3 px-4 w-[1080px]">
        <Link to="home">
          <div className="p-1 font-xl font-bold">
            in
            <span
              className={`font-bold ${
                color ? "text-emerald-500" : "text-white"
              } transition-all duration-700`}
            >
              GEN
            </span>
          </div>
        </Link>
        <div className="flex items-center justify-between flex-1">
          <div className="flex justify-center items-center list-none  ">
            <ul className=" flex justify-center items-center">
              <li className="px-5 py-2.5 ml-4 hover:text-[#0a2540]/75 cursor-pointer font-bold">
                Contact
              </li>
              <li className="px-5 py-2.5 font-semibold hover:text-[#0a2540]/75 cursor-pointer">
                About us
              </li>
              {/* <li className="px-5 py-2.5 font-bold hover:text-[#0a2540]/75 cursor-pointer">
                Resources
              </li> */}
              <motion.div
                onMouseLeave={() => setIsResources(false)}
                className="px-5 py-2.5 font-bold relative"
              >
                <li
                  onMouseOver={() => setIsResources(true)}
                  className="px-5 py-2.5 font-bold hover:text-[#0a2540]/75 cursor-pointer"
                >
                  Resources
                </li>
                {isResources && (
                  <motion.div className="bg-[#f6f9fc] bg-opacity-90 absolute top-16 right--0.5 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px] ">
                    {ResourceMenus.map((menu) => (
                      <Link
                        to={menu.url}
                        key={menu.id}
                        className="text-primaryText font-normal text-sm hover:text-[#0a2540b5] px-2 py-1 w-full rounded-md"
                      >
                        {menu.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
              <li className="px-5 py-2.5 font-bold hover:text-[#0a2540]/75 cursor-pointer">
                Pricing
              </li>
              <li className="px-5 py-2.5 font-bold hover:text-[#0a2540]/75 cursor-pointer">
                Help
              </li>
            </ul>
          </div>
          <Link to="signup">
            <div className="flex justify-end items-center">
              <Button text="Sign in" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
