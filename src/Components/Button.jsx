/* eslint-disable react/prop-types */
const Button = ({ value }) => {
  return (
    <div className="flex flex-row">
      <button className=" border border-transparent rounded-full rounded-bl-lg hover:rounded-full hover:rounded-tl-lg bg-[#1FB6FC] mx-2 my-3 py-4 px-4 capitalize text-white text-[14px]">{value}</button>
    </div>
  );
};

export default Button;
