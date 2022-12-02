import { Schema, model } from "mongoose";

const productLogSchema = new Schema(
  {
    user:{
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    supplier:{
      type: Schema.Types.ObjectId,
      ref: 'Suppliers',
      required: true,
    },
    product:{
      type: Schema.Types.ObjectId,
      ref: 'Products',
      required: true,
    },
    type:{
      type: String,
      required: true,
      enum: ['AGREGAR','VENTA','LIBERAR'],
      default: 'AGREGAR',
    },
    stock:{
      type: Number,
      required: true,
      trim: true,
    },
    unit:{
      type: Number,
      required: true,
      trim: true,
    },
    unitsfraccion:{
      type: Number,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
)

export default model('Product_Log', productLogSchema);