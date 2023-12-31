const express = require('express')
const app = express()
const logger = require('./logger')
app.use(logger) // we can write this rather than inseerting logger middleware everywhere

// req => middleware => res as the name suggests middleware sits in the middle 
//middleware is a function 
//we have to pass the middleware express supllies them 
//when you use a middleware you must pass it on to the next middleware unless you terminating
//the whole cycle by sending back the response

//In the middleware you can do two things eitheir pass your own thing or you can move to
//The next middleware function which is done using next
//if in the middleware function you write res.send('Some Value') you sending your own response

//you can add middle wasre function manually as seen here but the more routes the bigger
//issue to add them manually
//app.get('/',logger,(req,res)=>{  //inserting middlewarre here
   
   // res.send('Home')
//)
app.get('/',(req,res)=>{
    res.send('home')
})
app.get('/about',(req,res)=>{
    res.send('About Page')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/people',(req,res)=>{
    res.send('people')
})
app.listen(5000,()=>{
    console.log('listening to port 5000')
})
