"use client"
import React, { useEffect, useState } from 'react'
import PromptCart from './PromptCart';

const PromptCardList=({data,handleTagClick})=>{
  return(
    <div className='mt-16 prompt_layout'>
      {data?.map((post)=>{
      return  <PromptCart
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        
        />
      })}

    </div>
  )
}

const Feed = () => {

  const [searchText,setSearchText]=useState('');
 const [posts,setPosts]=useState([])

  //handleSearchChange
  const handleSearchChange=()=>{

  }

  useEffect(()=>{
    const fetchpost=async()=>{
      const response=await fetch('/api/prompt');
      const data=await response.json()
      console.log(data)
      setPosts(data)
    }
    fetchpost()

  },[])

  return (
   <section className='feed'>
     <from className='relative w-full flex-center' >
       <input type="text"
         placeholder='Search for a tag or a userName'
         value={searchText}
         onChange={handleSearchChange}
         required
         className='search_input peer'
        />
     </from>

     <PromptCardList
      data={posts}
      handleTagClick={()=>{}}
     
     />
   </section>
  )
}

export default Feed