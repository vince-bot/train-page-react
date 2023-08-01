import Image from 'next/image'
import React from 'react'

const News = () => {

   const news = [
      {
         url: "/",
         image: '/img/meet-dog.jpg',
         title: 'Meet Our Dogs',
      },
      {
         url: "/",
         image: '/img/meet-cats.jpg',
         title: 'Meet Our Cats',
      },
      {
         url: "/",
         image: '/img/donate-cat.jpg',
         title: 'How To Donate',
      },
      {
         url: "/",
         image: '/img/apply-volunteer.jpg',
         title: 'Apply as Volunteer',
      },
      {
         url: "/",
         image: '/img/spay-program.jpg',
         title: 'Spay & Neuter Program',
      },
      {
         url: "/",
         image: '/img/rescue-program.jpg',
         title: 'Rescue Program',
      }
   ]

   return (
      <div className='flex flex-col relative justify-center items-center w-full px-8'>
         <div className='w-full top-0 max-w-[1240px] py-[20px]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               {news.map((items, i) => {
                  return (
                     <>
                        <div key={i} className="relative w-full cursor-pointer">
                           <Image
                              src={items.image}
                              quality={100}
                              width={1000}
                              height={1000}
                              alt="Picture of the author"
                              className='w-full h-full object-cover'
                           />
                           <h2 className="flex justify-center w-full text-white absolute text-lg uppercase bottom-4 font-secondary font-[700]">
                              {items.title}
                           </h2>
                        </div>
                     </>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default News