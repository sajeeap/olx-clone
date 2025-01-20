import React from "react";

const Card = ({ title, description, imageUrls, price, createdAt }) => {
  return (
    <div className="border-2 border-solid p-2 w-72">
      <img src={imageUrls[0]} alt="" className="h-44 w-full object-cover" />
      <div className="mt-3">
        <p className="font-bold">$ {Number(price).toLocaleString("en-In")}</p>
        <p className=" text-gray-600"> {title}</p>
        <p className="text-sm text-gray-600">{description.substring(0, 20)}</p>
        <p className="text-sm text-gray-600">{createdAt}</p>
      </div>
    </div>
  );
};

export default Card;
