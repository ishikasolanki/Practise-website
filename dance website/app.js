const express = require("express");
const path = require("path");
const port = 8000;
const fs = require("fs");
const app = express();

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('viewengine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})
app.get('contactus',(req,res)=>{
    res.status(200).render('views/contactus.pug');
})


app.listen(port,()=>{
    console.log(`the application has started on port ${port}`);
})