import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import {connectToDatabase}  from '../../../../untils/database'
import {User} from '../../../../models/userModels'
const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRECT_ID
            
        })
    ],
    callbacks:{
        async session({session}){
            const sessionUser=await User.findOne({
                email:session.user.email
            })
            session.user.id=sessionUser._id
            
           },
           async signIn({profile}){
            try{
               await connectToDatabase()
              //check if auser already exista
              const userExists=await User.findOne({email:profile.email})
        
              //if not createa new user
              if(!userExists){
                await User.create({
                    email:profile.email,
                    userName:profile.name.replace("","").toLowerCase(),
                    image:profile.picture
        
                })
              }
        
              return true
            }catch(error){
                console.log(error)
                return false
        
            }
        
           }
            

    }
   

})
export {handler as GET,handler as POST}