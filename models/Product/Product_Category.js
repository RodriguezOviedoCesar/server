import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
  {
    name:
    {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

export default model('Product_Category', categorySchema);