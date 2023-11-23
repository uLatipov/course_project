import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tags: [String],

  customFields: {},
});

postSchema.index({
  description: "text",
  title: "text",
  theme: "text",
  tags: 1,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
