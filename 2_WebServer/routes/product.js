import express from 'express';
import {productController} from '../controllers/index.js';

const productRouter = express.Router();

// GET: Fetch all Products
productRouter.get('/', productController.getAllProducts);

// GET: Fetch Product by Id
productRouter.get("/:id", async (req, res) => {
    res.send(`Product detail by Id: ${req.params.id}`);
});

// POST: Create a new Product
productRouter.post('/', productController.createProduct);


export default productRouter;