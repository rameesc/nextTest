'use client'
import { useSession } from 'next-auth/react'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Form from './../../componens/Form';


const CreatePost = () => {
  const {data:session}=useSession();
   
  console.log(useSession())
  const [submitting,setSubmitting]=useState(false)
  const [post,setpost]=useState({
    prompt:'',
    tag:''
  })
  const createPromt=async(e)=>{
    e.preventDefault();
    setSubmitting(true)

    try{
      const response=await fetch('/api/prompt/new',{
        method:'POST',
        body:JSON.stringify({
          prompt:post.prompt,
          userId:'66a2358fd43b5d41aeb653b0',//session?.user.id
          tag:post.tag

        })
      })
      console.log(response)
      if(response.ok){
       router.push('/')
      }

    }catch(err){
      console.log(err)

    }finally{
      setSubmitting(false)
    }

  }
  return (
    <Form
      type='Create'
      post={post}
      setpost={setpost}
      submitting={submitting}
      handleSumbite={createPromt}
    
    />
  )
}

export default CreatePost