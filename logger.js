//putting our middleware function in a separate file

const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method,url,time)
    next()
    //res.send('Testing') // you can do this and send youur own data or pass it on to the next get method

}

module.exports = logger