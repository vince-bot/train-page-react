import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'

const Partners = () => {

   const partners = [
      {
         url: '/',
         image: '/img/sample-1.jpg',
         title: 'Sample Update Title goes here maximum of two lines only...',
         description: 'This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we can see what the website will look like with text. This is fill in text. It is here temporarily and will be replaced with the proper text.',
      },
      {
         url: '/',
         image: '/img/sample-2.jpg',
         title: 'Sample Update Title goes here maximum of two lines only...',
         description: 'This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we can see what the website will look like with text. This is fill in text. It is here temporarily and will be replaced with the proper text.',
      },
      {
         url: '/',
         image: '/img/sample-3.jpg',
         title: 'Sample Update Title goes here maximum of two lines only...',
         description: 'This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we can see what the website will look like with text. This is fill in text. It is here temporarily and will be replaced with the proper text.',
      },
   ]

   return (
      <div className='flex flex-col justify-center items-center w-full pt-10 px-8'>
         <div className='w-full top-0 max-w-[1240px]'>
            <h2 className="text-xl md:text-3xl font-[600] font-secondary text-primary-green pb-0 md:pb-5">
               KEY TOPICS &
            </h2>
            <div className="flex justify-between">
               <h2 className="text-3xl md:text-5xl font-[800] text-primary-green font-secondary">
                  LATEST UPDATES
               </h2>
               <h2 className="text-xl md:text-2xl font-[700] text-primary-green font-secondary">
                  SEE ALL
               </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
               {partners.map((category, i) => {
                  return (
                     <>
                        <div class="rounded-xl overflow-hidden shadow-lg border border-[#9E9E9E]">
                           <Image
                              src={category.image}
                              quality={100}
                              width={1000}
                              height={1000}
                              alt="Picture of the author"
                              className='w-full'
                           />
                           <div class="px-6 py-4 text-center">
                              <h2 class="text-primary-green text-xl mb-2 font-[700]">
                                 {category.title}
                              </h2>
                              <p class="text-gray-700 text-sm pb-3">
                                 {category.description}
                              </p>
                              <Link 
                                 className="flex justify-center items-center uppercase text-primary-green text-lg font-700"
                                 href=''
                              >
                                 read more
                                 &nbsp;<BiSolidRightArrow />
                              </Link>
                           </div>
                        </div>
                     </>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Partners