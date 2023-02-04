import { Product } from "../Product/Product";
import { useProducts } from "../../context";
import "./Products.css";
import { useState } from "react";

export const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let products = useProducts();

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const startIndex = currentSlide * 3;
  const endIndex = startIndex + 3;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="products-wrapper">
      <div className="category-wrapper">
        <div className="products-category-heading" id="fashion">
          Men's & Women's Fashion
        </div>

        <div className="products-container">
          {currentProducts.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
              key={product.id}
            />
          ))}
        </div>

        <button onClick={handlePrevClick} disabled={currentSlide === 0}>
          Prev
        </button>
        <button
          onClick={handleNextClick}
          disabled={endIndex >= products.length}
        >
          Next
        </button>
      </div>
      <div className="category-wrapper">
        <div className="products-category-heading" id="electronics">
          Electronics
        </div>

        <div className="products-container">
          {currentProducts.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
              key={product.id}
            />
          ))}
        </div>
        <button onClick={handlePrevClick} disabled={currentSlide === 0}>
          Prev
        </button>
        <button
          onClick={handleNextClick}
          disabled={endIndex >= products.length}
        >
          Next
        </button>
      </div>
      <div className="category-wrapper">
        <div className="products-category-heading" id="jewellery">
          Jewellery & Accessories
        </div>

        <div className="products-container">
          {currentProducts.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
              key={product.id}
            />
          ))}
        </div>
        <button onClick={handlePrevClick} disabled={currentSlide === 0}>
          Prev
        </button>
        <button
          onClick={handleNextClick}
          disabled={endIndex >= products.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};
