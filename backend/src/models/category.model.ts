import { model, Schema } from "mongoose";

interface ICatagory {
  name: string;
  discription: string;
}

const categorySchema = new Schema<ICatagory>(
  {
    name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      default: "comment",
    },
  },
  { timestamps: true }
);

const Catagory = model<ICatagory>("categories", categorySchema);
export default Catagory;
