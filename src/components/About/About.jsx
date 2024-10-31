import { motion } from "framer-motion";
import Button from "../Button/Button";
import aboutImage from "../../assets/about.png";

const About = () => {
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
    <section
      id="about"
      className="py-16 dark:bg-slate-900
     dark:text-slate-300"
    >
      <div
        className="container mx-auto max-w-7xl flex flex-col
      lg:flex-row items-center gap-10 px-4"
      >
        <motion.div
          className="flex flex-col gap-3 w-full lg:w-1/2 items-start"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
        >
          <h1
            className="font-extrabold lg:text-6xl md:text-5xl
          sm:text-4xl text-2xl uppercase"
          >
            Riding with Agile Experience
          </h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            laudantium, excepturi quia, recusandae amet quisquam nesciunt, ullam
            maiores officia autem illum quae dolores ipsum. Rem praesentium aut
            accusamus excepturi saepe?
          </p>
          <Button>Test Drive</Button>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex-col justify-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
        >
          <img
            src={aboutImage}
            alt="turbotrial image"
            className="w-full max-w-lg h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
