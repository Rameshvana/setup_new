const express = require('express')
const app = express()
app.listen(5000, function(){console.log('Server is Stated')})

app.get('/', (req,res) => {
    res.send('Hello Ramesh Vanaparthi...')
})