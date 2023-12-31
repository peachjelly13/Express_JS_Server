const express = require('express')
const app = express()
const logger = require('./logger')
app.use('/api',logger)

//here this is going to be applied to everything that comes after /api
app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/about',(req,res)=>{
    res.send('about')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/people',(req,res)=>{
    res.send('people')
})
app.listen(5000,()=>{
    console.log('listening')
})

//what happens here is that the logger middleware function is only called when the url 
//looks like /api - only these ones are going to be included 
// /about - this doesnt call the logger fucntion neither does / 
//But when you call /api/products this will call the logger fucntion 
// this is what app.use('/',logger) really means