var express=require('express');
var burgers = require('../models/burger');
var router = express.Router();

router.get('/getAll',(req,res)=>{
    burgers.getAllBurgers(function(burgers){
        console.log(burgers[0].burger_name);
        console.log(burgers);
        res.render('index',burgers);
    })
})

router.get('/',(req,res)=>{
    res.redirect('/getAll');
})

router.post('/update/:id',(req,res)=>{
    var id = req.params.id;
    burgers.updateDevoured(id);
    console.log("Burger devoured");
    res.redirect('/getAll');
})

router.post('/insert/:name',(req,res)=>{
    var name = req.params.name;
    burgers.createNewBurger(name);
    console.log("Burger entered");
    res.redirect('/getAll');
})

module.exports=router;