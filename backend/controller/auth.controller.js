import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

// Sign up a new user
export const signup = async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists!' });
    }

    // Hash the password
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    // Generate profile picture URL
    const boyProfilePic = `https://avatar.iran.liara.run/public/12?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/84?username=${username}`;

    // Create a new user object
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

// Log in an existing user
export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const validUser = await User.findOne({ username });
    const validPassword = bcryptjs.compareSync(password, validUser?.password || '');

    // Check credentials
    if (!validUser || !validPassword) {
      return res.status(400).json({ error: 'Wrong credentials!' });
    }

    // Generate JWT token and set cookie
    await generateTokenAndSetCookie(validUser._id, res);

    // Send response
    res.status(200).json({
      success: true,
      message: 'User logged in successfully!',
      _id: validUser._id,
      fullName: validUser.fullName,
      gender: validUser.gender,
      profilePic: validUser.profilePic,
    });

  } catch (error) {
    console.log('Error in login controller', error);
    next(error);
  }
};

// Log out user
export const logout = (req, res, next) => {
  try {
    res.clearCookie('jwt').status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error during logout:', error);
    next(error);
  }
};
