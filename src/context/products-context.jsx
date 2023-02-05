import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../utils";

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [mensProducts, setMensProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    getProducts(
      setMensProducts,
      setWomensProducts,
      setJewelery,
      setElectronics
    );
  }, []);
  return (
    <ProductsContext.Provider
      value={{ mensProducts, womensProducts, jewelery, electronics }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
