import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import "./FunctionBar.css";

export const FunctionBar = ({ setOpenSideBar }) => {
  return (
    <div className="function-bar">
      <HamburgerButton setOpenSideBar={setOpenSideBar} />
    </div>
  );
};
