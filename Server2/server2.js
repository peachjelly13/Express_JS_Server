const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log('User Hit the resource')
    res.status(200).send('Home Page')
})
app.get('/about',(req,res)=>{
    console.log('This is The about Page')
    res.status(200).send('About Page')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(5000,()=>{
    console.log('Server listening to port 5000....')
})