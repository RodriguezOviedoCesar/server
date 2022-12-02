import { Schema, model} from 'mongoose'

const userSchema = new Schema(
  {
    dni:{
      type: String,
      required: true,
      trim: true,
    },
    type:{
      type: String,
      required: true,
      enum: ['ADMINISTRADOR','VENDEDOR'],
      default: 'VENDEDOR'
    },
    email:{
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    username:{
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    status:{
      type: String,
      required: true,
      enum: ['ACTIVO','INACTIVO'],
      default: 'INACTIVO'
    },
    firstname:{
      type: String,
      required: true,
      trim: true,
    },
    lastname:{
      type: String,
      required: true,
      trim: true,
    },
    direction:{
      type: String,
      required: true,
      trim: true,
    },
    birthdate:{
      type: Date,
      required: true
    },
    phone:{
      type: String,
      required: true,
      trim: true,
    },
    password:{
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

//Metodo para no regresar el password
userSchema.methods.toJSON = function (){
  const {password, __v, ...user} = this.toObject();
  return user
}

export default model('Users', userSchema)