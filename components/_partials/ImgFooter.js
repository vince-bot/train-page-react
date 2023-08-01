import Image from 'next/image'
import React from 'react'

const ImgFooter = () => {

   const donate = [
      {
         image: "/img/donate-1.jpg",
      },
      {
         image: "/img/donate-2.jpg",
      },
      {
         image: "/img/donate-3.jpg",
      },
      {
         image: "/img/donate-4.jpg",
      },
   ]
   
   return (
      <>
         <div className='flex flex-col relative justify-center items-center w-full'>
            <div className="w-full">
               <div className="grid grid-cols-2 md:grid-cols-4">
                  {donate.map((item, i) => {
                     return (
                        <>
                           <div key={i}>
                              <Image
                                 src={item.image}
                                 quality={100}
                                 width={1000}
                                 height={1000}
                                 alt="Picture of the author"
                                 className='w-full'
                              />
                           </div>
                        </>
                     )
                  })}
               </div>
            </div>
         </div>
      </>
   )
}

export default ImgFooter