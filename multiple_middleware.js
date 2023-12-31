const express = require('express')
const app = express()
const logger = require('./logger')
const authorise = require('./authorize')
//Here we wanted to include two middleware fucntions together and this is how we do it 

// here you get the response in accordance with the order it is written in
app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/people',[logger,authorise],(req,res)=>{
    console.log(req.user)
    res.send('people')
})

app.listen(5000,()=>{
    console.log('listening')
})