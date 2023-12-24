const http = require('http')
const {readFileSync} = require('fs')
const homePage = readFileSync('./File/index.html')
const homeStyles = readFileSync('./File/style.css')
const homeLogic = readFileSync('./File/app.js')

const server = http.createServer((req,res)=>{
    const url = req.url
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url==='/app.js'){
        res.writeHead(400,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }

})

server.listen(2434)