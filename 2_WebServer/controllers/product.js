
import {productDAO} from '../dao/index.js';

// Dữ liệu giả lập được trả về từ DB
const products = [
    {'id': 1, 'name': 'Product 1', 'price': 2000},
    {'id': 2, 'name': 'Product 2', 'price': 1500},
    {'id': 3, 'name': 'Product 3', 'price': 3000}
];

// GET: /products
const getAllProducts = async (req, res) => {
    try{
        res.status(200).json({
            "message": "Load data success",
            "data": products
        });
    }catch(error){
        res.status(500).json({
            message: error.toString()
        });
    }
};

// POST: /products
const createProduct = async (req, res) => {
    try {
        // Get data object from Body of Request
        const {
            name,
            price,
            description,
            category
        } = req.body;
        
        const result = await productDAO.create({name, price, description,category});
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

export default{
    getAllProducts,
    createProduct
}