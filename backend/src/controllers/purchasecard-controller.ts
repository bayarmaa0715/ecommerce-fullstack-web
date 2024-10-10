import { Request, Response } from "express";
import PurchaseCard from "../models/purchasecard.model";

export const createdCard = async (req: Request, res: Response) => {
  // const {id}=req.user
  const { userId, productId, totalAmount, quantity } = req.body;
  try {
    const findUserCard = await PurchaseCard.findOne({ user: userId });
    if (!findUserCard) {
      const card = await PurchaseCard.create({
        user: userId,
        products: { product: productId, quantity },
        totalAmount,
      });
      return res.status(200).json({ message: "created new card", card });
    }

    const findDuplicated = findUserCard.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (findDuplicated > -1) {
      findUserCard.products[findDuplicated].quantity += quantity;
    } else {
      findUserCard.products.push({ product: productId, quantity });
    }
    const updatedCard = await findUserCard.save();
    res.status(200).json({ message: "updated card", updatedCard });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Card uusehed aldaa garlaa" });
  }
};

export const getCard = async (req: Request, res: Response) => {
  try {
    const getAllCard = await PurchaseCard.find({}).populate("products.product");
    res.status(200).json({ message: "Бүх кард харах", AllCard: getAllCard });
  } catch (error) {
    console.log("Buh cardiig harahad aldaa garlaa", error);
    res.status(400).json({ message: "Buh cardiig harahd aldaa garlaa" });
  }
};
