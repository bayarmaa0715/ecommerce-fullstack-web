"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user";
import axios from "axios";
import { toast } from "react-toastify";
import { ProductContext } from "./product-context";
import { useParams } from "next/navigation";

export type IProduct = {
  name: string;
  price: number;
  images: string[];
  _id: string;
};
export type ICard = [
  {
    product: {
      name: string;
      price: number;
      images: string[];
      _id: string;
    };
    quantity: number;
    totalAmount: number;
    _id: string;
  }
];
export interface ICardContext {
  card: ICard;

  setCard: React.Dispatch<React.SetStateAction<ICard>>;
  deleteCart: (productId: string) => void;
  updatedQuantity: (productId: string, changedquantity: number) => void;
  createCard: () => void;
  cLoading: boolean;
}

export const CartContext = createContext<ICardContext>({
  card: [
    {
      product: { name: "", price: 0, images: [], _id: "" },
      quantity: 0,
      totalAmount: 0,
      _id: "",
    },
  ],
  setCard: () => {},
  deleteCart: () => {},
  updatedQuantity: () => {},
  createCard: () => {},
  cLoading: true,
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [card, setCard] = useState<ICard>([
    {
      product: { name: "", price: 0, images: [], _id: "" },
      quantity: 0,
      totalAmount: 0,
      _id: "",
    },
  ]);
  const [cLoading, setCLoading] = useState(true);
  const { user } = useContext(UserContext);
  const { product } = useContext(ProductContext);
  const { id } = useParams();

  const createCard = async () => {
    try {
      setCLoading(true);
      const userId = user?._id;
      const totalAmount = product?.price * product?.quantity;
      const quantity = product?.quantity;

      if (!user) {
        return;
      }

      const res = await axios({
        method: "post",
        url: "http://localhost:8000/api/v1/purchasecard/createdcard",
        headers: {},
        data: {
          productId: id,
          userId,
          totalAmount,
          quantity,
        },
      });

      if (res.status === 200) {
        await getCard();
        return toast.success("Амжиллтай сагслаллаа", {
          autoClose: 100,
          position: "top-center",
        });
        // console.log("Amjilttai sagsallaa");
      }
    } catch (error) {
      console.log("Сагсанд бараа нэмэхэд алдаа гарлаа", error);
    } finally {
      setCLoading(false);
    }
  };

  const getCard = async () => {
    if (!user) return;

    const userId = user?._id;
    // console.log("userId", userId);
    try {
      setCLoading(true);
      const res = await axios.get(
        `http://localhost:8000/api/v1/purchasecard/getCart?userId=${userId}`
      );
      if (res.status === 200) {
        // console.log(res.data.AllCard);
        setCard(res.data.AllCard.products);
        // console.log("backees irsen cart data", res.data.AllCard);
      }
    } catch (error) {
      console.log("Backend eed all card iig harahd aldaa garlaa ", error);
    } finally {
      setCLoading(false);
    }
  };

  const deleteCart = async (productId: string) => {
    try {
      console.log("productId", productId);
      const userId = user?._id;
      // const cardOneProductId = e?.product._id;
      // console.log("e harah", e);
      console.log("jjjj", userId);
      const res = await axios({
        method: "delete",
        url: "http://localhost:8000/api/v1/purchasecard/deletecart",

        data: { userId, cardOneProductId: productId },
      });
      if (res.status === 200) {
        await getCard();
        toast.success("Амжилттай устгалаа", {
          autoClose: 100,
          position: "top-center",
        });
        // console.log("Amjilltai ustgalaa");
      }
    } catch (error) {
      console.log("Backend eed card iig ustgahad  aldaa garlaa ", error);
    }
  };
  const updatedQuantity = async (
    productId: string,
    changedquantity: number
  ) => {
    setCard((prevCart: any) =>
      prevCart.map((item: any) =>
        item.product._id === productId
          ? { ...item, quantity: changedquantity }
          : item
      )
    );
    try {
      if (!user) {
        return;
      }

      const userId = user?._id;
      //   const productId = e?.product?._id;
      //   const changedquantity = e.quantity;
      // console.log("first", userId, productId, changedquantity);
      const update = await axios({
        method: "put",
        url: "http://localhost:8000/api/v1/purchasecard/updatedcart",

        data: { userId, productId, changedquantity },
      });

      if (update.status === 200) {
        await getCard();
        toast.success("Амжилттай шинэчлэгдлээ", {
          autoClose: 100,
          position: "top-center",
        });
        // console.log("Амжилттай шинэчлэгдлээ");
      }
    } catch (error) {
      console.log("Backend дата карт шинэчлэхэд алдаа гарлаа ", error);
    }
  };

  useEffect(() => {
    getCard();
  }, [user]);
  return (
    <CartContext.Provider
      value={{
        card,
        setCard,
        deleteCart,
        updatedQuantity,
        createCard,
        cLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useUser = () => {
  return useContext(CartContext);
};

export default CartProvider;
