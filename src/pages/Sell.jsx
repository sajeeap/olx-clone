import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import list from "../utils/constants";
import Categories from "../components/Categories.jsx";

const Sell = () => {
  const [sub, setSub] = useState([]);
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gray-200 py-5 px-3">
        <BiLeftArrowAlt onClick={() => navigate("/")} size={30} />
      </div>
      <div className="flex justify-center itetms-center">
        <div className=" w-[60%]">
          <h1 className="text-3xl font-[400] text-center py-2">Post Your Ad</h1>
          <div className="border-2 border-solid ">
            <div className="border-b-2 border-solid">
              <h1 className="text-2xl font-[500] p-2">CHOOSE A CATEGORY</h1>
            </div>
            <div className="flex ">
              <div className="w-1/2 ">
                {list?.map((l) => (
                  <Categories
                    key={l.id}
                    icon={l.icon}
                    category={l.name}
                    sub={l.sub}
                    setSub={setSub}
                  />
                ))}
              </div>
              <div className="w-1/2 ">
                {sub?.map((s) => (
                  <div
                  onClick={()=>navigate("/add-product")}
                    key={s}
                    className="border-b-2 border-solid p-3 text-gray-600 "
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
