import React, { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ProductDetails = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const moveLeft = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };
  const moveRight = () => {
    if (imgIndex < products[Number(id)]?.imageUrls?.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  };

  return (
    <div className="px-36 my-14 flex gap-3">
      <div>
        <div className="w-[800px] flex items-center justify-between">
          <button onClick={moveLeft}>
            <IoIosArrowBack className="absolute bg-white text-5xl text-black left-48  opacity-70 rounded-full" />
          </button>
          <img
            src={products[Number(id)]?.imageUrls[imgIndex]}
            alt="image alt"
            className="object-contain "
          />
          <button onClick={moveRight}>
            <IoIosArrowForward className="absolute bg-white text-5xl text-black right-[650px] opacity-70 rounded-full" />
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          {products[Number(id)]?.imageUrls?.map((prod, i) => (
            <img
              key={i}
              src={prod}
              alt=""
              className="h-20"
              onClick={() => setImgIndex(i)}
            />
          ))}
        </div>
      </div>
      <div className="w-[500px]">
        <div className="border-2 border-solid w-full p-3">
          <h1 className="font-bold text-3xl">
            ₹ {products[Number(id)]?.price}
          </h1>
          <p className="text-lg"> {products[Number(id)]?.title}</p>
          <p className="text-sm text-right">
            {products[Number(id)]?.createdAt}
          </p>
        </div>
        <div className="border-2 border-solid w-full p-3 mt-3">
          <h1 className="text-lg font-semibold">Description</h1>
          <p className="mt-2">{products[Number(id)]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
