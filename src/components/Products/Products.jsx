import { Product } from "../Product/Product";
import "./Products.css";

export const Products = ({ filteredProducts }) => {
  return (
    <div className="products-wrapper">
      <div className="category-wrapper">
        <div className="products-category-heading" id="products">
          Products
        </div>

        <div className="products-container">
          {filteredProducts.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
