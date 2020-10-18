'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')


mongoose.connect(config.db, (err, res) =>{
    if (err) {
        console.log(`Error to conection with database .X. Error: ${err}`)
    } else {
        console.log('Connection to the database established ...')
    }
    
    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})

