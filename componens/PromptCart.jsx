import React, { useState } from 'react'

const PromptCart = ({
key,
post,
handleTagClick
}) => {

  const [copied,setCopied]=useState("")

  //handleCopy()
  const handleCopy=()=>{
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(()=>{
      setCopied('')

    },3000)

  }
  
  console.log(post)
  return (

    <div className='prompt_cart'>
      <div className='flex justify-between items-start gap-5'>
       <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>

        <img style={{borderRadius:'50%'}} 
         src={post?.creator.image} 
         width={40}
         height={40}
         alt="img" 

        />
        <div className='flex flex-col'>
          <h3 className='font-satoshi font-semibold text-gray-900'>{post?.creator.userName}</h3>
          <p className='font-inter text-sm text-gray-500'>{post?.creator.email}</p>

        </div>
       </div>
       <div className='copy_btn' onClick={()=>{handleCopy()}}>
         <img style={{borderRadius:'5%'}}
         width={30}
          height={30}
         src={copied==post.prompt?(
          '/assets/images/tick.jpg'

         ):(
          '/assets/images/copy-1.png'

         )} alt="" />
       </div>
      </div>
      <p className='my-4 font-satoshi text-sm'>{post.prompt}</p>
      <p onClick={ ()=>handleTagClick&&handleTagClick(post.tag)} className='font-inter text-sm blue_gradient cursor-pointer'>#{post.tag}</p>
    </div>
  )
}

export default PromptCart