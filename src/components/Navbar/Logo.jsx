import { motion } from "framer-motion";

const Logo = () => {
  const logoVariants = {
    hidden:{opacity:0, scale:0.7},
    show:{
      opacity:1,
      scale:1,
      transition: { duration: 2},
    },
  };

  return (
    <motion.div className="text-2xl font-bold dark:text-slate-300"
    variants={logoVariants}
    initial="hidden"
    animate="show">
      <a href="#">TurboTrail</a>
    </motion.div>
  );
};

export default Logo;
