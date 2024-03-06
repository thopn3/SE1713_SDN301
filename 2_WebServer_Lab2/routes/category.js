import express from 'express';
import Categories from '../models/category.js';

const CategoryRouter = express.Router();

CategoryRouter.get("/", async (req, res, next)=>{
    try {
        res.send(await Categories.find({}).exec());
    } catch (error) {
        next(error);
    }
});

export default CategoryRouter;