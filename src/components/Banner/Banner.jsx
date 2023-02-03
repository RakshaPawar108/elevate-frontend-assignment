import { bannerImg } from "../../assets";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-background-image-wrapper">
        <img
          src={bannerImg}
          className="banner-background-image"
          alt="Banner Image"
        />
          <div className="overlay-text-wrapper">
            <h3 className="banner-heading">Get Started</h3>
            <h3 className="banner-heading">Your Favourite Shopping Site</h3>
            <a href="/">
              <button className="intro-btn">Buy Now</button>
            </a>
          </div>
      </div>
    </div>
  );
};
