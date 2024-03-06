import express from 'express';
import Products from '../models/product.js';
import createError from 'http-errors';
import Categories from '../models/category.js';

const productRouter = express.Router();

// GET: / -> Return all products
productRouter.get("/", async (req, res, next)=>{
    try {
        const products = await Products.find({}).populate('category').exec();
        res.send(products);
    } catch (error) {
        next(error);
    }
});

// GET: /:id -> Get product by Id
productRouter.get("/:id", async (req, res, next)=>{
    try {
        const id = req.params.id;
        const product = await Products.findOne({_id:id}).populate('category').exec();
        res.send(product);
    } catch (error) {
        next(error);
    }
})

// POST: / -> Create new product
productRouter.post("/", async (req, res, next)=>{
    try {
        const {name, price, description, images, comments, category} = req.body;
        // If name not exists.
        if(!name)
            throw createError.BadRequest();
        // Check duplicate value of name
        const existProduct = await Products.findOne({name:name}).exec();
        if(existProduct)
            throw createError.Conflict(`${name} already existing.`);

        const savedProduct = await Products.create({name, price, description, images, comments, category});
        res.send(savedProduct);
    } catch (error) {
        next(error);
    }
})

export default productRouter;