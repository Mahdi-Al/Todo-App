const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

// const UserModel = model("users", UserSchema);
// module.exports = UserModel;

module.exports = model("user", UserSchema);
