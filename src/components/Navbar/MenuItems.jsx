import { motion } from "framer-motion";
import { menuItems } from "../../constants";

const MenuItems = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 2 },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
  
  return (
    <ul
      className="flex flex-col lg:flex-row lg:space-x-6
    px-4 pt-20 lg:pt-0 justify-center flex-grow uppercase test-sm"
    >
      {menuItems.map((item, index) => (
        <motion.li
          className="py-2 lg:py-0"
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="show"
          whileHover="hover"
        >
          <a href={item.href} className=" hover:text-gray-300">
            {item.name}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default MenuItems;
