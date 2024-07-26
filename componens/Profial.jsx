import React from 'react'
import PromptCart from '../componens/PromptCart'

const Profial = ({
  name,
  data,
  handleDelete,
  handleEdite,
  desc
}) => {
  return (
    <section className='w-full'>
       <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name}</span> 
         Profile</h1>
         <p className='desc text-left'>{desc}</p>
         <div className='mt-16 prompt_layout'>
          {data?.map((post)=>{
           return  <PromptCart
           key={post._id}
           post={post}
           handleTagClick={handleTagClick}
        
           />
          })}

         </div>
    </section>
  )
}

export default Profial