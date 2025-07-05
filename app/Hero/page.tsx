"use client"
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-v">Welcome to Realty</h1>
      </div>
    </div>
  )
}

export default Hero;
