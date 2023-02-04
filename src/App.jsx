import { useState } from "react";
import { Banner, Header, Products, SideBar } from "./components";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="App">
      <Header />
      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Banner setOpenSideBar={setOpenSideBar} />
      <Products />
    </div>
  );
}

export default App;
