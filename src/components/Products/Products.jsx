import { Product } from "../Product/Product";
import "./Products.css";

export const Products = () => {
  return (
    <div className="products-wrapper">
      <div className="category-wrapper">
        <div className="products-category-heading" id='fashion'>Men's & Women's Fashion</div>

        <div className="products-container">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="category-wrapper">
        <div className="products-category-heading" id='electronics'>Electronics</div>

        <div className="products-container">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="category-wrapper">
        <div className="products-category-heading" id='jewellery'>Jewellery & Accessories</div>

        <div className="products-container">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};
