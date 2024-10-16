import { Request, Response } from "express";
import PurchaseCard from "../models/purchasecard.model";

export const createdCard = async (req: Request, res: Response) => {
  // const {id}=req.user
  const { userId, productId, totalAmount, quantity } = req.body;

  // console.log("Id=======>", userId, productId, totalAmount, quantity);
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
    // console.log("findDuplicated========>", findDuplicated);
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
    const { userId } = req.query;
    const getAllCard = await PurchaseCard.findOne({ user: userId }).populate(
      "products.product"
    );
    console.log("first", getAllCard);
    res.status(200).json({ message: "Бүх кард харах", AllCard: getAllCard });
  } catch (error) {
    console.log("Buh cardiig harahad aldaa garlaa", error);
    res.status(400).json({ message: "Buh cardiig harahd aldaa garlaa" });
  }
};

export const deleteCard = async (req: Request, res: Response) => {
  const { userId, cardOneProductId } = req.body;

  try {
    const findUserCard = await PurchaseCard.findOne({ user: userId });

    if (!findUserCard) {
      console.log("Энэ хэрэглэгчид сагсалсан бараа байхгүй байна");
      return res
        .status(400)
        .json({ message: "Энэ хэрэглэгчид сагсалсан бараа байхгүй байна" });
    }

    const findIndex = findUserCard.products.findIndex((item) => {
      // console.log("req body====> findIndex", item.product.toString());
      return item.product.toString() === cardOneProductId;
    });

    // console.log(
    //   "req body====>userId, cardOneProductId",
    //   userId,
    //   cardOneProductId
    // );

    // console.log("req body====>findUserCard", findUserCard);

    // console.log(
    //   "frontoos ирсэн бүтээгдэхүүн хэрэглэгсийн сагсан дотор байгаа юу хэддэх индэкс дотр байна вэ",
    //   findIndex
    // );
    if (findIndex === -1) {
      console.log("Уг бараа сагсанд байхгүй байна ");
      return res
        .status(400)
        .json({ message: "Уг бараа сагсанд байхгүй байна " });
    } else {
      findUserCard.products.splice(findIndex, 1);
    }

    const updatedCard = await findUserCard.save();

    res
      .status(200)
      .json({ message: "Success deleted card ", updatedCard: updatedCard });
  } catch (error) {
    console.log("Cart ustgahad aldaa garlaa", error);
    res.status(400).json({ message: "Cart ustgahad aldaa garlaa" });
  }
};

export const updateData = async (req: Request, res: Response) => {
  const { userId, productId, changedquantity } = req.body;
  try {
    const findUserCard = await PurchaseCard.findOne({ user: userId });
    if (!findUserCard) {
      return console.log("Энэ хэрэглэгчид сагсалсан бараа байхгүй байна");
    }
    const findIndex = findUserCard.products.findIndex((item) => {
      return item.product.toString() === productId;
    });
    if (findIndex === -1) {
      return console.log("Уг бараа сагсанд байхгүй байна ");
    }

    findUserCard.products[findIndex].quantity = changedquantity;

    // const changedquantity = findUserCard.products[findIndex].quantity;
    // const updatedQuantity = await PurchaseCard.find({}).updateOne({
    //   quantity: changedquantity,
    // });
    const updatedcard = await findUserCard.save();
    res.status(200).json({
      message: "Сагсанд дах барааны тоог амжилттай шинэчиллээ",
      updatedcard,
    });
  } catch (error) {
    console.log("Cart update aldaa garlaa", error);
    res.status(400).json({ message: "Cart update aldaa garlaa" });
  }
};
