const express = require('express');
const router = express.Router();
const User = require('../models/users');
//Getting all 
router.get('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
 try {
    const user = await User.find();
    res.json(user);
 }catch(err) {
    res.status(500).json({message : err.message});
 }
})
//Getting one 
router.get('/:id', getUser , (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    res.json(res.user);
})
//Creating one
router.post('/addNew', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*") 
    const user = new User({
        firstname : req.body.firstname, 
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password, 
        phone : req.body.phone,
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser);
    }catch(err) {
        res.status(400).json({message : err.message});
    }
})
//Updating one
router.patch('/:id',getUser , async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    if(req.body.firstName != null){
        res.user.firstName = req.body.firstName;
    } 
    if(req.body.lastName != null){
        res.user.lastName = req.body.lastName;
    } 
    if(req.body.email != null){
        res.user.email = req.body.email;
    } 
    if(req.body.password != null){
        res.user.password = req.body.password;
    } 

    try{
        const updatedUser = await res.user.save();
        res.json(updatedUser)
    }catch(err) {
        res.status(400).json({message : err.message})
    }
})
//Deleting one
router.delete('/:id',getUser , async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    try{
        await res.user.remove();
        res.json({message : 'Deleted user'})
    }catch(err) {
        res.status(500).json({message: err.message})
    }
})

async function getUser(req, res, next) {
     res.setHeader("Access-Control-Allow-Origin","*")
    let user;
    try {
     user = await User.findById(req.params.id)
     if(user == null){
         return res.status(404).json({message: 'Cannot find user'})
     }   
    }catch (err){
        return res.status(500).json({message: err.message})
    }
    res.user = user;
    next();
}

module.exports = router
