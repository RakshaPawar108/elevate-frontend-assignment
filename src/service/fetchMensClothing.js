import axios from "axios";

export const fetchMensClothing = () =>
  axios.get(
    "https://fakestoreapi.com/products/category/men's clothing?limit=1"
  );
