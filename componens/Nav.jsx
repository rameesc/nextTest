'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { signIn,signOut,useSession,getProviders } from 'next-auth/react';


const Nav = () => {
    const {data:session}=useSession();
    const [providers,setProviders]=useState(null);

    useEffect(()=>{

        const setProvider=async()=>{
            const response=await getProviders();
            setProviders(response)
            
        }
        setProvider()
       

    },[])
  return (
    <nav className='flex-between flex-row w-full mb-16'>
        <Link href='/' className='flex gap-2 flex-center'>
        <Image 
        src="/assets/images/1.jpg"
        alt='img'
        width={30}
        height={30}
        className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:hidden flex relative'>
            {session?.user?(
                 <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'>
                     Create post
                    </Link>

                    <button onClick={signOut}  className='outline_btn'>
                        Sign Out

                    </button>
                    <Link href='/profial'>
                    <Image
                     src={session?.user?.image}
                     alt='img'
                     width={30}
                     height={30}
                     className='rounded-full'
                     
                     />
                     
                    </Link>

                    
                 </div>
                 
                
            ):(
                <div>
                    {providers&&Object.values(providers).map((provider)=>(
                        <button key={provider.name}
                         onClick={()=>signIn(provider.id)}
                        className='black_btn'
                        >
                           Sign In 


                        </button>
                    ))}
                  
                    
                </div>
            )}

        </div>
    </nav>
  )
}

export default Nav