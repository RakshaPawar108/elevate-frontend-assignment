import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

export const SideBar = () => {
  return (
    <aside className="sidebar">
      <FontAwesomeIcon className="cross-icon" icon={faXmark} />
      <ul className="sidebar-list-items">
        <li className="list-item">
          <a href="#home" className="list-item-link">
            Home
          </a>
        </li>
        <li className="list-item">
          <a href="#fashion" className="list-item-link">
            Fashion
          </a>
        </li>
        <li className="list-item">
          <a href="#electronics" className="list-item-link">
            Electronics
          </a>
        </li>
        <li className="list-item">
          <a href="#jewellery" className="list-item-link">
            Jewellery & Accessories
          </a>
        </li>
      </ul>
    </aside>
  );
};
