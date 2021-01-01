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

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});