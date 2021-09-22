import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/product/",
});

interface Product { 
    _id?: string;
    name: string;
    price: number;
    stock: number;
} 

class ProductController {

  async list(): Promise<Product[]> {
    try {
      let response = await api.get("find");
      return response.data.sort((a: Product, b: Product) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
    } catch (error) {
      throw error;
    }  
  }

  async find(_id: string): Promise<Product> {
    try {
      let response = await api.get("find");
      return response.data;
    } catch (error) {
      throw error;
    }  
  }



  async create(product: Product): Promise<Product> {
    try {
      let response = await api.post("save", { product });
      return response.data;
    } catch (error) {
      throw error;
    }  
  }

  async update(product: Product): Promise<Product> {
    try {
      let response = await api.post("update", { product });
      return response.data;
    } catch (error) {
      throw error;
    }  
  }

  async remove(_id: string): Promise<void> {
    try {
      let response = await api.post("remove", { _id });
      return response.data;
    } catch (error) {
      throw error;
    }  
  }
}

export default new ProductController();




