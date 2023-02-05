import axios from "axios";

export const fetchWomensClothing = () =>
  axios.get(
    "https://fakestoreapi.com/products/category/women's clothing?limit=2"
  );
