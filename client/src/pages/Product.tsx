import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../types";
import axios from "../axios";

const Product = () => {
  // const [error, setErrro] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/product/${slug}`);
      console.log(response);
      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // const handleAddToCart = () => {};

  if (loading) {
    return <p>Loading....</p>;
  }

  // if (error) {
  //   return <p>Error Occure..</p>;
  // }

  return (
    <div className="p-8">
      <div className="w-[90vw] md:w-[80vw] mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-5">
            {product?.images.map((img) => {
              return <img className="h-[300px] rounded-md" src={img} alt="" />;
            })}
          </div>
        </div>
        <div className="flex-1 space-y-12">
          <div className="rounded-3xl bg-red-200 text-red-800 w-fit p-2 text-xs px-4">
            💖 Popular: Recently wishlisted 217 times
          </div>
          <div className="border-b border-b-white py-4 space-y-3">
            <p className="font-bold text-xl">{product?.title}</p>
            <p className="text-xl">{product?.price}</p>
            <div>
              <p>
                Shop for 1,999 and get additional 20% off, no coupon code
                required
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-green-800 text-white text-xs p-2 rounded-xl">
                  4.1 ⭐
                </div>
                338 Ratings & 28 Reviews
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold">Product Details</p>
            <p className="text-xs">{product?.miniDescription}</p>
            <p>{product?.description}</p>
          </div>
          <button className="w-full bg-blue-600 p-4 rounded-md text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
