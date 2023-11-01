import Button from "./Button";
const DescriptionPages = () => {
  return (
    <div className="lg:w-[450px] lg:my-28 mx-2">
      <TitlePages />   
      <HeadingDesc />
      <TextDesc />
      <Button value="Our Services" />
    </div>
  );
};

const TitlePages = () => {
  return (
    <div>
      <h1 className="text-[#1FB6FC] text-[20px] font-semibold my-2">Our Services</h1>
    </div>
  );
};

const HeadingDesc = () => {
  return (
    <div>
      <h1 className="text-[28px] text-[#2E3D63]">We Provide A Lot of Cool Services</h1>
    </div>
  );
};

const TextDesc = () => {
  return (
    <div>
      <p className="text-[#BCBBC8] mt-2 mx-1 mb-2 font-semibold">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
    </div>
  );
};

export default DescriptionPages;
