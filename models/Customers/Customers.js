import {Schema, model} from 'mongoose';

const customerSchema = new Schema(
  {
    name:{
      type: String,
      required: true,
      default: 'UNDEFINED',
      trim: true,
    },
    code:{
      type: String,
      required: true,
      default: '00000000',
      trim: true,
    },
    type:{
      type: String,
      required: true,
      enum: ['PERSONA', 'EMPRESA'],
      default: 'PERSONA',
    }
  },
  {
    timestamps: true,
  }
)

export default model('Customers', customerSchema);