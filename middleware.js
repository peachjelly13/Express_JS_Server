const express = require('express')
const app = express()

// req => middleware => res as the name suggests middleware sits in the middle 

app.get('/',(req,res)=>{
    const url = req.url;
    const method = req.method;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    res.send('Home')
})
app.get('/about',(res,req)=>{
    res.send('About Page')
})
app.listen(5000,()=>{
    console.log('listening to port 5000')
})