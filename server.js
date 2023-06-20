const express = require('express')
const cors = require('cors')
const port = 3000

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(cors())

const arr = [];

app.get('/json', (req, res) => {
    const stringarr = JSON.stringify(arr);
    res.send(stringarr)
})

// app.get('/', (req, res) => {
//     const stringarr = JSON.stringify(arr);
//     res.status(200);
//     res.send(stringarr);
// })

app.post('/submit', (req, res) => {
    console.log(req.body)
    const data = req.body
    arr.push(data);
    console.log(data)
    res.status(200).end();
})


app.listen(port, () => {
    
})