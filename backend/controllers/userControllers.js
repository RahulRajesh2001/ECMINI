import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'

// login ---users
// api/v1/login
// method - post

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })

    if (user) {
      let passwordMatch = await bcrypt.compare(password, user.password)
      if (passwordMatch) {
        const token = generateToken({ userId: user._id })

        user.tokens = [token]
        res.status(201).json({ message: 'login successfull ..!' })
      } else {
        res.status(500).json({ message: 'Password or Email is incorrect' })
      }
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error occured when login..!', err })
  }
}

// register ---users
// api/v1/register
// method - post

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    // Password hashing
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    })
    if (!user) {
      res.status(500).json({ message: 'Registration failed ..!' })
    }
    //Jwt token generation
    const token = generateToken({ userId: user._id })
    user.tokens = [token]
    await user.save()
    res.status(201).json({ message: 'Register successfull ..' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error occured when registration..!' })
  }
}
