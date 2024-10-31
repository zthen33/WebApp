import { useState } from "react";

import Logo from "./Logo";
import MenuItems from "./MenuItems";
import DarkModeButton from "./DarkModeButton";
import ToggleButton from "./ToggleButton";
import Button from "../Button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className={`bg-white text-slate-700 dark:bg-slate-900
         dark:text-slate-400 sticky top-0 z-50`}
    >
      <div
        className="container mx-auto py-4 flex items-center 
      justify-between max-w-7xl border-b-2 border-slate-200
       p-3"
      >
        {/* Logo */}
        <Logo />

        <div className="flex items-center lg:hidden gap-2">
          <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <ToggleButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        {/* Menu List */}
        <div
          className={`lg:flex items-center justify-between fixed lg:static 
            top-0 left-0 h-full w-64 lg:w-auto
            bg-slate-800 lg:bg-transparent transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
        >
          <MenuItems />
        </div>
        <div className="hidden lg:flex gap-5">
          <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
