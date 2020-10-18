'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const api = express.Router()
const 

// Example route
/*app.get('/hello/:name', (req, res) => {
    res.send({ message: `Hello ${req.params.name}!`})
})*/

api.get('/product', ProductCtrl.getProducts)

api.get('/product/:productId', ProductCtrl.getProduct)

api.post('/product', ProductCtrl.saveProduct)

api.put('/product/:productId', ProductCtrl.updateProduct)

api.delete('/product/:productId', ProductCtrl.deleteProduct)

api.get('/private', auth.isAuth, function(req, res){
    res.status(200).send({mesagge: 'Tienes Acceso'})
})

module.exports = api