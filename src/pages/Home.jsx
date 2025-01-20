import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const { products } = useContext(ProductContext) || { products: [] }; 
     return (
    <div className="min-h-[60vh] px-36 my-14">
      <h1 className="text-2xl pb-3"> Fresh Recommendation</h1>
      <div className="cards flex gap-2 flex-wrap">
        {products.map((product, i) => (
          <Link key={product.id} to={`/product-details/${i}`}>
            <Card {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;