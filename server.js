// ES6 version code but node only understands ES5 version
// To convert from ES6 to ES5 use Babel
// npm i @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import cors from 'cors';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const PORT = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next();
});
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// app.get('/api/products/:id', async (req, res) => {
//     let productId = parseInt(req.params.id);
//     try {
//         const product = await data.products.find(x => x._id === productId);
//         if(product)
//             res.send(product);
//         else
//             res.status(404).send({msg: "Product Not Found."})

//     } catch (error) {
//         res.send(error);

//     }
// });

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});