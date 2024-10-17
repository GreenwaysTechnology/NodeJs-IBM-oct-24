const express = require('express')
const app = express()

//index
app.get('/', (req, res) => {
    res.end('Hello Express')
})
//Resource: Customer
app.get('/api/customer',(req,res)=>{
    res.end('Customer get')
})
app.post('/api/customer',(req,res)=>{
    res.end('Customer Post')
})
app.put('/api/customer',(req,res)=>{
    res.end('Customer Update')
})
app.delete('/api/customer',(req,res)=>{
    res.end('Customer Delete')
})


//start server
app.listen(3000, () => {
    console.log(`Express Web Server is running`)
})


