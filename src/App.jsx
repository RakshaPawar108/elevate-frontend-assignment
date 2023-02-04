import { useState } from "react";
import { Banner, Products, SideBar } from "./components";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="App">
      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Banner setOpenSideBar={setOpenSideBar} />
      <Products />
    </div>
  );
}

export default App;
