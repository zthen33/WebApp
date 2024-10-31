import { motion } from "framer-motion";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0.6, y: 20, scale: 1.05 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1 },
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
    <section id="home" className="dark:bg-slate-900 overflow-hidden py-6">
      <motion.div
        style={{ backgroundImage: `url(${hero})` }}
        className="container mx-auto justify-between 
      max-w-7xl flex flex-col h-[600px] bg-cover bg-center 
      rounded-lg"
      variants={heroVariants}
      initial="hidden"
      animate="show"
      whileHover="hover"
      transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
      >
        <div className="w-full h-full bg-opacity-50 bg-slate-500">
          <h1
            className="font-bold text-white rotate-12 mt-10
          md:mt-0 text-5xl lg:text-8xl lp:p-10 p-7 text-right"
          >
            Make Your Driving <br /> More Exciting
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
