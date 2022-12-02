import { Schema, model } from 'mongoose';

const listOrderSchema = new Schema(
  {
    sale: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true
    },
    product:{
      type: Schema.Types.ObjectId,
      ref: 'Products',
      required: true
    },
    units: {
      type: Number,
      required: true,
      trim: true
    }, 
    unitsfraccion: {
      type: Number,
      required: true,
      trim: true
    },
    salidaUnits: {
      type: Number,
      required: true,
      trim: true
    },
    price:{
      type: Number,
      required: true,
      trim: true
    },
    totalPrice:{
      type: Number,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);

export default model('List_Order', listOrderSchema);