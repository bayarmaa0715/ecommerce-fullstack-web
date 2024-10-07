import { Request, Response } from "express";
import Product from "../models/product.model";

export const allProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    // .populate("category")
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
    // .populate("category")
    res.status(200).json({ message: "Id аар бүт харах", product: product });
  } catch (error) {
    console.log("Id аар бүтээглэхүүн харахад амжилтгүй боллоо", error);
    res
      .status(200)
      .json({ message: "Id аар бүтээгдэхүүн харахад амжилтгүй боллоо", error });
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
