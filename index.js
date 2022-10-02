
require('custom-env').env()


const express = require('express')
const app = express()

let port =   process.env.PORT || 3000 


app.get('/', (req,res)=>{
    console.log(` Hello World ..!`)
    res.send(` Hello World ..!`)    
})


app.listen(port,()=>{
    return console.log(`server is running on server http://localhost:${port}`)
})
