"use client"
import React from 'react'
import  { useRouter } from "next/navigation";
import { Navbar } from './components/Navbar';



const Home = () => {

  const router = useRouter();
  
  

  return (
    <div className='flex h-screen w-full justify-center  max-w-[1920px] mx-auto  pt-[25px]'>
    <div className='w-[1000px] '>
        <Navbar/>
    </div>  
  
    </div>
  )
}


export default Home