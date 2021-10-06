const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const BigTransferSchema = new mongoose.Schema({
  txHash: {
    type: String,
    required: true,
    unique: true,
  },
  blockHash: {
    type: String,
  },
  blockNumber: {
    type: String,
  },
  recipient: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["refused", "validated", "pending"],
    default: "pending",
  },

  tokenSale: { type: String, enum: ["-1", "0", "1"], default: "0" },
  team: { type: String, enum: ["-1", "0", "1"], default: "0" },
  marketing: { type: String, enum: ["-1", "0", "1"], default: "0" },
  time : { type : Number, default: Math.floor(Date.now) }
});

module.exports = mongoose.model(
  "transaction",
  BigTransferSchema,
  "BigTransfer"
);
