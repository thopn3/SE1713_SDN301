import mongoose, {Schema} from "mongoose";

// Product schema
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        unique: [true, 'Product name is not duplicate']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model("products", productSchema);
export default Product;