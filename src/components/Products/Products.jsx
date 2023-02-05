import { Product } from "../Product/Product";
import { useProducts } from "../../context";
import "./Products.css";

export const Products = ({ selectedCategory }) => {
  let { mensProducts, womensProducts, jewelery, electronics } = useProducts();

  let womensAndMensProds = [...womensProducts, ...mensProducts];

  return (
    <div className="products-wrapper">
      <div
        className="category-wrapper"
        style={{
          display:
            selectedCategory === "Clothing" || selectedCategory === "All"
              ? "flex"
              : "none",
        }}
      >
        <div className="products-category-heading" id="fashion">
          Men's & Women's Fashion
        </div>

        <div className="products-container">
          {womensAndMensProds.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
              key={product.id}
            />
          ))}
        </div>
      </div>
      <div
        className="category-wrapper"
        style={{
          display:
            selectedCategory === "Electronics" || selectedCategory === "All"
              ? "flex"
              : "none",
        }}
      >
        <div className="products-category-heading" id="electronics">
          Electronics
        </div>

        <div className="products-container">
          {electronics.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
              key={product.id}
            />
          ))}
        </div>
      </div>
      <div
        className="category-wrapper"
        style={{
          display:
            selectedCategory === "Jewellery" || selectedCategory === "All"
              ? "flex"
              : "none",
        }}
      >
        <div className="products-category-heading" id="jewellery">
          Jewellery & Accessories
        </div>

        <div className="products-container">
          {jewelery.map((product) => (
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
