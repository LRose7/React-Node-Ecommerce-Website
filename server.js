// ES6 version code but node only understands ES5 version
// To convert from ES6 to ES5 use Babel
// npm i @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
import express from 'express';
import data from './data';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});