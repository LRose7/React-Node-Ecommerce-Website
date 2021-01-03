// ES6 version code but node only understands ES5 version
// To convert from ES6 to ES5 use Babel
// npm i @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
import express from 'express';
import data from './data';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next();
});

app.get('/api/products/:id', async (req, res) => {
    let productId = parseInt(req.params.id);
    try {
        const product = await data.products.find(x => x._id === productId);
        if(product)
            res.send(product);
        else
            res.status(404).send({msg: "Product Not Found."})

    } catch (error) {
        res.send(error);

    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});