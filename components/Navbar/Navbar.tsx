import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex items-center justify-between w-full fixed px-5 py-4 lg:px-9 xl:px-[9%] z-50 transition-all duration-300'>
    <Link href="/">Logo</Link>
    <ul className='flex items-center justify-center gap-6 lg:gap-8 '>
        <li>Home</li>
        <li>About Us</li>
        <li>Apartments</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
    </ul>
    <div>
        <button className=' uppercase border border-[#CABE9F] p-4'>
            Schedule a Visit
        </button>
    </div>
   </nav>
  )
}

export default Navbar;