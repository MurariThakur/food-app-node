const UserModel = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    try {
        const { userName, password,email, phone, address, userType } = req.body;
        //validation can be added here
        if(!userName || !password || !email || !phone || !address ){
            return res.status(400).json({ error: 'All fields are required' });
        }
        //check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({ userName, password: hashedPassword, email, phone, address });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    user.password = undefined;

    res.json({
      message: 'Login successful',
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    registerUser,
    loginUser
};