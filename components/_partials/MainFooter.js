import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const MainFooter = () => {

   const router = useRouter()

   const footerMenu = [
      {
         title: "Home",
         url: "/",
      },
      {
         title: "About Us",
         url: "/about-us",
      },
      {
         title: "Our Programs",
         url: "/our-programs",
      },
      {
         title: "News",
         url: "/news"
      },
      {
         title: "Contact Us",
         url: "/contact-us",
      },
   ];

   return (
      <>
         <div className="flex justify-center w-full bg-foot-green px-8">
            <div className='w-full top-0 max-w-[1240px] py-[50px]'>
               <div className="flex flex-row w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:space-x-28 gap-5">
                     <div className="flex flex-col gap-3">
                        <div className='w-full sm:w-auto flex justify-center sm:justify-start'>
                           <Image
                              src='/img/footer-logo.png'
                              quality={100}
                              width={240}
                              height={1000}
                              alt="Picture of the author"
                              className=''
                           />
                        </div>
                        <p className="text-white text-sm">
                           This is fill in text. It is here temporarily, and will be replaced with the proper text shortly.
                        </p>
                        <p className="text-white text-sm">
                           It is repeated many times.
                        </p>
                        <p className="text-white text-sm">
                           Copyright © 2023 HASP. All rights reserved
                        </p>
                        <div className="">
                           <ul className='flex gap-3'>
                              <li>
                                 <AiFillInstagram size={24} className="text-white " />
                              </li>
                              <li>
                                 <BsFacebook size={21} className="text-white " />
                              </li>
                              <li>
                                 <AiFillTwitterCircle size={24} className="text-white " />
                              </li>
                           </ul>
                        </div>
                     </div>

                     <hr className="border border-dark-green block sm:hidden" />

                     <div className="hidden sm:block">
                        <div className="flex flex-col justify-between h-full">
                           {footerMenu.map((item, i) => {
                              return (
                                 <>
                                    <div key={i}>
                                       <Link
                                          className={`flex text-sm justify-center xs:justify-start text-white w-full cursor-pointer hover:text-primary-green
                                          ${router.pathname === item.url
                                             ? "text-primary-green " : "text-black"}`}
                                          href={item.url}
                                       >
                                          {item.title}
                                       </Link>
                                    </div>
                                 </>
                              )
                           })}
                        </div>
                     </div>

                     {/* MOBILE VIEW MENU */}
                     <div className="sm:hidden block">
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 ">
                           {footerMenu.map((item, i) => {
                              return (
                                 <>
                                    <div key={i} className="flex">
                                       <Link
                                          className={`flex text-sm justify-center xs:justify-start text-white w-full cursor-pointer 
                                          ${router.pathname === item.url ? "text-black]" : "text-black]"}`}
                                          href={item.url}
                                       >
                                          {item.title}
                                       </Link>
                                    </div>
                                 </>
                              )
                           })}
                        </div>
                     </div>

                     <hr className="border border-dark-green block sm:hidden" />

                     <div className="hidden sm:block">
                        <div className='flex flex-col gap-4 pt-10 md:pt-0'>
                           <span className="text-white text-sm">
                              Our Programs
                           </span>
                           <span className="text-white text-sm">
                              Rescue & Adopt
                           </span>
                           <span className="text-white text-sm">
                              Spay & Neuter
                           </span>
                           <span className="text-white text-sm">
                              Anti-Puppy Mills
                           </span>
                           <span className="text-white text-sm">
                              Volunteer Program
                           </span>
                        </div>
                     </div>

                     {/* MOBILE VIEW */}
                     <div className="sm:hidden block">
                        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2  gap-4 '>
                           <span className="text-white text-sm text-center xs:text-start">
                              Our Programs
                           </span>
                           <span className="text-white text-sm text-center xs:text-start">
                              Rescue & Adopt
                           </span>
                           <span className="text-white text-sm text-center xs:text-start">
                              Spay & Neuter
                           </span>
                           <span className="text-white text-sm text-center xs:text-start">
                              Anti-Puppy Mills
                           </span>
                           <span className="text-white text-sm text-center xs:text-start">
                              Volunteer Program
                           </span>
                        </div>
                     </div>

                     <hr className="border border-dark-green block sm:hidden" />

                     <div className="hidden sm:block">
                        <div className="flex flex-col justify-between pt-10 md:pt-0 h-full">
                           <div className="flex flex-col">
                              <span className="text-white text-sm">
                                 Unit 123, Block 123
                              </span>
                              <span className="text-white text-sm">
                                 Sample Street, Sample City
                              </span>
                              <span className="text-white text-sm">
                                 Country. 1234 Zip Code
                              </span>
                           </div>
                           <div className="flex flex-col">
                              <span className="text-white text-sm">
                                 Contact Name 1
                              </span>
                              <span className="text-white text-sm">
                                 Contact No. - 123 456 7890
                              </span>
                           </div>
                           <div className="flex flex-col">
                              <span className="text-white text-sm">
                                 Contact Name 2
                              </span>
                              <span className="text-white text-sm">
                                 Contact No. - 123 456 7890
                              </span>
                           </div>
                        </div>
                     </div>

                     {/* MOBILE VIEW */}
                     <div className="sm:hidden block ">
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-5">
                           <div className="flex flex-col text-center xs:text-start gap-2 xs:gap-0">
                              <span className="text-white text-sm">
                                 Unit 123, Block 123
                              </span>
                              <span className="text-white text-sm">
                                 Sample Street, Sample City
                              </span>
                              <span className="text-white text-sm">
                                 Country. 1234 Zip Code
                              </span>
                           </div>
                           <div className="flex flex-col text-center xs:text-start gap-2 xs:gap-0">
                              <span className="text-white text-sm">
                                 Contact Name 1
                              </span>
                              <span className="text-white text-sm">
                                 Contact No. - 123 456 7890
                              </span>
                           </div>
                           <div className="flex flex-col text-center xs:text-start gap-2 xs:gap-0">
                              <span className="text-white text-sm">
                                 Contact Name 2
                              </span>
                              <span className="text-white text-sm">
                                 Contact No. - 123 456 7890
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-row w-full bg-[#093605]">
            <h6 className="w-full text-center text-white py-5 text-sm">
               Website powered by HASP
            </h6>
         </div>
      </>
   )
}

export default MainFooter