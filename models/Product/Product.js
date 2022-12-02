import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: 'Products_Brands',
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Product_Category',
      required:true,
    },
    status:{
      type: Boolean,
      required: true,
    },  
    statusFraccion:{
      type: Boolean,
      required: true,
    },
    statusIgv:{
      type: Boolean,
      required: true,
    },
    fraccion:{
      type: Number,
      trim: true,
      default: 0
    },
    precio_compra:{
      type: Number,
      required: true,
      trim: true,
    },
    precio_unidad:{
      type: Number,
      required: true,
      trim: true,
    },
    precio_fraccion:{
      type: Number,
      trim: true,
      default: 0,
    },
    composicion:{
      type: String,
      required: true,
      trim: true,
    },
    presentacion:{
      type: String,
      required: true,
      trim: true,
    },
    forma_farm:{
      type: String,
      required: true,
      trim: true,
    },
    codigo_barras:{
      type: String,
      required: true,
      trim: true,
    },
    
  },
  {
    timestamps: true,
  }
);



export default model('Products', productSchema);