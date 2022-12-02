import { Router } from 'express'
import { CreateUser,LoginUser, allUser} from '../controller/user/userController.js'

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.send({
    message: 'Inicio Usuario'
  })
});
userRouter.get('/user', allUser);
userRouter.post('/create', CreateUser);
userRouter.post('/login', LoginUser);

export default userRouter;