import { motion } from "framer-motion";

const Button = ({ children }) => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap:{
      scale: 0.95,
    }
  }
  return (
    <motion.div
      className="border-2 border-slate-500 px-4 py-1
  rounded-sm cursor-pointer"
  variants={buttonVariants}
  whileTap="tap"
  whileHover="hover"
  transition="all 0.3s ease-in-out"
    >
      {children}
    </motion.div>
  );
};

export default Button;
