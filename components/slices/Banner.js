import React from 'react'


function Banner({ title, desc }) {
   return (
      <div className='flex items-center justify-end h-[200px] sm:h-[350px] md:h-[500px] lg:h-[650px] xl:h-[800px] bg-cover custom-banner relative'>
         {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-ffffff/70 z-[2]' /> */}
         <div className='p-5 text-black z-[2] mt-[-10rem ]'>
            {/* <h1 className='text-end font-[50px] secondary-green'>
               Be the change. 
               <p className='text-white'>Make a difference in <br/> the lives of our strays.</p>
            </h1> */}
         </div>
      </div>
   )
}
export default Banner