import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";
import ProductContext from "../context/ProductContext";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { addProduct } = useContext(ProductContext);

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   let res = await addProduct(title, description, price, images);
  //   if (res.success) {
  //     toast.success("product added");
  //     navigate("/");
  //   } else {
  //     toast.error("failed to add product");
  //   }
  //   setLoading(false);  // Moved this outside of the conditional block
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await addProduct(title, description, price, images);
    if (res.success) {
      toast.success("Product added");
      setImages([]);  // Reset images state after product is successfully added
      navigate("/");
    } else {
      toast.error("Failed to add product");
    }
    setLoading(false);
  };
  


  return (
    <div>
      <Toaster />
      <div className="bg-gray-200 py-5 px-3">
        <BiLeftArrowAlt onClick={() => navigate("/sell")} size={30} />
      </div>
      <div className="flex justify-center itetms-center">
        <div className=" w-[40%]">
          <h1 className="text-3xl font-[400] text-center py-2">Post Your Ad</h1>
          <div className="border-2 border-solid ">
            <div className="border-b-2 border-solid">
              <h1 className="text-xl font-[500] p-2">SELECTED CATEGORY</h1>
            </div>
            <form className="p-3" onSubmit={handleSubmit}>
              <div className="my-2">
                <input
                  type="text"
                  className="p-2 w-full border-2 border-solid rounded"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="my-2">
                <textarea
                  className="p-2 w-full border-2 border-solid h-44 rounded"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="my-2">
                <input
                  type="number"
                  className="p-2 w-full border-2 border-solid rounded"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="my-2">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="p-2 w-full border-2 border-solid rounded"
                  placeholder="Title"
                  onChange={handleImage}
                  required
                />
              </div>
              {/* <div className="my-2 flex items-center gap-3 flex-wrap">
                {images?.map((image, i) => (
                  <img
                    key={i}
                    src={URL.createObjectURL(image)}
                    alt="image"
                    className="h-44 w-44"
                  />
                ))}
              </div> */}
              <div className="my-2 flex items-center gap-3 flex-wrap">
                {images.map((image, i) => (
                  <img key={i} src={URL.createObjectURL(image)} alt="image" className="h-44 w-44" />
                ))}
              </div>

              <div className="my-3 text-center">
                {loading ? (
                  <Spinner />
                ) : (
                  <button className="bg-green-900 text-white font-semibold w-28 py-2 rounded-sm">
                    ADD
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
