import { Schema, model } from "mongoose";

const productBrands = new Schema(
  {
    name:
    {
      type: String,
      requiered: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

export default model('Products_Brands', productBrands);