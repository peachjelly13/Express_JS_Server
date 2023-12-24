const express = require('express')
const app = express()

const path = require('path')
app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./File/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})
app.listen(5000,()=>{
    console.log('listening to port 5000')
})