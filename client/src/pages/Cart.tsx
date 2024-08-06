import { useState } from "react";
import axios from "../axios";
import AuthRequired from "../components/AuthRequired";
import Loader from "../components/Loader";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);

  const { loading, isAuth } = useAuth();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-y-2">
        <Loader />
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuth) {
    return <AuthRequired />;
  }

  if (products.length == 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center flex-col gap-y-6">
        <h1>No products found</h1>
        <button
          onClick={() => navigate("/search")}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const fetchMyCart = async () => {
    try {
      const response = await axios.get("/user/cart");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
};

export default Cart;
