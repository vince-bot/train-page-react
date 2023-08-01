import Image from 'next/image'
import React from 'react'

const SupportUs = () => {
   return (
      <>
         <div className='flex flex-col relative justify-center w-full h-auto items-center'>
            <div className='w-full max-w-[1240px] px-8'>
               <div className="flex flex-col md:flex-row py-16 gap-5">
                  <div className="flex flex-col w-full md:w-1/2 gap-5">
                     <h2 className="uppercase text-primary-green text-2xl font-secondary font-[600]">
                        Support us In
                     </h2>
                     <h2 className="uppercase text-primary-green font-[800] text-5xl font-secondary">
                        Our Advocacy
                     </h2>
                     <p className="text-lg text-default-gray">
                        “This is fill in text. It is here temporarily, and will be replaced with the proper text shortly.”
                     </p>
                     <p className="text-lg text-primary-gray">
                        This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.
                     </p>
                  </div>
                  <div className="w-full md:w-1/2">
                     <Image
                        src="/img/donate-cat.jpg"
                        width={10000}
                        quality={100}
                        height={1000}
                        alt="Picture of the author"
                        className='object-cover w-full h-full'
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default SupportUs