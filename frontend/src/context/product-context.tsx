"use client";

import axios from "axios";
import { useParams } from "next/navigation";

import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user";
import { toast } from "react-toastify";

interface IProduct {
  _id: string;
  name: string;
  discription: string;
  price: number;
  size: string;
  images: string[];
  isNew: boolean;
  isLike: boolean;
  quantity: number;
  discount: number;
  category: string;
  // spancol?: string;
  // spanrow?: string;
}

interface IProductContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  product: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  likeProduct: () => void;
  unlikeProduct: () => void;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  setProducts: () => {},
  product: {} as IProduct,
  setProduct: () => {},
  likeProduct: () => {},
  unlikeProduct: () => {},
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const likeProduct = async () => {
    if (product?.isLike === true) {
      setProduct({ ...product, isLike: (product.isLike = false) });
      console.log("false", product.isLike);
    } else {
      setProduct({ ...product, isLike: (product.isLike = true) });
      console.log("true", product.isLike);
    }
    try {
      const userId = user?._id;
      if (!user) {
        return;
      }
      const data = await axios({
        method: "put",
        url: "http://localhost:8000/api/v1/products/likedproduct",
        data: { clickLike: product.isLike, productId: id, userId },
      });
      console.log("ilgeeh like utga", product.isLike, id, userId);
      if ((data.status = 200)) {
        toast.success("Бүтээгдэхүүн таалагдлаа", { autoClose: 500 });
      }
    } catch (error) {
      console.log("Бүтээгдэхүүн таалагдлаа дарахад алдаа", error);
    }
  };

  const unlikeProduct = async () => {
    if (product?.isLike === true) {
      setProduct({ ...product, isLike: (product.isLike = false) });
      console.log("false", product.isLike);

      try {
        const userId = user?._id;
        if (!user) {
          return;
        }
        const data = await axios({
          method: "put",
          url: "http://localhost:8000/api/v1/products/likedproduct",
          data: { clickLike: product.isLike, productId: id, userId },
        });
        console.log("ilgeeh like utga", product.isLike, id, userId);
        if ((data.status = 200)) {
          toast.success("Бүтээгдэхүүн таалагдлаа", { autoClose: 500 });
        }
      } catch (error) {
        console.log("Бүтээгдэхүүн таалагдлаа дарахад алдаа", error);
      }
    }

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
      // index();
    }, []);
    // console.log("Product бүх дата харах set", products);
    return (
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          product,
          setProduct,
          likeProduct,
          unlikeProduct,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  };
};
export const useUser = () => {
  return useContext(ProductContext);
};
export default ProductProvider;
