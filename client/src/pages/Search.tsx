import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
import { ProductType } from "../types";
import axios from "../axios";
import Product from "../components/product/Product";

const Search = () => {
  const [products, setProducts] = useState<ProductType[]>();
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") ?? "";
  const q = searchParams.get("q") ?? "";

  console.log(category, q);

  useEffect(() => {
    fetchProducts();
  }, [q, category]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/product/list?q=${q}&&category=${category}`
      );
      setProducts(response.data.products);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="w-[90vw] md:w-[80vw] mx-auto flex gap-5 py-6">
        <Filter />
        <div className="flex-1 bg-white p-4 rounded-md">
          {loading ? (
            <div>Loading...</div>
          ) : products?.length == 0 ? (
            <div>
              <h1>Result not found</h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {products?.map((product, index) => (
                <Product {...product} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
