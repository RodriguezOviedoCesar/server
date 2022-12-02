import  { Router} from 'express';
import { allCategory,byIDCategory, createCategory, updateCategory, deleteCategory } from '../controller/product/categoryProductController.js';


const categoryRouter = Router();

categoryRouter.get('/', (req, res)=>{
  res.send(
    {
      message: 'Pagina categoria'
    }
  );
});

categoryRouter.get('/cat', allCategory);
categoryRouter.post('/cat/create', createCategory);
categoryRouter.get('/cat/:id', byIDCategory);
categoryRouter.put('/cat/:id', updateCategory);
categoryRouter.delete('/cat/:id', deleteCategory);

export default categoryRouter;