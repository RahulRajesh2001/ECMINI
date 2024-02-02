import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import {tokenGeneration} from '../utils/jwtUtil.js'

// Login - users
// api/v1/login
// method - post
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      let passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const { name, email, role } = user;
            // Jwt token generation
    const token = tokenGeneration({ userId: user._id });
        res.status(201).json({ message: 'Login successful!', user: { name, email, role,token }});
      } else {
        res.status(500).json({ message: 'Password or Email is incorrect'});
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error occurred when login!', err });
  }
};


// Register - users
// api/v1/register
// method - post
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Password hashing
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    if (!user) {
      res.status(500).json({ message: 'Registration failed!' });
    }

    res.status(201).json({ message: 'Register successful..',user: { name, email, role }});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error occurred when registration!', err });
  }
};