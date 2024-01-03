//post method is used to insert data

const express = require('express')
const app = express()
const {people} = require('./data') // we use {people}  to only extract people form data
//this {} is used to extract a specific part

app.use(express.static('./methods')) //this helps us load our frontend and then we can see it while running the backend
app.use(express.urlencoded({extende:false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess:true,data:people})
})

app.post('/login',(req,res)=>{  //This is the method used when we are getting data 
    const {name} = req.body;
    if(name){
        return res.status(200).send(`welcome ${name}`)

    }
    else{
        res.status(401).send('please provide credentials')
    }

})

app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'Please add a valid value'});
    }
    res.status(201).send({success:true,person:name})
})
app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).send({success:true,data:[...people,name]})
})
app.listen(5000,()=>{
    console.log('listening.')
})
//Post method is for inserting the data for example when user puts a name value then
//What happens
//The express.static() function is a built-in middleware function in Express. It serves static files and is based on serve-static.