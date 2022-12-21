import { renderProdutsItems } from "./js/rendarFunction";
import { ProductsAPI } from "./js/fetchProdactsAPI";

const productsAPI = new ProductsAPI();

productsAPI.getAllProducts()
  .then((products) => {
    renderProdutsItems(products);
})
