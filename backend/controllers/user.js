import User from "../models/user.js";
import userSchema from "../schemas/userSchema.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {

    try {

        const users = await User.findAll();
        if (!users)
         return res.status(400).send("Users not found");
        else
         return res.json(users);
       
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: error.message });
    }
   
};


export const createUser = async (req, res) => {

try {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({error: error.details.message})
    } else {
        const createdUser = await User.create(req.body);
        res.status(201).json({id:createdUser.id, username: createdUser.username, email: createdUser.email, message:"user was succesfully created"});
    }
} catch (error) {
    console.log(error);
    res.status(500).send("couldnt create")
}
};

export const userLogin = async (req, res) => {
    //get the user information from the request body
    const { email ,password} = req.body;
      try {
        //find the user by email or username
          const user = await User.findOne({ where: {email} });

          if (!user) {
              return res.status(400).json({error: "User does not exist"})
          } 
          
          const isMatch = user.password === password;
          if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
          }
         
          res.status(200).json({ message: 'Login successful'});
        } catch (error) {
            return res.status(500).json({ error: error.message });
          }
        };
     
    export const getUsername = async (req,res) => {
        const { email } = req.body.email;
    }