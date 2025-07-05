import Image from 'next/image';
import React from 'react';
import About1 from "@/public/AboutImages/About1.png";
import About2 from "@/public/AboutImages/About2.png";

const About = () => {
  return (
    <section>
    <div className='w-full h-[30vh] bg-white my-20 flex items-center justify-center'>
        <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-6 text-center">
          Introducing MaisonCo, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned.
        </h1>
        <p className="uppercase text-center text-sm tracking-widest my-8 text-[#CABE9F]">
          See more about the residences
        </p>
      </div>
    </div>
    <div className='mx-16 '>
    <div className='flex flex-col lg:flex-row items-center justify-between gap-20 bg-[#F8F8F8]'>
        <div className='w-[50%]'><Image src={About1} alt='Building'  className=' h-[90vh]'/></div>
        <div className='w-[50%] b'>
            <div className='flex flex-col mx-20 my-10 '>
              <div><Image src={About2} alt='About2' /></div>
              <div>
                <h4 className='uppercase'>The Building.</h4>
                <h1 className='text-2xl uppercase'>beautiful of design

</h1>
<h1 className='text-2xl uppercase'>and character</h1>
<p></p>
              </div>
            </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default About;