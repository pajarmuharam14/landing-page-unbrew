/* eslint-disable react/prop-types */
import images13 from "../assets/images-13.jpg";
import images14 from "../assets/images-14.jpg";
import images15 from "../assets/images-15.jpg";
import images16 from "../assets/images-16.jpg";
import images17 from "../assets/images-17.jpg";
import images18 from "../assets/images-18.jpg";
import images19 from "../assets/images-19.jpg";
import images20 from "../assets/images-20.jpg";
import DescriptionPages from "./DescriptionPages";

const Blog = () => {
  return (
    <div className="my-20">
      <DescriptionPages
        styleContainer="text-center"
        title="OUR BLOG"
        heading="Recent Blog"
        textDescription="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
      />
      <div className="my-10 md:flex md:flex-wrap w-full ">
        <CardBlog image={images13} />
        <CardBlog image={images14} />
        <CardBlog image={images15} />
        <CardBlog image={images16} />
        <CardBlog image={images17} />
        <CardBlog image={images18} />
        <CardBlog image={images19} />
        <CardBlog image={images20} />
      </div>
    </div>
  );
};

const CardBlog = ({image}) => {
  return (
    <div className="w-[370px] my-9 mx-auto border md:w-[350px] lg:w-[310px]">
      <img src={image} className="cursor-pointer" />
      <h1 className="font-bold text-[18px] md:text-[20px] hover:text-[#1FB6FC] mt-1 cursor-pointer">Explore The Best Restaurant in New York</h1>
      <div className="mt-3 flex">
        <span className="mx-1 text-[#9291A6] font-semibold">DEC. 05, 2020</span>
        <h3 className="mx-2 mb-3 text-[#1FB6FC] font-semibold">BY JOHAN STEVENSON</h3>
      </div>
    </div>
  );
};

export default Blog;
