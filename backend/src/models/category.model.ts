import { model, Schema } from "mongoose";

// category:{name, decripsion}

// category:{
//   clothes:{name, decripsion};
//   furnuties:{name, decripsion};
//   zize:{name}
// }

interface ICatagory {
  // [name: string]: [name: string, discription: string];
  name: string;
  discription: string;
  // subCategories: { name: string; discription: string }[];
}

// {
//   name: 'clothes',
//   description:'jisajdoias',
//   subCategories: [
//     {
//       name: 'hat',
//       description:'jisajdoias',
//     },
//     {
//       name: 'short',
//       description:'jisajdoias',
//     }
//   ]
// }

// interface ISubCategories {
//   name: string;
//   discription: string;
// }
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

// CategoryGroup: {
//   categories: [id, id, id, id,]
// }

// [
//   {
//     clothes: {
//       _id: "66f3948ee3684f1d2dea9998",
//       name: "Malgai",
//       discription: "goy2",
//       createdAt: "2024-09-25T04:41:50.764Z",
//       updatedAt: "2024-09-25T04:41:50.764Z",
//       __v: 0,
//     },
//     xl: {
//       _id: "66f3948ee3684f1d2dea9998",
//       name: "Malgai",
//       discription: "goy2",
//       createdAt: "2024-09-25T04:41:50.764Z",
//       updatedAt: "2024-09-25T04:41:50.764Z",
//       __v: 0,
//     },
//   },
//   {

//     xl: {
//       _id: "66f3948ee3684f1d2dea9998",
//       name: "Malgai",
//       discription: "goy2",
//       createdAt: "2024-09-25T04:41:50.764Z",
//       updatedAt: "2024-09-25T04:41:50.764Z",
//       __v: 0,
//     },
//   },
// ];

// "clothes.name" === "Malgai";
