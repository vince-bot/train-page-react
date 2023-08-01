import Image from 'next/image'
import React from 'react'

const Advocacy = () => {

   const advocacy = [
      {
         id: '',
         image: '/img/partners-1.jpg',
      },
      {
         id: '',
         image: '/img/partners-2.jpg',
      },
      {
         id: '',
         image: '/img/partners-3.jpg',
      },
      {
         id: '',
         image: '/img/partners-4.jpg',
      },
      {
         id: '',
         image: '/img/partners-5.jpg',
      }
   ]

   return (
      <div className='flex flex-col justify-center items-center w-full py-20 px-8'>
         <div className='w-full top-0 max-w-[1240px]'>
            <div className='flex flex-col text-center'>
               <h2 className="text-xl md:text-3xl text-primary-green font-secondary font-[600] uppercase pb-0 md:pb-5">
                  meet our
               </h2>
               <h2 className='text-2xl md:text-5xl text-primary-green font-secondary font-[800] uppercase'>
                  Partners & sponsors
               </h2>
            </div>
            <div className="grid grid-cols-5 gap-4 py-10">

               {advocacy.map((item, i) => {
                  return (
                     <>
                        <div key={i} className="flex items-center">
                           <Image
                              src={item.image}
                              quality={100}
                              width={150}
                              height={150}
                              alt="Picture of the author"
                              className=''
                           />
                        </div>
                     </>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Advocacy