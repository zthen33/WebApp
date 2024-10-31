import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from './components/Category/Category';
import Discount from './components/Discount/Discount';
import About from './components/About/About';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={`font-Fredoka dark:bg-slate-700`}>
      <Navbar />

      <Hero />
      <Category />
      <Discount />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
