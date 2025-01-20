import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Categories = (props) => {
  const handleClick = () => {
    props.setSub(props.sub);
  };

  return (
    <div
      onClick={handleClick}
      className="border-b-2 border-r-2 border-solid p-2 flex justify-between items-center text-gray-600 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <props.icon size={30} />
        <p className="text-xl">{props.category}</p>
      </div>
      <IoIosArrowForward />
    </div>
  );
};

export default Categories;
