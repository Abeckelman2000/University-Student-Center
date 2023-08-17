const express = require('express')

const getTokenStatus = async (req, res) =>{
    res.status(200).json({isValid:true})
}

module.exports = {getTokenStatus}