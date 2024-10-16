import { model, Schema } from "mongoose";

interface IComment {
  userName: string;
  rate: number;
  description: string;
}

interface IProduct {
  name: string;
  discription: string;
  price: number;
  size: string;
  images: string[];
  isNew: boolean;
  isLike: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
  comment: [
    {
      userName: string;
      rate: number;
      description: string;
    }
  ];
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
    isLike: {
      type: Boolean,
      default: false,
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
    comment: [
      {
        userName: {
          type: String,
          required: false,
          ref: "User",
        },

        description: {
          type: String,
          required: false,
        },
        rate: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },

  { timestamps: true }
);

const Product = model<IProduct>("Product", productSchema);
export default Product;
