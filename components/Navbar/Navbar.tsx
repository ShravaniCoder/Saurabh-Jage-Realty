import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex items-center justify-between w-full top-0 fixed px-5 py-4 lg:px-9 xl:px-[9%] z-50 transition-all duration-300'>
    <Link href="/">Logo</Link>
    <ul className='flex items-center justify-center gap-6 lg:gap-10 '>
        <li>Home</li>
        <li>About Us</li>
        <li>Apartments</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
    </ul>
    <div>
        <button className=' uppercase text-white bg-[#CABE9F] px-6 py-2'>
            Schedule a Visit
        </button>
    </div>
   </nav>
  )
}

export default Navbar;