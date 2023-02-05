import {
  fetchMensClothing,
  fetchWomensClothing,
  fetchJewelery,
  fetchElectronics,
} from "../service";

export const getProducts = async (
  setMensProducts,
  setWomensProducts,
  setJewelery,
  setElectronics
) => {
  try {
    let mensProds = await fetchMensClothing();
    if (mensProds.status === 200) setMensProducts(mensProds.data);

    let womensProds = await fetchWomensClothing();
    if (womensProds.status === 200) setWomensProducts(womensProds.data);
    let jewels = await fetchJewelery();
    if (jewels.status === 200) setJewelery(jewels.data);

    let electronicProds = await fetchElectronics();
    if (electronicProds.status === 200) setElectronics(electronicProds.data);
  } catch (err) {
    console.log(err);
  }
};
