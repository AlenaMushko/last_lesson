import axios from "axios";
axios.defaults.baseURL = 'https://dummyjson.com/products';

export class ProductsAPI {
  constructor() {
  
  }

  async getAllProducts() {
    const {data} = await axios();
    return data.products;

  //    fetch()
  // .then(res => res.json())
  // .then(({ products }) => {
  //   renderProdutsItems(products);
  // });
  }

}