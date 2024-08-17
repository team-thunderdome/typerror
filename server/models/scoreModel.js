import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Score = mongoose.model("Score", scoreSchema);
