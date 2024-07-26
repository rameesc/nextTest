import Link from 'next/link'
import React from 'react'

const Form = ({
type,
post,
setpost,
submitting,
handleSumbite
}) => {


  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text_left'>
        <span className='blue_gradient'>{type} post</span>
      </h1>
      <p>{type} and shareamazing prompts with the world, and let your imagination run
        wild with any AI powered platform.
      </p>
      <form action="" onSubmit={handleSumbite}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 
      glassmorphism'
      >
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>

            Your AI Prompt</span>
            <textarea 
           value={post.prompt}
           placeholder='write your prompt here...'
           required
           className='form_textarea'
           onChange={(e)=>setpost({...post,prompt:e.target.value})}
         />
        </label>
       
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>

          Tag
          <span className='fornt-normal'>(#product, #webdevelepment, #idea)</span>
          </span>
            <textarea 
           value={post.tag}
           placeholder='write your prompt here...'
           required
           className='form_input'
           onChange={(e)=>setpost({...post,tag:e.target.value})}
         />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className='text-gray-500 text-sm'>
           Cancel
          </Link>
          <button
         
           type="submit"
           disabled={submitting}
           className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting?`${type}...`:type}

          </button>

        </div>
       

      </form>
    </section>
  )
}

export default Form