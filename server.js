// DEPENDENCIES
const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Previous SEQUELIZE CONNECTION below
//const sequelize = new Sequelize(process.env.PG_URI)

//Previous try/catch statement below
/*try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}*/


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)




// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})