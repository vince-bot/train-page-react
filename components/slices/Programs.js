import Image from 'next/image'
import React from 'react'
import AppButton from '../Base/AppButton'
import { BiSolidRightArrow } from "react-icons/bi";

const Programs = () => {

   const progams = [
      {
         url: "/",
         image: '/img/volunteer.jpg',
         title: 'volunteer',
      },
      {
         url: "/",
         image: '/img/donate.jpg',
         title: 'donate',
      },
      {
         url: "/",
         image: '/img/adopt.jpg',
         title: 'adopt',
      }
   ]

   return (
      <>
         <div className='flex flex-col relative justify-center w-full items-center top-0 md:top-[-100px] px-8 '>
            <div className=' w-full top-0 max-w-[1240px]'>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                  {progams.map((category, i) => {
                     return (
                        <div key={i} className="flex flex-col cursor-pointer bg-white rounded-xl p-5 shadow-md justify-between border2 border-black">
                           <div className="flex justify-center ">
                              <Image
                                 src={category.image}
                                 width={119}
                                 height={500}
                                 alt="Picture of the author"
                              />
                           </div>
                           <div className="flex justify-center pt-2">
                              <h1 className="text-3xl uppercase font-[800] text-primary-green items-end font-secondary">
                                 {category.title}
                              </h1>
                           </div>
                        </div>
                     )
                  })}
               </div>
               <div className='flex flex-col md:flex-row py-16 gap-5'>
                  <div className='w-full md:w-1/2'>
                     <Image
                        src="/img/cat.jpg"
                        width={600}
                        height={410}
                        alt="Picture of the author"
                        className="w-full"
                     />
                  </div>
                  <div className="flex flex-col justify-between w-full md:w-1/2 pt-10 md:pt-0 gap-5">
                     <div className="flex flex-col">
                        <h1 className='uppercase text-primary-green text-2xl font-secondary'>
                           be a part of
                        </h1>
                        <h1 className="uppercase text-primary-green font-[800] text-3xl font-secondary">
                           our mission
                        </h1>
                     </div>
                     <p className="text-lg text-default-gray">
                        “This is fill in text. It is here temporarily, and will be replaced with the proper text shortly.”
                     </p>
                     <p className='text-lg text-primary-gray'>
                        This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.
                     </p>
                     <button
                        className="flex items-center justify-center px-3 py-2 bg-white text-primary-green rounded text-sm border-2 border-primary-green w-[135px] h-[50px] hover:text-white hover:bg-primary-green font-bold"
                     >
                        Learn More &nbsp;
                        <BiSolidRightArrow />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Programs