const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const login = require('./routes/router-login')
const createAccount = require('./routes/router-create-account')
const profile = require(`./routes/router-profile`)
const cors = require('cors')



// static assets
app.use(express.static(`./methods-public`))

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse JSONs
app.use(express.json())
// allows for client to have different origin(port)
app.use(cors({
  origin:"http://localhost:3000"
  }
))





// Define Routes
app.use(`/api/login`, login)
app.use(`/api/createaccount`, createAccount)
app.use(`/profile`, profile)


app.listen(3001, ()=>{
  console.log('Server listening on port 3001...')
})