"use client";

import axios from "axios";
import { useParams } from "next/navigation";

import { createContext, useContext, useEffect, useState } from "react";

interface IProduct {
  _id: string;
  name: string;
  discription: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: string;
  // spancol?: string;
  // spanrow?: string;
}

interface IProductContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  product: IProduct | null;
  setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  setProducts: () => {},
  product: null,
  setProduct: () => {},
  like: false,
  setLike: () => {},
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [like, setLike] = useState(false);

  const fetchProductData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/products");
      if (res.status === 200) {
        setProducts(res.data.allproducts);

        // console.log("Product бүх дата харах d", res.data.allproducts);
      }
    } catch (error) {
      console.log("Product бүх дата харахад алдаа гарлаа", error);
    }
  };
  const { id } = useParams();
  const getProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/products/${id}`
      );
      if (res.status === 200) {
        setProduct(res.data.product);
      }

      // console.log("Зөвхөн 1 Product id аар харах", res.data.product);
    } catch (error) {
      console.log("Зөвхөн 1 Product id аар харахад амжилтгүй боллоо", error);
    }
  };

  useEffect(() => {
    fetchProductData();
    getProduct();
  }, []);
  // console.log("Product бүх дата харах set", products);
  return (
    <ProductContext.Provider
      value={{ products, setProducts, product, setProduct, like, setLike }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useUser = () => {
  return useContext(ProductContext);
};
export default ProductProvider;
