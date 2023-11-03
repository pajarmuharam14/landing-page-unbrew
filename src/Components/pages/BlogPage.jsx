import Blog from "../Blog";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";

const BlogPage = () => {
  return (
    <div>
      <Header />
      <Hero content="Our Blog" />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
