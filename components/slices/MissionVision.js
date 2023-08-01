import Image from 'next/image'
import React from 'react'

const MissionVision = () => {
   return (
      <>
         <div className='flex flex-col justify-center w-full items-center py-10'>
            <div className='flex w-full max-w-[1240px] px-8'>
               <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex flex-col w-full md:w-1/2 p-10 gap-5 text-center border border-[#9E9E9E] rounded-md">
                     <div className="flex w-full justify-center">
                        <Image
                           src="/img/airplane.jpg"
                           width={10000}
                           quality={100}
                           height={1000}
                           alt="Picture of the author"
                           className='object-cover w-auto h-auto text-center'
                        />
                     </div>
                     <h2 className='uppercase text-primary-green font-[700] text-4xl font-secondary'>
                        Mission
                     </h2>
                     <p className='text-sm'>
                        This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we can see what the website will look like with text. This is fill in text. It is here temporarily and will be replaced with the proper text.
                     </p>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 p-10 gap-5 text-center border border-[#9E9E9E] rounded-md">
                     <div className="flex w-full justify-center">
                        <Image
                           src="/img/galaxy.jpg"
                           width={10000}
                           quality={100}
                           height={1000}
                           alt="Picture of the author"
                           className='object-cover w-auto h-auto text-center'
                        />
                     </div>
                     <h2 className='uppercase text-primary-green font-[700] text-4xl font-secondary'>
                        Vision
                     </h2>
                     <p className='text-sm'>
                        This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we can see what the website will look like with text. This is fill in text. It is here temporarily and will be replaced with the proper text.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default MissionVision