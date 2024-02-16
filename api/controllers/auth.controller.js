import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
 
export const signup =async (req,resp) =>{
    const {username,email,password} =req.body

    if (
        !username ||
        !email ||
        !password ||
        username === '' ||
        email === '' ||
        password === ''
      ) {
        return resp.status(400).json({message: 'All feilds are required'})
    }
    
    const hashedPasword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password : hashedPasword,
    })

   try {
    await newUser.save()
    resp.json('Signup successful')
   } catch (error) {
     resp.status(500).json({message:error.message})
   }
}