import { Router } from 'express';
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import tagRouter from './tags';


const router = Router();


router.use('/blogs', blogsRouter);
router.use('/blogtags', blogtagsRouter);
router.use('/tags', tagRouter);


export default router;