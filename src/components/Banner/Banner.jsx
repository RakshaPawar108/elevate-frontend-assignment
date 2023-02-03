import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-background-image-wrapper">
        <div className="banner-background-image overlay">
          <div className="overlay-text-wrapper">
            <h3 className="banner-heading">Get Started</h3>
            <h3 className="banner-heading">Your Favourite Shopping Site</h3>
            <a href="/">
              <button className="intro-btn">Buy Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
