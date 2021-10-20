const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// create models
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
    },
    favoriteHotels:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
    }],
    bookedHotels:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "booking",
    }]
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // this equals to user.
  if (this.isModified("password")) {
    const hashedPassword = await bcrypt.hash(this.password, 8);
    this.password = hashedPassword;
  }
  next();
});

userSchema.statics.login = async (email, password) => {
  // Tìm xem trong database có user nào có email giống như email đang đăng nhập.
  const user = await User.findOne({ email });
  // Nếu như không có user thì mình trả về là null.

  // undefined , null , NaN => false,
  // chỉ cần có giá trị => true
  // false
  // ! toán tử not. true => !true = false , false => !false = true

  if (!user) {
    return null;
  }

  // Mình đi so sánh password để xem có đúng password hay hongg.
  const isMatch = await bcrypt.compare(password, user.password);

  // Nếu hong đúng thì mình cũng trả về null.
  if (!isMatch) {
    return null;
  }
  // Nếu đúng thì mình sẽ trả về user.
  return user;
};

userSchema.methods.generateToken = async function () {
  const token = await jwt.sign(
    { _id: this.id.toString() },
    process.env.JWT_SECRET,
    { expiresIn: process.env.EXPIRES_TIME }
  );
  return token;
};

const user = mongoose.model("User", userSchema);
module.exports = user;
