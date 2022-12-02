import  {Router} from 'express';
import { allLog, byIDLog, createLog, updateLog, deleteLog } from '../controller/product/logProductController.js';
const logRouter = Router();

logRouter.get('/', (req, res)=>{
  res.send(
    {
      message: 'Pagina de log product'
    }
  )
});

logRouter.get('/log', allLog);
logRouter.get('/log/:id', byIDLog);
logRouter.post('/log/create', createLog);
logRouter.put('/log/:id',updateLog);
logRouter.delete('/log/:id',deleteLog);


export default logRouter;