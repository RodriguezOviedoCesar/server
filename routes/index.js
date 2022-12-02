import  {Router} from 'express';
import userRouter from './User.routes.js';
import transmittierRouter from './transmittier.routes.js';
import supplierRouter from './supplier.routes.js';
import productRouter from './product.routes.js';
import customersRoute from './customer.routes.js';
import brandRouter from './brand.routes.js';
import categoryRouter from './category.routes.js';
import logRouter from './log.routes.js';
import orderRouter from './order.routes.js';
import orderListRouter from './orderLis.routes.js';
const router = Router();

router.get('/', (req, res) => {
  res.send({
    message: 'Inicio',
  })
});

router.use('/users', userRouter);
router.use('/transmittier', transmittierRouter);
router.use('/supplier', supplierRouter);
router.use('/products', productRouter);
router.use('/order', orderRouter);
router.use('/list', orderListRouter)
router.use('/customer', customersRoute);
router.use('/brand', brandRouter);
router.use('/category', categoryRouter);
router.use('/prolog', logRouter);

export default router;