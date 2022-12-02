import Users from "../../models/Users/Users.js";
import bcrypt from 'bcrypt';
import generateJwt from "../../helpers/processJwt.js";

export const allUser = async (req, res) =>{
  const allUser = await Users.find();
  try {
    return res.status(200).json(allUser);
  } catch (error) {
    return res.status(500).json({message:  'No se tiene ningun usuario' })
  }
}

export const CreateUser = async (req, res) => {
  const {email} = req.body;
  const testEmail = await Users.findOne({email});
  if (testEmail) {
    return res.status(500).json({message: "No registrado, vuelva a intertar"});
  }

  const user = new Users(req.body)
  try {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(req.body.password, salt);
    user.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({message: 'Usuario no creado'});
  }
}

export const LoginUser = async (req,res)=>{
  const {username, password} = req.body;
  const user = await Users.findOne({username})
  if (!user) {
    return res.status(500).json({message: 'Revisa credenciales, usuario'});
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if(!validPassword){
    return res.status(500).json({message: 'Revisa credenciales, contraseña'});
  }
  //generate jason web token
  const token  = await generateJwt(user._id);
  return res.status(200).json({token, user})
}