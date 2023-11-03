/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuOverlay = ({ menuList }) => {
  return (
    <div className="bg-[#2A3A60] text-white lg:hidden">
      {menuList.map((menu) => (
        <nav key={menu.id}>
          <ul>
            <Link to={menu.page}>
              <li className="mx-3 py-3 text-[16px] cursor-pointer text-center hover:font-semibold">{menu.title}</li>
            </Link>
          </ul>
        </nav>
      ))}
    </div>
  );
};

export default MenuOverlay;
