const express = require('express');
const router = express.Router();
const User = require('../models/users'); 

router.post('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    const email = req.body.email;
 try { 
    const user = await User.find({email});  
    res.json(user);   
 }catch(err) {
    res.status(500).json({message : err.message});
 }
})

module.exports = router 