import Image from 'next/image'
import React from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'
import AppButton from '../Base/AppButton'

const TopFooter = () => {

   return (
      <div className='flex flex-col justify-center items-center w-full py-20 px-8'>
         <div className='w-full top-0 max-w-[1240px] '>
            <div className="flex flex-col md:flex-row w-full">
               <div className='flex flex-col w-full md:w-2/5 pb-7 md:pb-0'>
                  <h2 className="text-3xl text-primary-green font-secondary font-[600] uppercase pb-3">
                     Join us In
                  </h2>
                  <h2 className='text-5xl text-primary-green font-secondary font-[800] uppercase pb-5'>
                     Our Advocacy
                  </h2>
                  <button className="flex items-center justify-center px-3 py-2 bg-white text-primary-green rounded text-sm border-2 border-primary-green w-[135px] h-[50px] hover:text-white hover:bg-primary-green font-bold">
                     Donate Now
                     &nbsp;<BiSolidRightArrow />
                  </button>
               </div>
               <div className="flex flex-col justify-between w-full md:w-3/5">
                  <p className="text-base font-primary">
                     This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text. This is fill in text. It is here temporarily, and will be replaced with the proper text shortly.
                  </p>
                  <p className="text-base font-primary">
                     It is repeated many times so we will see what the website will look like with text. This is fill in text. It is here temporarily.
                  </p>
               </div>
            </div>
         </div>
         
      </div>
   )
}

export default TopFooter