import About from "../About";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Hero content="About Us" />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
