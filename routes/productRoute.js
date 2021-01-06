import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

router.get("/", async (req, res) => {
const products = await Product.find({});
res.send(products);
});

router.post("/", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        countInStock: req.body.countInStock,
    });
    const newProduct = await product.save();
    if(newProduct) {
        return res
        .status(201)
        .send({ message: "New Product Created.", data: newProduct});
    }
    return res.status(500).send({ message: "Error in Creating Product."});
});

router.put("/:id", async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
            product.name = req.body.name;
            product.image = req.body.image;
            product.price = req.body.price;
            product.category = req.body.category;
            product.description = req.body.description;
            product.countInStock = req.body.countInStock;
            const updatedProduct = await product.save();
            if(updatedProduct) {
                return res
                .status(200)
                .send({ message: "Product Updated.", data: updatedProduct});
            }
            return res.status(500).send({ message: "Error in Updating Product."});
        };
    });

    router.delete('/:id', async (req, res) => {
        const deletedProduct = await Product.findById(req.params.id);
        if (deletedProduct) {
          await deletedProduct.remove();
          res.send({ message: 'Product Deleted' });
        } else {
          res.send('Error in Deletion.');
        }
      });

export default router;