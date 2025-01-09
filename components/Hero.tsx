import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className='w-full min-h-screen px-3 lg:px-10 flex flex-col xl:flex-row gap-10 py-10 md:gap-10 lg:py-0 bg-black'>
      {/* Text Container */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/3 lg:pt-20'>
        <h1 className='text-[30px] font-bold leading-[120%] pb-3 text-white'>MARCO CONFERENCE</h1>
        <span className='font-bold text-white'>March 7-13, 2025</span>
        <p className='text-[16px] font-normal mt-6 xl:max-w-[520px] text-gray-300'>
          The MARCO Conference provides an opportunity for the global community of creatives to encounter cutting-edge ideas, discover new interests, and network with other professionals who share a similar appetite for forward-focused experiences.
        </p>
      </div>

      {/* Image Container */}
      <div className='relative z-10 flex flex-2 items-center justify-center xl:w-2/3'>
        <div className="relative w-full">
          <Image
            src='/swqxm.jpg'
            alt='Conference Image'
            width={800}
            height={500}
            className='object-cover w-full h-auto'
          />
          {/* Quote Below the Image */}
          <p className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-sm px-4 py-2'>
            Keynote: Breaking Barriers, Shaping Narratives: How Women Lead On and Off the Screen – MARCO 2024 – Photo by Virginia Hernandez
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
