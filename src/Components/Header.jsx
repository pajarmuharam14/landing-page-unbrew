/* eslint-disable react/jsx-key */
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import MenuOverlay from "./MenuOverlay";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const menuList = [
    {
      id: 1,
      title: "Home",
      page: "/",
    },
    {
      id: 2,
      title: "About",
      page: "/about",
    },
    {
      id: 3,
      title: "Services",
      page: "/services",
    },
    {
      id: 4,
      title: "Pricing",
      page: "/price",
    },
    {
      id: 5,
      title: "Work",
      page: "/portfolio",
    },
    {
      id: 6,
      title: "Blog",
      page: "/blog",
    },
  ];
  return (
    <>
      <div className="flex justify-between lg:justify-around bg-[#2A3A60] w-full h-[80px] lg:bg-[#795DDB] ">
        <div className="logo">
          <h1 className="text-white text-2xl md:text-4xl font-bold mx-4 my-5 md:my-[18px] ">Unbrew.</h1>
        </div>
        <div className="nav text-white cursor-pointer lg:flex">
          {!toggle ? <BiMenu className="text-4xl mr-2 my-6  lg:hidden" onClick={handleClick} /> : <FaXmark className="text-4xl mr-2 my-6  lg:hidden" onClick={handleClick} />}
          {menuList.map((menu) => (
            <nav key={menu.id} className="hidden lg:block">
              <ul>
                <Link to={menu.page}>
                  <li className="mx-5 my-8 font-semibold hover:font-normal">{menu.title}</li>
                </Link>
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
