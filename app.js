const express = require('express');
const hbs = require('hbs');

var app  = express();

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('toUC',(text)=>{
    console.log('inside helper UC');
    return text.toUpperCase();
});

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine',hbs);
app.use(express.static(__dirname+'/resources'));

app.get('/',(req,res)=>{
    res.render('home/home.hbs',{
        pageTitle:'Home'
       
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'Internal Server Error'
    });
});

app.listen(3000);