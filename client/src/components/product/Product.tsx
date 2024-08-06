import { Link } from "react-router-dom";
import { ProductType } from "../../types";

const Product = ({ title, price, slug, thumbImage }: ProductType) => {
  console.log(slug);
  return (
    <Link to={`/product/${slug}`}>
      <div className="rounded-md overflow-hidden space-y-2 text-xs">
        <div>
          <img src={thumbImage} alt="" />
        </div>
        <div>{title}</div>
        <p className="font-bold text-xl">-₹{price}.00</p>
      </div>
    </Link>
  );
};

export default Product;
