import Image from 'next/image'
import React from 'react'

const GetToKnow = () => {
   return (
      <>
         <div className='flex flex-col relative justify-center w-full h-auto items-center py-16'>
            <div className=' w-full max-w-[1240px] px-8'>
               <div className="flex flex-col md:flex-row gap-5 w-full">
                  <div className="flex w-full md:w-1/2">
                     <Image
                        src="/img/donate-3.jpg"
                        width={10000}
                        quality={100}
                        height={1000}
                        alt="Picture of the author"
                        className='object-cover w-full h-full rounded-xl'
                     />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 gap-5">
                     <h2 className="uppercase text-primary-green text-2xl font-secondary font-[600]">
                        Get To Know
                     </h2>
                     <h2 className="uppercase text-primary-green font-[800] text-5xl font-secondary">
                        Stray Pets
                     </h2>
                     <p className="text-lg text-default-gray">
                        “This is fill in text. It is here temporarily, and will be replaced with the proper text shortly.”
                     </p>
                     <p className="text-lg text-primary-gray">
                        This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default GetToKnow