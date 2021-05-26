//Logic for signing in and sign up

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signin = async (req, res) => {
  const {email, password} = req.body;

  try {
    const exisitingUser = await User.findOne ({ email }); //Finding the user in the database
    if (!exisitingUser) return res.status(404).json({ message: "User doesn't exist"});

//Compares the hash password which is why we use bcrypt
    const isPasswordCorrect = await bcrypt.compare(password, exisitingUser.password);

    if (!isPasswordCorrect) return rs.status(400).json({ message: "Invalid Passowrd"});
    //Our jwt token will expire within an hour
    const token = jwt.sign({ email: exisitingUser.email, id:exisitingUser._id}, 'test', { expiresIn: "1hr"});

    res.status(200).json({ result: exisitingUser, token });
  }catch {
    res.status(500).json({ message: "Something Went Wrong"});
  }
}

export const signup = async (req, res) => {

  //Destructing the objects sent over
  const { email, password, firstName, lastName } = req.body;

   try {
     const exisitingUser = await User.findOne({ email });

     if (exisitingUser) return res.status(400).json({ message: "User already exists" });
     if(password != confirmPassword) return res.status(400).json({ message: "Passswords don't match"});
     const hashedPassword = await bcrypt.hash(password, 12); //12 is salt which is the level of difficulty of password

     const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

     const token = jwt.sign( { email: result.email, id: result._id }, 'test', { expiresIn: "1h" } );

     res.status(200).json({ result, token }); //send user and token
   } catch (error) {
     res.status(500).json({ message: "Something went wrong" });

     console.log(error);
   }
 };
