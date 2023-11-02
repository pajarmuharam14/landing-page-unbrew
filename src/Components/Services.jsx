import DescriptionPages from "./DescriptionPages";
import { TbSeo, TbBulb, TbUsersGroup } from "react-icons/tb";
import { PiPenNibStraightDuotone } from "react-icons/pi";
import { AiOutlineLaptop } from "react-icons/ai";
import { SiGoogleoptimize } from "react-icons/si";
import Button from "./Button";

const Services = () => {
  return (
    <div className=" ml-8 my-16 lg:flex">
      <div>
        <DescriptionPages styleContainer="lg:w-[300px] lg:mt-16 mx-2"
          title="OUR SERVICES"
          heading="We Provide A Lot of Cool Services"
          textDescription="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        />
        <Button value="our services" />
      </div>
      <ItemServices />
    </div>
  );
};

const ItemServices = () => {
  const itemList = [
    {
      id: 1,
      icon: <TbUsersGroup />,
      titleItem: "Marketing",
      textItem: "Even the all-powerful pointing has no control about the blind texts",
    },
    {
      id: 2,
      icon: <TbSeo />,
      titleItem: "SEO",
      textItem: "Even the all-powerful pointing has no control about the blind texts",
    },
    {
      id: 3,
      icon: <PiPenNibStraightDuotone />,
      titleItem: "UI/UX Design",
      textItem: "Even the all-powerful pointing has no control about the blind texts",
    },
    {
      id: 4,
      icon: <TbBulb />,
      titleItem: "Creative",
      textItem: "Even the all-powerful pointing has no control about the blind texts",
    },
    {
      id: 5,
      icon: <SiGoogleoptimize />,
      titleItem: "Optimization",
      textItem: "Even the all-powerful pointing has no control about the blind texts",
    },
    {
      id: 6,
      icon: <AiOutlineLaptop />,
      titleItem: "Business Strategy",
      textItem: "Even the all-powerful pointing has no control about the blind texts",
    },
  ];
  return (
    <div className="flex flex-wrap w-full justify-center lg:ml-20">
      {itemList.map((item) => (
        <div key={item.id} className="flex flex-col justify-center items-center w-[400px] md:w-[250px] mx-4 my-4 py-3 px-2 h-auto hover:bg-[#1FB6FC] hover:text-white">
          <div className="text-[28px] border  bg-gray-100 rounded-full p-3 text-[#1FB6FC]">{item.icon}</div>
          <h1 className="my-2 font-semibold text-[18px]">{item.titleItem}</h1>
          <p className=" font-semibold text-center mb-1">{item.textItem}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
