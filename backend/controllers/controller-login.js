const bcrypt = require('bcrypt')
const express = require('express')
const {getStudents} = require('../utils/database')
const {generateToken, authenticateToken} = require('../utils/JWT')

let listStudents = null


const getLogin = async (req, res)=>{
  listStudents = await getStudents()
  res.json(listStudents)

}

const postLogin = async (req, res) =>{
  listStudents = await getStudents((err, results)=>{
    if(err){
      console.log(err)
    }
  })

  // empty input fields
  if(!req.body.username || !req.body.password){
    return res.status(401).send("Invalid credentials or account does not exist")
  }

  const user = listStudents.find(user => user.username === req.body.username)
  if(user == null){
    return res.status(401).send("Invalid credentials or account does not exist")
  }
  else{
      console.log('User exists in the database, continuing verification...')

      try{
        const passwordMatch = await bcrypt.compare(req.body.password, user.password)
        if(!passwordMatch){
          return res.status(401).send("Invalid credentials")
        }
    
        //serializing user with JSON webtokens
        const accessToken = generateToken({username: user.username})
        res.json({
          username: user.username,
          password: user.password,
          FirstName: user.FirstName,
          LastName: user.LastName,
          studentID: user.studentID,
          accessToken: accessToken
        })
      }
      catch{
        res.status(500).send('Internal server error')    // status 500: Internal server error
      }
  }

  console.log(user)

   

}




module.exports = {
  getLogin,
  postLogin
}