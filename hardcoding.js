const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>HomePage</h1><a href="/api/products/1">Products</a>')
})
//Another variation should not be written in the same code
//app.get('/',(req,res)={
    //res.send('<h1>HomePage</h1><a href="/api/products">Products</a>')

//})
app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const{id,name}=product;
        return{id,name}

    })
    res.json(newProduct)
})
app.get('/api/products/1',(req,res)=>{
    const singleProduct = products.find((product)=>product.id===1)
    res.json(singleProduct)
})
app.listen(5000,()=>{
    console.log('server listening to port 5000')
})