import axios from "axios";

export const fetchElectronics = () =>
  axios.get(
    "https://fakestoreapi.com/products/category/electronics?limit=3"
  );
