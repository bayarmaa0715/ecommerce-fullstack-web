import { model, Schema } from "mongoose";

interface IPurchaseCard {
  user: Schema.Types.ObjectId;
  products: [
    {
      product: Schema.Types.ObjectId;
      quantity: Number;
    }
  ];
  totalAmount: Number;
}

const PurchaseCardSchema = new Schema<IPurchaseCard>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true, default: 1 },
      totalAmount: { type: Number, required: true, default: 0 },
    },
  ],
  totalAmount: {
    type: Number,
    default: 0,
  },
});

const PurchaseCard = model<IPurchaseCard>("PurchaseCard", PurchaseCardSchema);

export default PurchaseCard;
