import { useRouter } from 'next/router'
import React from 'react'

const Breadcrumbs = () => {

   const router = useRouter()

   const breadCrumbs = router.pathname.split('/')

   console.log('breadCrumbs', breadCrumbs)

   const menu = {
      '': {
         title: "Home",
         url: "/",
      },

      'about-us': {
         title: "About Us",
         url: "/about-us",
      },

      'our-programs': {
         title: "Our Program",
         url: "/our-programs",
      },
      news: {
         title: "News",
         url: "/news",
      },
      'contact-us': {
         title: "Contact Us",
         url: '/contact-us'
      }
   }

   return (
      <>
         <nav className="flex justify-center relative px-8" aria-label="Breadcrumb">
            <div className="w-full top-0 max-w-[1240px] py-10 border-b-2 border-[#097500]">
               <ol className="inline-flex items-center space-x-1 md:space-x-3 pb-10">
                  {breadCrumbs.map((item, index) => {
                     return (
                        <li key={index} className="inline-flex items-center">
                           <a href={menu[item].url} className="inline-flex items-center text-sm primary-green hover:text-black uppercase">
                              {menu[item].title} &nbsp;{breadCrumbs.length - 1 !== index ? ' / ' : ''}
                           </a>
                        </li>
                     )  
                  })}
               </ol>
                  <h2 className='text-5xl font-[800] primary-green'>

                  </h2>
            </div>
         </nav>
      </>
   )
}

export default Breadcrumbs