'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Example route
/*app.get('/hello/:name', (req, res) => {
    res.send({ message: `Hello ${req.params.name}!`})
})*/

app.get('/api/product', (req, res) => {
    res.status(200).send({products: []})
})

app.get('/api/product/:productId', (req, res) => {
    
})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: "The product has been revived"})
})

app.put('/api/product/:productId', (req, res) => {
    
})

app.delete('/api/product/:productId', (req, res) => {
    
})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) =>{
    if (err) {
        console.log(`Error to conection with database .X. Error: ${err}`)
    }
    console.log('Connection to the database established ...')
    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})

