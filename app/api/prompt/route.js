import {connectToDatabase} from '../../../untils/database';

import {Prompt} from '../../../models/prompt'

export const GET=async(req,res)=>{
    try{
        await connectToDatabase()
        const prompts=await Prompt.find({}).populate('creator')
       
     return new Response(JSON.stringify(prompts),{
        status:200
     })
    }catch(err){
        return new Response(JSON.stringify(err.message),{
            status:err.status
         })
        
    }
}