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


// U: Update Product by ObjectId
// D: ....

export default {
    create
}