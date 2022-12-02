import { Schema, model } from "mongoose";

const transmittierSchema = new Schema(
  {
  
    tipodoc:{
      type: String,
      required: true,
      default: '6'
    },
    ruc: {
      type: String,
      required: true,
      trim: true,
    },
    razonsocial:{
      type: String,
      required: true,
      trim: true,
    },
    nombrecomercial:{
      type: String,
      required: true,
      trim: true,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    }, 
    pais:{
      type: String,
      required: true,
      trim: true,
      default: 'PE'
    },
    departamento:{
      type: String,
      required: true,
      trim: true,
      default: 'PIURA'
    },
    provincia:{
      type: String,
      required: true,
      trim: true,
      default: 'PIURA'
    },
    distrito: {
      type: String,
      required: true,
      trim: true,
      default: 'PIURA'
    },
    ubigeo:{
      type: String,
      required: true,
      trim: true,
    },
    usuariosecundario:{
      type: String,
      required: true,
      trim: true,
    },
    claveusuariosecundario:{
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

export default model('Transmittier', transmittierSchema);