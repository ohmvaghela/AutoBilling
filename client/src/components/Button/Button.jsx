import { motion } from "framer-motion";
import { useState } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { TiArrowRightThick } from "react-icons/ti";
const Button = ({ text }) => {
  useState;
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => {
        setIsHover(!isHover);
      }}
      onHoverEnd={() => {
        setIsHover(!isHover);
      }}
      whileHover={{ scale: 0.98 }}
      className="bg-emer-green py-3 rounded-3xl w-[110px] h-[35px] flex gap-2 justify-center items-center cursor-pointer hover:bg-[#0a2540] hover:transition-colors hover:transtion-transform "
    >
      <p className="text-md text-white font-bold">Sign in</p>
      {isHover ? (
        <TiArrowRightThick className="text-white" />
      ) : (
        <BiSolidChevronRight className="text-white" />
      )}
    </motion.div>
  );
};

export default Button;
