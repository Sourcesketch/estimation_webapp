import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    managerName: {
      type: String,
    },
    managerId: {
      type: Number,
    },
    // notification: {
    //   type: Boolean,
    // },
  },
  { timestamps: true }
);

// hash passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
