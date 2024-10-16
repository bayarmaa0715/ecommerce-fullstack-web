"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user";
import { toast } from "react-toastify";

interface IComment {
  userName: string;
  description: string;
  rate: number;
}
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
  comment: [
    {
      userName: string;
      description: string;
      rate: number;
    }
  ];
  // spancol?: string;
  // spanrow?: string;
}

interface IProductContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  product: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  likeProduct: () => void;
  unlikeProduct: (productId: string) => void;
  likedProduct: number;
  loading: boolean;
  createComment: () => void;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  setProducts: () => {},
  product: {} as IProduct,
  setProduct: () => {},
  likeProduct: () => {},
  unlikeProduct: () => {},
  likedProduct: 0,
  loading: false,
  createComment: () => {},
  rating: 0,
  setRating: () => {},
  description: "",
  setDescription: () => {},
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const likedProduct = products.filter((pro) => pro?.isLike === true).length;
  console.log("===>", likedProduct);

  const likeProduct = async () => {
    if (product?.isLike === true) {
      setProduct({ ...product, isLike: (product.isLike = false) });
      console.log("false", product.isLike);
    } else if (product?.isLike === false) {
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
        await fetchProductData();
        toast.success("Бүтээгдэхүүн таалагдлаа", { autoClose: 500 });
      }
    } catch (error) {
      console.log("Бүтээгдэхүүн таалагдлаа дарахад алдаа", error);
    }
  };

  const unlikeProduct = async (productId: string) => {
    try {
      const userId = user?._id;

      console.log("productId", productId);
      if (!user) {
        return;
      }
      const data = await axios({
        method: "put",
        url: "http://localhost:8000/api/v1/products/likedproduct",
        data: { clickLike: false, productId, userId },
      });

      if ((data.status = 200)) {
        await fetchProductData();

        toast.success("Бүтээгдэхүүн таалагдахаа болилоо", { autoClose: 500 });
      }
    } catch (error) {
      console.log("Бүтээгдэхүүн heart дарахад алдаа", error);
    }
  };

  const fetchProductData = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:8000/api/v1/products");
      if (res.status === 200) {
        setProducts(res.data.allproducts);
        // console.log("Product бүх дата харах d", res.data.allproducts);
      }
    } catch (error) {
      console.log("Product бүх дата харахад алдаа гарлаа", error);
    } finally {
      setLoading(false);
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

  const createComment = async () => {
    try {
      const userId = user?._id;
      const userName = user?.firstname;
      const productId = id;
      const res = await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/products/createcomment",
        data: { userId, userName, productId, description, rate: rating },
      });
      if (res.status === 200) {
        await fetchProductData();
        toast.success("Сэтгэгдэл үлдээсэн таньд баярлалаа", { autoClose: 500 });
      }
    } catch (error) {
      console.log("Сэтгэгдэл үлдээхэд алдаа гарлаа.Та кодоо шалгана уу", error);
      toast.error("Сэтгэгдэл үлдээхэд алдаа гарлаа. Та дахин оролдоно уу", {
        autoClose: 500,
      });
    }
  };

  useEffect(() => {
    // if (!products) {
    //   return;
    // }
    fetchProductData();
  }, []);

  useEffect(() => {
    // if (!product) {
    //   return;
    // }
    getProduct();
  }, [id]);
  // console.log("Product бүх дата харах set", products);
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        product,
        loading,
        setProduct,
        likeProduct,
        unlikeProduct,
        likedProduct,
        createComment,
        rating,
        setRating,
        description,
        setDescription,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useUser = () => {
  return useContext(ProductContext);
};
export default ProductProvider;
