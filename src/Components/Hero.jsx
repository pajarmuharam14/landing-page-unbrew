/* eslint-disable react/prop-types */
import heroIllustration from "../assets/illustration-1.svg";
import Button from "./Button";

const Hero = ({ content }) => {
  return (
    <div className="bg-[#795DDB] h-[550px] flex flex-col-reverse justify-center items-center md:flex md:flex-row md:justify-evenly">
      {content ? (
        <div>
          <h1 className="text-white">{content}</h1>.
        </div>
      ) : (
        <>
          <div className="text-section md:mt-[-60px] lg:mt-[-50px]">
            <h1 className="text-white capitalize text-2xl md:text-5xl py-10 font-bold mx-2 text-center md:text-left md:ml-7 lg:w-[400px]">boost personal productivity</h1>
            <p className="text-white mt-[-30px] ml-4 md:text-[18px] md:w-[400px] md:mt-[-25px]">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <div className="flex mx-4 my-3">
              <Button value="start a project" />
              <Button value="call us for any inquiry" />
            </div>
          </div>
          <div className="illustration-section">
            <img src={heroIllustration} className="w-[400px]" />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
