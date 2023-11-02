/* eslint-disable no-undef */

import Button from "./Button";
import DescriptionPages from "./DescriptionPages";
import { AiOutlineCheck } from "react-icons/ai";
const Pricing = () => {
  return (
    <div>
      <DescriptionPages
        styleContainer="text-center"
        title="PRICING"
        heading="Choose Your Pricing Plan"
        textDescription="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
      />
      <div className="flex flex-wrap justify-center w-full my-5">
        <CardPrice />
      </div>
    </div>
  );
};

const CardPrice = () => {
  const priceList = [
    {
      id: 1,
      price: "$49",
      category: "PERSONAL",
      benefit: [
        {
          id: 1,
          check: <AiOutlineCheck />,
          text: "Strategic Alliance",
        },
        {
          id: 2,
          check: <AiOutlineCheck />,
          text: "Growth Expansion",
        },
        {
          id: 3,
          check: <AiOutlineCheck />,
          text: "Business Planning",
        },
        {
          id: 4,
          check: <AiOutlineCheck />,
          text: "Contact Negotiation",
        },
        {
          id: 5,
          check: <AiOutlineCheck />,
          text: "Market Positioning",
        },
      ],
      button: <Button value="GET STARTED" />,
    },
    {
      id: 2,
      price: "$79",
      category: "PROFESSIONAL",
      benefit: [
        {
          id: 1,
          check: <AiOutlineCheck />,
          text: "Strategic Alliance",
        },
        {
          id: 2,
          check: <AiOutlineCheck />,
          text: "Growth Expansion",
        },
        {
          id: 3,
          check: <AiOutlineCheck />,
          text: "Business Planning",
        },
        {
          id: 4,
          check: <AiOutlineCheck />,
          text: "Contact Negotiation",
        },
        {
          id: 5,
          check: <AiOutlineCheck />,
          text: "Market Positioning",
        },
      ],
      button: <Button value="GET STARTED" />,
    },
    {
      id: 3,
      price: "$109",
      category: "MEDIUM BUSINESS",
      benefit: [
        {
          id: 1,
          check: <AiOutlineCheck />,
          text: "Strategic Alliance",
        },
        {
          id: 2,
          check: <AiOutlineCheck />,
          text: "Growth Expansion",
        },
        {
          id: 3,
          check: <AiOutlineCheck />,
          text: "Business Planning",
        },
        {
          id: 4,
          check: <AiOutlineCheck />,
          text: "Contact Negotiation",
        },
        {
          id: 5,
          check: <AiOutlineCheck />,
          text: "Market Positioning",
        },
      ],
      button: <Button value="GET STARTED" />,
    },
    {
      id: 4,
      price: "$149",
      category: "GIGANTIC BUSINESS",
      benefit: [
        {
          id: 1,
          check: <AiOutlineCheck />,
          text: "Strategic Alliance",
        },
        {
          id: 2,
          check: <AiOutlineCheck />,
          text: "Growth Expansion",
        },
        {
          id: 3,
          check: <AiOutlineCheck />,
          text: "Business Planning",
        },
        {
          id: 4,
          check: <AiOutlineCheck />,
          text: "Contact Negotiation",
        },
        {
          id: 5,
          check: <AiOutlineCheck />,
          text: "Market Positioning",
        },
      ],
      button: <Button value="GET STARTED" />,
    },
  ];

  return (
    <>
      {priceList.map((prices) => (
        <div key={prices.id} className="w-[250px] h-[500px] border flex flex-col justify-center items-center mx-4 my-4">
          <span className="text-4xl my-3 text-[#1FB6FC]">{prices.price}</span>
          <span className="text-[#54617F] font-semibold my-2 text-[14px]">{prices.category}</span>
          {prices.benefit.map((item) => (
            <div key={item.id} className="flex justify-center items-center my-3">
              <span className="text-[#1FB6FC]">{item.check}</span>
              <p className="ml-2">{item.text}</p>
            </div>
          ))}
          <div className="mt-6">{prices.button}</div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
