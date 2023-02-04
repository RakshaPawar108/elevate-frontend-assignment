import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./HamburgerButton.css";

export const HamburgerButton = () => {
  return (
    <div>
      <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
    </div>
  );
};
