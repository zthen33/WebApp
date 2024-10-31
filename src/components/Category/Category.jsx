import { motion } from "framer-motion";
import { carModels } from "../../constants";
import CategoryItem from "./CategoryItem";
import { stagger } from "framer-motion/dom";

const Category = () => {
  const cotianerVariants = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: { 
        staggerChildren:0.3,
       },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1,
        ease: "easeOut",
       },
    },
  };

  return (
    <section
      id="category"
      className="py16 dark:bg-slate-900 dark:text-slate-300"
    >
      <motion.div
        className="container mx-auto max-w-7xl p-4"
        variants={cotianerVariants}
        initial="hidden"
        whileInView="show"
      >
        <h2
          className="text-3xl font-bold mb-7 uppercase 
        border-b-2 inline-block"
        >
          Car Category
        </h2>

        <div className="flex flex-col sm:flex-row sm:flex-wrap">
          {carModels.map((category, index) => (
            <CategoryItem key={index} category={category}
            variants={itemVariants}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Category;
