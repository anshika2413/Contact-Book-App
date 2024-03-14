import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },

    lname:{
        type:String
    },

    email:{
        type:String
    },
    contact:{
        type:Number,
        required:true
        
    },

})

export default mongoose.model("User" , userSchema);