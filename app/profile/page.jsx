"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React,{useState,useEffect} from 'react'

import Profial from '../../componens/Profial';

const Profile = () => {

    const {data:session}=useSession();
    const [post,setPosts]=useState([])

    useEffect(()=>{
        const fetchpost=async()=>{

          const response=await fetch(`/api/users/66a2358fd43b5d41aeb653b0/posts`);

          const data=await response.json()
          console.log(data)
          setPosts(data)
        }

        if(session?.user._id)   fetchpost()
      
    
    },[])

    const handleDelete=()=>{

    }

    const handleEdite=()=>{

    }

  return (
    <Profial
     name='My'
     desc="welcome to your personalized profile page"
     data={post}
     handleDelete={handleDelete}
     handleEdite={handleEdite}
    />
  )
}

export default Profile