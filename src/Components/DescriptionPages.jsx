/* eslint-disable react/prop-types */
const DescriptionPages = ({styleContainer, title, heading, textDescription }) => {
  return (
    <div className={styleContainer}>
      <h1 className="text-[#1FB6FC] text-[20px] font-semibold my-2">{title}</h1>
      <h1 className="text-[28px] text-[#2E3D63]">{heading}</h1>
      <p className="text-[#BCBBC8] mt-2 mx-1 mb-2 font-semibold">{textDescription}</p>
      {/* <Button value="Our Services" /> */}
    </div>
  );
};

export default DescriptionPages;
