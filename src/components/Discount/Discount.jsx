import { motion } from "framer-motion";
import car from "../../assets/car04.jpg";
import Button from "../Button/Button";

const Discount = () => {
  const cotianerVariants = {
    hidden: { opacity: 0, scale: 1.4 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="discount" className="py-16 overflow-hidden dark:bg-slate-900">
      <motion.div
        style={{ backgroundImage: `url(${car})` }}
        className="h-[500px] bg-cover bg-center"
        variants={cotianerVariants}
        initial="hidden"
        whileInView="show"
      >
        <div
          className="w-full h-full bg-opacity-30 bg-slate-500
        py-8 lg:py-16"
        >
          <div
            className="container mx-auto justify-between
          max-w-7xl flex flex-col md:flex-row items-center h-full
          text-white p-2 gap-10"
          >
            <motion.div
              className="flex flex-col items-center
            md:items-start gap-5"
              variants={itemVariants}
            >
              <h1 className="text-4xl lg:text-6xl font-bold">
                Book car with <br /> a big discount
              </h1>
              <Button>Book Now</Button>
            </motion.div>

            <motion.div
              className="bg-green-600 p-6 rounded-sm"
              variants={itemVariants}
            >
              <h1 className="text-6xl font-bold">30%</h1>
              <h2 className="text-2xl">
                For every new <br /> car
              </h2>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Discount;
