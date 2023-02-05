import axios from "axios";

export const fetchJewelery = () =>
  axios.get(
    "https://fakestoreapi.com/products/category/jewelery?limit=3"
  );
