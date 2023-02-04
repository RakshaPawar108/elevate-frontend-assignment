import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import { SearchBar } from "../SearchBar/SearchBar";
import "./FunctionBar.css";

export const FunctionBar = ({ setOpenSideBar }) => {
  return (
    <div className="function-bar">
      <HamburgerButton setOpenSideBar={setOpenSideBar} />
      <SearchBar />
    </div>
  );
};
