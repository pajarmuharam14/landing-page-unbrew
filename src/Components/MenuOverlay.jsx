/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const MenuOverlay = ({ menuList }) => {
  return (
    <div className="bg-[#2A3A60] text-white lg:hidden">
      {menuList.map((menu) => (
        <nav key={menu.id}>
          <ul>
            <li className="mx-3 py-3 text-[16px] cursor-pointer text-center hover:font-semibold">{menu.title}</li>
          </ul>
        </nav>
      ))}
    </div>
  );
};

export default MenuOverlay;
