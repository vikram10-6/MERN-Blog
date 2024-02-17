import User from '../models/user.model.js'

export const test = (req,resp)=>{
    resp.json({message: 'API is working'})
}