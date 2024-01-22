// Khai báo module express để tạo web server
import express, { json } from 'express';
import * as dotenv from 'dotenv';
import {productRouter} from './routes/index.js';
import connectDB from './database.js';

dotenv.config();

// Khởi tạo 1 container cho web server
const app = express();
app.use(json()); // Add middleware để ứng dụng Express làm việc với JSON

// Định tuyến cho root URL
app.get('/', (req, res)=>{
    res.send("Welcome to NodeJS");
});

// Routing tới các router tương ứng
app.use('/products', productRouter);

// Khai báo port 
const port = process.env.PORT || 8080;

// Lắng nghe các request gửi tới Web server
app.listen(port, async()=>{
    connectDB();
    console.log(`Server running on: http://localhost:${port}`);
});