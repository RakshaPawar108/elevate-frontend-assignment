import { Product } from "../Product/Product";
import "./Products.css";

export const Products = () => {
  return (
    <div className="products-wrapper">
      <div className="category-wrapper">
        <div className="products-category-heading">Men's & Women's Fashion</div>

        <div className="products-container">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};
