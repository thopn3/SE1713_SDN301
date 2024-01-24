import Product from "../models/product.js";

// C: Create a new Product
const create = async ({name, price, description, category}) => {
    try {
        const existProduct = await Product.findOne({name}).exec();
        if(existProduct!=null)
            throw new Error('This product name already exist');

        const newProduct = await Product.create({name, price, description, category});
        return newProduct._doc;
    } catch (error) {
        throw new Error(error.toString());
    }
}

// R: Read all Products
const getAllProducts = async () => {
    try {
        return await Product.find({}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

// R: Read a single Product
const getProductById = async (id) => {
    try {
        return await Product.findOne({_id: id}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}


// U: Update Product by ObjectId
// D: ....

export default {
    create,
    getAllProducts,
    getProductById
}