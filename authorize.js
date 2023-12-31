//this is how middleware functions are written using req,res,next
const authorise = (req,res,next)=>{
    const{user} = req;
    if(user==='raghav'){
        req.user = {name:'raghav',id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
   
}

module.exports = authorise

//we can set up our own middleware or use express express provides quite a few middleware 
//functions built in middleware functions