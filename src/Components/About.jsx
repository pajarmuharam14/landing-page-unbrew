import DescriptionPages from "./DescriptionPages";
import aboutIllustration from "../assets/illustration-2.svg";
import Button from "./Button";

const About = () => {
  return (
    <div className="md:flex md:justify-center md:items-center ml-2">
      <img src={aboutIllustration} className="w-[450px] mt-12 mb-5 lg:mx-10" />
      <div>
        <DescriptionPages styleContainer="lg:w-[300px] lg:mt-16 mx-2"
          title="ABOUT US"
          heading="Unbrew A Digital Agency Company"
          textDescription="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        />
        <Button value="More About us" />
      </div>
    </div>
  );
};

export default About;
