const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const sequelize = require('./util/db')
const routes = require('./routes/product')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', routes)
const port = process.env.port || 3000

sequelize.sync().then(result =>{
    //console.log(result)
    app.listen(port, () => {
        console.log('Server Running on port 3000')
    })
})
.catch(err =>{
    console.log(err)
})














































