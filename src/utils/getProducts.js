import { fetchProducts } from "../service";

export const getProducts = async (setProducts) => {
  try {
    let response = await fetchProducts();
    setProducts(response.data);
  } catch (err) {
    console.log(err);
  }
};
