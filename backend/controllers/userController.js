// const expressAsyncHandler = require("express-async-handler");
// const User = require('../models/userModel');

// @desc Register New User
// @route Post /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}


// @desc Auth User
// @route Post /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}



// @desc Get User Data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
    res.json({message: 'User data display'})
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}