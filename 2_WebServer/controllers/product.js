
import {productDAO} from '../dao/index.js';


// GET: /products
const getAllProducts = async (req, res) => {
    try{
        res.status(200).json(await productDAO.getAllProducts());
    }catch(error){
        res.status(500).json({
            message: error.toString()
        });
    }
};

// GET: /products/:id
const getProductById = async (req, res) => {
    try{
        res.status(200).json(await productDAO.getProductById(req.params.id));
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
    createProduct,
    getProductById
}