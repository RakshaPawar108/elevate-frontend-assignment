import { useState } from "react";
import { Banner, Header, Products, SideBar } from "./components";
import { useProducts } from "./context";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  let products = useProducts();
  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className="App">
      <Header />
      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Banner
        selectedCategory={selectedCategory}
        handleChange={handleChange}
        setOpenSideBar={setOpenSideBar}
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <Products filteredProducts={filteredProducts} searchterm={searchTerm} />
    </div>
  );
}

export default App;
