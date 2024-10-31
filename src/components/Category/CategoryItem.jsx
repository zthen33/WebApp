import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const CategoryItem = ({ category, variants }) => {
  return (
    <motion.div
      className="relative overflow-hidden w-full md:w-1/2
  lg:w-[240px] gap-2"
  variants={variants}
    >
      <img
        src={category.src}
        alt={category.name}
        className="w-full h-[340px]
      object-cover transition-transform duration-300 hover:scale-105"
      />
      <h1
        className="absolute top-0 left-0 bg-white bg-opacity-75
      text-xl font-bold px-3 py-1 m-2 text-black rounded-full"
      >
        {category.name}
      </h1>
      <GoArrowUpRight
        className="absolute bottom-2 right-2
      bg-white text-slate-800 text-4xl p-2 rounded-full 
      hover:bg-teal-400 transition-all cursor-pointer 
      duration-300"
      />
    </motion.div>
  );
};

export default CategoryItem;
