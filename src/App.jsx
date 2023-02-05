import { useState } from "react";
import { Banner, Header, Products, SideBar } from "./components";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div className="App">
      <Header />
      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Banner
        selectedCategory={selectedCategory}
        handleChange={handleChange}
        setOpenSideBar={setOpenSideBar}
      />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
