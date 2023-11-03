import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Services from "./Services";
import Work from "./Work";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Work />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
