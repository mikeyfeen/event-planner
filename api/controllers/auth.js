const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {User} = require('../models');

const register = async (req, res, next) => {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).json({message: "Username and password are required"});
    }
    try {
        // const hashedPassword = await bcrypt.hash(password, 10);
         const user = new User({username, password: password});
         await user.save();
         res.json ({message: "User created successfully"});
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    const {username, password} = req.body;
    console.log("Logging in user with username: ", username, " and password: ", password)
    if(!username || !password) {
        return res.status(400).json({message: "Username and password are required"});
    }
    try {
        const user = await User.findOne({username});
        console.log("User found: ", user)
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }
        //const isMatch = await bcrypt.compare(password, hashedPassword);
        const isMatch = await user.comparePassword(password);
        console.log("Password match: ", isMatch)
        if (isMatch) {
            const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
            return res.json({token});
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {register, login};
