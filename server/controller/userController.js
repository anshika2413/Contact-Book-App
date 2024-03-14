import User from "../models/userModel";

export const create = async(req,res)=>{
    try{
        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg:"User data note found"})
        }

        const savedData = await userData.save();
        res.status(200).json(savedData);
     }
     catch (error){
        res.status(500).json({error:error});
     }
}

export const getAll = async(req,res)=>{
    try{

        const userData = await User.find();
        if(!userData)
        {
            return res.status(404).json({msg:"User data not found"});

        }

        res.status(200).json(userData);
    }
    catch(error){
        res.status(500).json({error: error});
    }
}


export const getOne = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist)
        {
            return res.status(404).json({msg:"User not found"})
        }
        res.status(200).json(userExist);
    }
    catch(error){
        res.status(500).json({error: error});
    }
}

export const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist)
        {
            return res.status(401).json({msg:"User not found"})
        }
        res.status(200).json(userExist);
        
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedData);
    }

   
    catch(error){
        res.status(500).json({error: error});
    }
}

export const deleteUser = async(res,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist)
        {
            return res.status(401).json({msg:"User not found"})
        }
        res.status(200).json(userExist);

        await User.findByIdAndDelete(id);
        res.send(200).json({msg:"User deleted successfully"});
    } catch (error) {
        res.status(500).json({error: error});   
    }
}