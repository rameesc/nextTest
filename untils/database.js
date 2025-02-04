import mongoose from 'mongoose';

let isConnected=false;

export const connectToDatabase=async()=>{
    mongoose.set('strictQuery',true)

    if(isConnected){
        console.log('mongodb is already connected')
        return
    }

    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:'next',
            useUnifiedTopology:true,
            useNewUrlParser:true

        })
        isConnected=true

      console.log('mongodh connected')
    }catch(err){
        console.log(err)
    }

}