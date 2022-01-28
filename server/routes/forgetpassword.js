const express = require('express');
const router = express.Router();
const User = require('../models/users'); 
const nodemailer = require("nodemailer");

router.post('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    const email = req.body.email;
 try { 
     const user = await User.find({email});
     nodemailer.createTestAccount((err,account)=>{
        const HtmlEmail = `
         <h3>Password</h3> 
         <li>${user.password}</li>    
         `
         let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: 'triston.abshire93@ethereal.email', // generated ethereal user
            pass: '9XTrsQ9Kvc89c8De66', // generated ethereal password
            },
        });
  
        let mailOption = { 
            from: `${email}`, // sender address
            to: "triston.abshire93@ethereal.email", // list of receivers
            subject: "azet ✔", // Subject line
            text: user.password, // plain text body  
            html: HtmlEmail, // html body  
        }  
        transporter.sendMail(mailOption,(err,info)=>{
            if(err){ 
               return console.log(err) 
            } 
            console.log('message sent..',info.message) 
            console.log('message URL..',nodemailer.getTestMessageUrl(info)) 
        })
     });
    res.json(user);   
 }catch(err) {
    res.status(500).json({message : err.message}); 
 }
})


module.exports = router 