const express = require('express')
const app = express();
const{products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.get('/api/v1/query',(req,res)=>{
   
    const{search,limit} = req.query
    let sortedProducts = [...products] //imported products , this is like a new variable for accessing products so that we can perform our operations  here
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        res.status(200).json({sucess:true,data:[]})

    }
    res.status(200).json(sortedProducts)

   

})

app.listen(5000,()=>{
    console.log('listening')
})

//express is a bunch of middleware functions bunched together 
// middleware is the heart and soul of express
// an url in the borowser looks like /api/v1/query?search=A&limit=1