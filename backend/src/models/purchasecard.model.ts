import { model, Schema } from "mongoose";

interface IPurchaseCard {
  user: Schema.Types.ObjectId;
  products: [{ product: Schema.Types.ObjectId; quantity: Number }];
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
        ref: "User",
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    default: 0,
  },
});

const PurchaseCard = model<IPurchaseCard>("PurchaseCard", PurchaseCardSchema);

export default PurchaseCard;
