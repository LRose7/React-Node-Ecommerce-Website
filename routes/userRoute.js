import express from "express";
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();

router.post("/signin", async (req, res) => {
    try {
        const signinUser = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if(signinUser) {
            res.send({
               _id: signinUser.id,
               name: signinUser.name,
               email: signinUser.email,
               isAdmin: signinUser.isAdmin,
               token: getToken(signinUser),
            });
            res.status(200).send({ message: 'User successfully signed in '});
        } else {
            res.status(401).send({ message: 'Invalid Email or Password.' });
        }
    } catch (err) {
        console.error(err.message);
    }
});

router.post("/register", async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        const newUser = await user.save();
           if(newUser) {
            res.send({
                _id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: getToken(newUser),
             });
             res.status(200).send({ message: 'User successfully registered '});
    } else {
        res.status(401).send({ message: 'Invalid User Data.' });
    }
    } catch (err) {
        console.error(err.message);
    }
});

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: 'Test',
            email: 'test@gmail.com',
            password: 'testing123',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);

    } catch (error) {
        res.send({ msg: error.message});
    }
});

export default router;