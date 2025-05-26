const mongoose = require("mongoose");
const { url } = require("../config/cloudinary");

//schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: Object,
      public_id: String,
      url: String,
    },
    bio: {
      type: String,
    },
    posts: [
      //many posts and post has different file so used .types.ObjectId
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //Post model
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
