const express = require('express')

const app = express()


//index
app.get('/', (req, res) => {
    res.end('Hello Express')
})
//url
app.get('/hello',(req,res)=>{
    res.end('hello express')
})



//start server
app.listen(3000, () => {
    console.log(`Express Web Server is running`)
})


