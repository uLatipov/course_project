import mongoose from "mongoose";

const reactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  type: String, // тип реакции, например, "like", "love", "haha", и т.д.
  // Другие поля, которые вам могут понадобиться для реакций
});

const Reaction = mongoose.model("Reaction", reactionSchema);

export default Reaction;
