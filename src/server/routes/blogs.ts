import * as express from 'express';
import DB from '../db';


const router = express.Router();



router.get('/', async (req, res) => {
   try {
    let blogs: any = await DB.Blogs.all();
    res.json(blogs);
   } catch (error) {
       console.log(error);
       res.sendStatus(500).json("This code ain't workin");
   }
})

router.get('/:id', async (req, res) => {
    try {
        let [blog]: any = await DB.Blogs.one(req.params.id);
        res.json(blog);
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res) => {
    try {
        let result = await DB.Blogs.insert(req.body.title, req.body.content, req.body.authorid);
        res.json(result);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let result = await DB.Blogs.destroy(req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
})


router.put('/:id', async (req, res) => {
    try {
        let result = await DB.Blogs.edit(req.body.title, req.body.content, req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
})

export default router;