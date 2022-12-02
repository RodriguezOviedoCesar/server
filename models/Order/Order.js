import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    type:{
      type: String,
      required: true,
      enum: ['BOLETA', 'FACTURA', 'TICKET'],
      default: 'TICKET',
    },
    efectivo:{
      type: Number,
      trim: true,
    },
    opgravadas: {
      type: Number,
      trim: true,
    },
    opinafectas:{
      type: Number,
      trim: true,
    },
    opexoneradas:{
      type: Number,
      trim: true,
    },
    igv:{
      type: Number,
      trim: true,
    },
    status:{
      type: String,
      required: true,
      enum: ['1','2','3'],
      default: '1'
    },
    user:{
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    customer:{
      type: Schema.Types.ObjectId,
      ref: 'Customers',
    },
    codigo:{
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
)

export default model('Order', orderSchema);