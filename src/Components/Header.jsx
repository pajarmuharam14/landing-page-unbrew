/* eslint-disable react/jsx-key */
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const menuList = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Services",
    },
    {
      id: 4,
      title: "Pricing",
    },
    {
      id: 5,
      title: "Work",
    },
    {
      id: 6,
      title: "Blog",
    },
    {
      id: 7,
      title: "Contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between md:justify-around bg-[#2A3A60] w-full h-[80px] md:bg-[#795DDB] ">
        <div className="logo">
          <h1 className="text-white text-2xl md:text-4xl font-bold mx-4 my-5 md:my-[18px] ">Unbrew.</h1>
        </div>
        <div className="nav text-white cursor-pointer md:flex">
          {!toggle ? <BiMenu className="text-4xl mr-2 my-6  md:hidden" onClick={handleClick} /> : <FaXmark className="text-4xl mr-2 my-6  md:hidden" onClick={handleClick} />}
          {menuList.map((menu) => (
            <nav key={menu.id} className="hidden md:block">
              <ul>
                <li className="mx-5 my-8 font-semibold hover:font-normal">{menu.title}</li>
              </ul>
            </nav>
          ))}
        </div>
      </div>
      {toggle ? <MenuOverlay menuList={menuList} /> : null}
    </>
  );
};

export default Header;
