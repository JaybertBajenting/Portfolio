"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export const Navbar = () => {

    
    const pathName = usePathname();
    

    const navLinks = [
        {
            "name":"Home",
            "href":"/"  
        },
        {
            "name":"Projects",
            "href":"/projects"  
        },
        {
            "name":"Contact",
            "href":"/contact"  
        }, 
    ]


  return (
    <div className='flex justify-between items-center'>
          <h1 className='text-[24px] text-white cursor-pointer'>Jaybert</h1>
            <ul className='space-x-[50px]'> 
            {navLinks.map((link) =>{
               
                const isActive = link.href === "/" ? pathName === link.href : pathName.startsWith(link.href);
                return(
                    <li className='inline-block' key={link.name}>
                        <Link href={link.href} className = {isActive ? "text-skyblue": "text-white"}>
                        {link.name}
                        </Link>
                    </li>
                ) 
                })}
            </ul>  
    </div>
  
    );
}

