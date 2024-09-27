import { Request, Response } from "express";
import Catagory from "../models/category.model";

export const CreateCategory = async (req: Request, res: Response) => {
  try {
    const { name, discription } = req.body;
    if (!name || !discription) {
      res.status(400).json({ message: "Хоосон утга байж болохгүй" });
      return;
    }
    const createdCategory = await Catagory.create({
      name,
      discription,
    });
    res
      .status(201)
      .json({ message: "Category success", category: createdCategory });
  } catch (error) {
    res.status(401).json({ message: "Category uusehed aldaa garlaa", error });
  }
};
export const getCategory = async (req: Request, res: Response) => {
  try {
    const AllCategory = await Catagory.find({});
    res
      .status(201)
      .json({ message: "Category all see", category: AllCategory });
  } catch (error) {
    res.status(401).json({ message: "Category harahad aldaa garlaa", error });
  }
};
