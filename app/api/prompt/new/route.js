import {connectToDatabase} from '../../../../untils/database';
import {Prompt} from '../../../../models/prompt';

export const POST=async(req,res)=>{
    const {userId,prompt,tag}=await req.json()
    console.log(userId)
    try{
        await connectToDatabase();
        const newPrompt=await Prompt({
            creator:userId,
            prompt,
            tag
        })

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt),{status:201})

    }catch(err){
        return new Response(err.message)

    }
}