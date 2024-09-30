import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;

  try {

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists!' });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/12?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/84?username=${username}`;


    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    });

    // Save user to the database
    await newUser.save();

    // Generate JWT token and set cookie
    await generateTokenAndSetCookie(newUser._id, res);

    // Send response
    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      _id: newUser._id,
      fullName: newUser.fullName,
      gender: newUser.gender,
      profilePic: newUser.profilePic,
    });

  } catch (error) {
    console.error('Error during signup:', error);
    next(error); 
  }
};


  export const login = (req, res) => {
    console.log('Login');
    res.send('login-user');
  };
  
  export const logout = (req, res) => {
    console.log('Logout');
    res.send('logout-user');
  };
  