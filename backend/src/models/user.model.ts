import { model, ObjectId, Schema } from "mongoose";
const bcrypt = require("bcrypt");

interface IUser {
  _id: Schema.Types.ObjectId;
  lastname: String;
  firstname: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: String;
  profile_img: String;
  otp: String;
  passwordResetToken: String;
  passwordResetTokenExpire: Date;
  created_at: Date;
  updated_at: Date;
  address: String;
}

const userSchema = new Schema<IUser>({
  lastname: {
    type: String,
    // required: [true, "Хэрэглэгчийн owogiig заавал оруулна"],
  },
  firstname: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг заавал оруулна"],
  },
  email: {
    type: String,
    required: [true, "Хэрэглэгчийн email-g заавал оруулна"],
    unique: true,
  },
  password: {
    type: String,
    mnLenght: [8, "Хэрэглэгчийн password-g заавал 8 тэмдэгт оруулна"],
    required: [true, "Хэрэглэгчийн password-g заавал оруулна"],
  },
  phoneNumber: {
    type: String,
    // required: [true, "Хэрэглэгчийн phoneNumber-g заавал оруулна"],
  },

  role: { type: String, enum: ["admin", "user"], default: "user" },
  profile_img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1726591383725-59f0d79a6a5d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
  },
  address: String,
  otp: String,
  passwordResetToken: String,
  passwordResetTokenExpire: Date,
  created_at: {
    type: Date,
    default: Date.now,
  },

  updated_at: {
    type: Date,
    default: Date.now,
  },
});
// pre() middleware ym save hiihiin umnu daraah functioniig ajiluuulaarai gesen utgatai
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const hashedPassword = bcrypt.hashSync(this.password.toString(), 10);
    this.password = hashedPassword;
    next();
  }
});
const User = model("user", userSchema);
export default User;
