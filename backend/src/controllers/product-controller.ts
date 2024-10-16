import { Request, Response } from "express";
import Product from "../models/product.model";
import User from "../models/user.model";

export const allProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res
      .status(200)
      .json({ message: "Products бүх дата харах", allproducts: products });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Products бүх дата харч чадсангүй ", error });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { productID } = req.params;
  try {
    const product = await Product.findById(productID);
    res.status(200).json({ message: "Id аар бүт харах", product: product });
  } catch (error) {
    console.log("Id аар бүтээглэхүүн харахад амжилтгүй боллоо", error);
    res
      .status(200)
      .json({ message: "Id аар бүтээгэхүүн харахад амжилтгүй боллоо", error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      discription,
      price,
      size,
      images,
      quantity,
      discount,
      category,
    } = req.body;
    if (
      !name ||
      !discription ||
      !price ||
      !size ||
      !images ||
      !quantity ||
      !discount ||
      !category
    ) {
      res.status(404).json({ message: "Хоосон утга байж болохгүй" });
      return;
    }
    const createdProduct = await Product.create({
      name,
      discription,
      price,
      size,
      images,
      quantity,
      discount,
      category,
    });
    res
      .status(201)
      .json({ message: "Product шинээр амжилттай үүслээ", createdProduct });
  } catch (error) {
    res.status(401).json({
      message: "Products шинээр бүртгэл үүсэхэд алдаа гарлаа  ",
      error,
    });
  }
};

export const likedProduct = async (req: Request, res: Response) => {
  try {
    // const { productId } = req.params;
    const { clickLike, userId, productId } = req.body;
    console.log("frontoos irsen data harah", clickLike, productId, userId);
    const findUser = await User.findOne({ _id: userId });
    if (!findUser) {
      console.log("Хэрэглэгч нэврэнэ үү");
      res.status(200).json({ message: "Хэрэглэгч нэврэнэ үү " });

      return;
    }

    const findProdcut = await Product.findOne({ _id: productId });
    if (!findProdcut) {
      console.log("Уг бүтээгдэхүүн олдонгүй ");
      res.status(200).json({ message: "Уг бүтээгдэхүүн олдонгүй " });
      return;
    }
    console.log("update hiih product iin medeell", findProdcut);
    findProdcut.isLike = clickLike;
    console.log("update hiisen product iin medeell", findProdcut);
    const updatedProduct = await findProdcut.save();
    res
      .status(200)
      .json({ message: "Бүтээгдэхүүн таалагдлаа ", updatedProduct });
  } catch (error) {
    console.log("Бүтээгдэхүүнд дурлахад алдаа гарлаа", error);
    res
      .status(401)
      .json({ message: "Бүтээгдэхүүнд дурлахад алдаа гарлаа", error });
  }
};

export const createComment = async (req: Request, res: Response) => {
  const { description, userName, userId, productId, rate } = req.body;
  // console.log("req body", description, userName, userId, productId, rate);
  try {
    const findUser = await User.findOne({ _id: userId });
    if (!findUser) {
      console.log("Хэрэглэгч коммент бичихийн тулд нэвтэрнэ үү");
      res
        .status(401)
        .json({ message: "Хэрэглэгч коммент бичихийн тулд нэвтэрнэ үү" });
    }
    const findProduct = await Product.findOne({ _id: productId });
    // console.log("Сэтгэгдэл үлдээх бүтээгдэхүүн ", findProduct);
    if (!findProduct) {
      console.log("Сэтгэгдэл үлдээх бүтээгдэхүүн олдсонгүй");
      res
        .status(401)
        .json({ message: "Сэтгэгдэл үлдээх бүтээгдэхүүн олдсонгүй" });
    }
    // const createdComment = (
    //   await Product.create({ userId, productId, description, rate })
    // ).populate("product");
    findProduct?.comment.push({ rate, description, userName });
    const product = await findProduct?.save();
    res.status(200).json({ message: "Та сэтгэгдэл үлдээлээ", product });
  } catch (error) {
    console.log("Сэтгэгдэл үлдээхэд алдаа гарлаа", error);
    res.status(400).json({ message: "Сэтгэгдэл үлдээхэд алдаа гарлаa", error });
  }
};
