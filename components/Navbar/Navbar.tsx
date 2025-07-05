import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/public/logo.png'

const Navbar = () => {
  return (
   <nav className='fixed top-0 z-100 w-full flex items-center justify-between px-5 py-5 lg:px-9 xl:px-[9%] transition-all duration-300 bg-white'>
    <Link href="/"><Image src={Logo} alt='Logo' className='w-36' height={100} width={100}/></Link>
    <ul className='flex items-center justify-center gap-6 lg:gap-10 text-black'>
        <li>Home</li>
        <li>About Us</li>
        <li>Apartments</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
    </ul>
    <div>
        <button className='uppercase text-white border border-[#CABE9F] px-6 py-2'>
          <h1 className='text-[#CABE9F] rounded-sm'>Schedule a Visit</h1>  
        </button>
    </div>
</nav>

  )
}

export default Navbar;