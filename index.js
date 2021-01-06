const express = require('express')
const PORT = 5000
const path = require('path')
const apiRoute = require('./routes/api')

const app = express()

app.use('/api', apiRoute )
app.use('/',express.static(path.join(__dirname, 'public')))



app.listen(PORT, ()=>{
    console.log("Server rodano na porta", PORT)
    console.log("a")
})

