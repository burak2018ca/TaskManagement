const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register New User
// @route Post /api/users
// @access Public
const registerUser = asyncHandler( async(req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please add all fields')
    }

    //Check if user exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('This user already exists')
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create a user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    //Check and Confirm if user created
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})


// @desc Auth User
// @route Post /api/users/login
// @access Public
const loginUser = asyncHandler( async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    
    if(user && await(bcrypt.compare(password, user.password))){

        res.json({
            _id: user.id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id),
        })
        console.log(`${user.name} logged in `)
    }
    else{
        res.status(400)
        throw new Error('Invalid login info')
    }
    
})



// @desc Get User Data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler( async(req, res) => {
    
    res.status(200).json(req.user)
})


// Generate a Token
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn: '30d'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}