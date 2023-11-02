import DescriptionPages from "./DescriptionPages";
import images1 from "../assets/images-1.jpg";
import images2 from "../assets/images-2.jpg";
import images3 from "../assets/images-3.jpg";
import images4 from "../assets/images-4.jpg";
import images5 from "../assets/images-5.jpg";
import images6 from "../assets/images-6.jpg";
import images7 from "../assets/images-7.jpg";
import images8 from "../assets/images-8.jpg";
import images9 from "../assets/images-9.jpg";
import images10 from "../assets/images-10.jpg";
import images11 from "../assets/images-11.jpg";
import images12 from "../assets/images-12.jpg";
const Work = () => {
  const listPortfolio = [
    {
      id: 1,
      image: images1,
      category: "BRANDING",
      title: "High Quality Design Concept",
    },
    {
      id: 2,
      image: images2,
      category: "GRAPHIC DESIGN",
      title: "High Quality Design Concept",
    },
    {
      id: 3,
      image: images3,
      category: "WEB DEVELOPMENT",
      title: "High Quality Design Concept",
    },
    {
      id: 4,
      image: images4,
      category: "WEB DEVELOPMENT",
      title: "High Quality Design Concept",
    },
    {
      id: 5,
      image: images5,
      category: "BRANDING",
      title: "High Quality Design Concept",
    },
    {
      id: 6,
      image: images6,
      category: "GRAPHIC DESIGN",
      title: "High Quality Design Concept",
    },
    {
      id: 7,
      image: images7,
      category: "WEB DEVELOPMENT",
      title: "High Quality Design Concept",
    },
    {
      id: 8,
      image: images8,
      category: "WEB DEVELOPMENT",
      title: "High Quality Design Concept",
    },
    {
      id: 9,
      image: images9,
      category: "BRANDING",
      title: "High Quality Design Concept",
    },
    {
      id: 10,
      image: images10,
      category: "GRAPHIC DESIGN",
      title: "High Quality Design Concept",
    },
    {
      id: 11,
      image: images11,
      category: "WEB DEVELOPMENT",
      title: "High Quality Design Concept",
    },
    {
      id: 12,
      image: images12,
      category: "WEB DEVELOPMENT",
      title: "High Quality Design Concept",
    },
  ];
  return (
    <div className=" mx-auto my-10">
      <DescriptionPages
        styleContainer="text-center"
        title="OUR PORTFOLIO"
        heading="Our Awesome Work"
        textDescription="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
      />
      <div className="md:flex md:flex-wrap w-full mt-5">
        { listPortfolio.map( ( portfolio ) => (
          <div key={ portfolio.id } className="my-7 w-[370px] mx-auto lg:w-[310px] md:w-[350px] hover:bg-blue-100 pb-1">
            <img src={ portfolio.image } />
            <h1 className="my-3 mx-2 text-white bg-blue-400 w-[150px] p-1 text-[14px] font-bold border border-blue-400">{portfolio.category}</h1>
            <h1 className="my-3 mx-2 text-[#757F98] font-semibold text-[20px]">{portfolio.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
