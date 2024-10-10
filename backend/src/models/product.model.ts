import { model, Schema } from "mongoose";

interface IProduct {
  name: string;
  discription: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      default: "comment",
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      enum: ["Free", "S", "M", "L", "XL", "2XL", "3XL"],
      default: "Free",
    },
    images: {
      type: [String],
      default: ["img"],
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Product = model<IProduct>("Product", productSchema);
export default Product;
