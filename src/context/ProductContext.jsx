import { createContext, useContext, useEffect, useState } from "react";
import { db, storage } from "../utils/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import AuthContext from "./AuthContext.jsx";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  const addProduct = async (title, description, price, images) => {
    try {
      let imageUrls = [];
      for (let image of images) {
        const storageRef = ref(storage, `/images/${user.uid}_${Date.now()}_${image.name}`);
        let snapshot = await uploadBytes(storageRef, image);
        let url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }
  
      // Add product to Firestore
      await addDoc(collection(db, "products"), {
        user: user.uid,
        title,
        description,
        price,
        imageUrls,
        createdAt: new Date().toDateString(),
      });
  
      // After product is added, refresh the product list
      await getProduct(); // This will fetch the updated products list
      return { success: true };
    } catch (error) {
      console.error("Error adding product:", error);
      return { success: false, message: error.message };
    }
  };
  

  // const addProduct = async (title, description, price, images) => {
  //   try {
  //     let imageUrls = [];
  //     for (let image of images) {
  //       const storageRef = ref(storage, `/images/${user.uid}_${Date.now()}_${image.name}`);
  //       let snapshot = await uploadBytes(storageRef, image);
  //       let url = await getDownloadURL(storageRef);
  //       imageUrls.push(url);
  //     }
  
  //     await addDoc(collection(db, "products"), {
  //       user: user.uid,
  //       title,
  //       description,
  //       price,
  //       imageUrls,  // Store image URLs in Firestore
  //       createdAt: new Date().toDateString(),
  //     });
  //     return { success: true };
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //     return { success: false, message: error.message };
  //   }
  // };
  
  // const addProduct = async (title, description, price, images) => {
  //   try {
  //     let imageUrls = [];

  //     for (let image of images) {
  //       const storageRef = ref(storage, `/images/${image.name}`);
  //       let snapshot = await uploadBytes(storageRef, image);
  //       let url = await getDownloadURL(storageRef);
  //       imageUrls.push(url);
  //     }

  //     await addDoc(collection(db, "products"), {
  //       user: user.uid,
  //       title,
  //       description,
  //       price,
  //       imageUrls,
  //       createdAt: new Date().toDateString(),
  //     });
  //     return { success: true };
  //   } catch (error) {
  //     console.log(error);
  //     return { success: false };
  //   }
  // };

  const getProduct = async () => {
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const allProducts = snapshot.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));
      setProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  // const getProduct = async () => {
  //   try {
  //     let snapshot = await getDocs(collection(db, "products"));
  //     let allProducts = snapshot?.docs?.map((product) => {
  //       return {
  //         ...product.data(),
  //         id: product.id,
  //       };
  //     });

  //     setProducts(allProducts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <ProductContext.Provider value={{ addProduct, products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
