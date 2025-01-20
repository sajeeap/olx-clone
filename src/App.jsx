import { lazy, Suspense } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import Sell from "./pages/Sell";
import AddProduct from "./pages/AddProduct";
import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/Home.jsx";

const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="product-details/:id"
          element={
            <Suspense
              fallback={
                <h1 className="text-center font-bold text-3xl">
                  Loading...
                </h1>
              }
            >
              <ProductDetails />
            </Suspense>
          }
        />
      </Route>
      <Route path="/sell" element={<Sell />} />
      <Route path="/add-product" element={<AddProduct />} />
    </>
  )
);
// njdnfjdnjfdjfnjdnf
function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
