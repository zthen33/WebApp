import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import car01 from "../assets/car01.jpg";
import car02 from "../assets/car02.jpg";
import car03 from "../assets/car03.jpg";
import car04 from "../assets/car04.jpg";
import car05 from "../assets/car05.jpg";

// menu links
export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Category", href: "#category" },
  { name: "Discount", href: "#discount" },
  { name: "About", href: "#about" },
  { name: "Subscribe", href: "#subscribe" },
];

// Array with image and car names
export const carModels = [
  { src: car01, name: "Sedan" },
  { src: car02, name: "SUV" },
  { src: car03, name: "Coupe" },
  { src: car04, name: "Hatchback" },
  { src: car05, name: "Convertible" },
];

// socail icons link
export const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
];

// /* Custom Scrollbar Styles */
// ::-webkit-scrollbar {
//   width: 12px;
// }

// ::-webkit-scrollbar-track {
//   background: #f1f1f1;
// }

// ::-webkit-scrollbar-thumb {
//   background-color: #94a3b8;
//   border-radius: 6px;
//   border: 3px solid transparent;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background-color: #334155;
// }
