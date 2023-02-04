import './Product.css'

export const Product = () => {
    return (
      <div className="product-card">
        <h4 className="product-name">T-shirt</h4>
        <p className="product-price">
          Price: <span className="number-text">$30</span>
        </p>
        <div className="product-image">
          <img
            src="https://themewagon.github.io/eflyer/images/women-clothes-img.png"
            alt="Product Image"
          />
        </div>
        <div className="buttons-section">
          <a href="/" className="buy-now-btn">
            Buy Now
          </a>
          <a href="/" className="see-more-btn">
            See More
          </a>
        </div>
      </div>
    );
}