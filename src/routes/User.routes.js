const { Router } = require('express');
const { User, Show } = require('../../models');
const userRouter = User.Router();

//Get all users
userRouter.get('/users', async(req, res) => {
    const users = await User.findAll();
    res.json(users);
})

//Get one user
userRouter.get('/user/:id', async(req, res) => {
    const userFound = await User.findByPk(req.params.id);
    res.json(userFound);
})

//Get all shows watched by user
userRouter.get('user/:id', async(req,res) => {
    const userFound = await User.findByPk(req.params.id, {include: Show});
    res.json(userFound.Show);
})

//Update and add show if user watches show
userRouter.get('/users/:id')
module.exports = {
    userRouter
}