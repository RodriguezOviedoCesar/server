import { Router } from "express";

const transmittierRouter = Router();

transmittierRouter.get('/', (req, res)=>{
  res.send({
    message: 'inicio transmittier!'
  });
})


export default transmittierRouter