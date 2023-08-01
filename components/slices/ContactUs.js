import Image from 'next/image'
import React from 'react'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { FaPhoneAlt } from "react-icons/fa";
import AppInput from '../../components/Base/AppInput';
import Link from 'next/link';
import AppButton from '../Base/AppButton';
import { BiSolidRightArrow } from 'react-icons/bi';

const ContactUs = () => {
   return (
      <>
         <div className='flex flex-col relative justify-center w-full h-auto items-center px-8'>
            <div className=' w-full max-w-[1240px] py-20'>
               <div className="flex flex-col md:flex-row gap-5 space-x-0 md:space-x-20 lg:space-x-30 xl:space-x-40">
                  <div className='flex flex-col w-full md:w-1/2 gap-5'>
                     <h2 className="uppercase text-primary-green text-lg md:text-xl font-secondary font-[600]">
                        Want to volunteer
                     </h2>
                     <h2 className="uppercase text-primary-green font-[800] text-3xl md:text-4xl lg:text-5xl font-secondary">
                        Get in touch
                     </h2>
                     <Image
                        src="/img/sample-2.jpg"
                        width={465}
                        quality={100}
                        height={185}
                        alt="Picture of the author"
                        className='object-cover rounded-xl'
                     />
                     <p className="text-base font-[600]">
                        This is fill in text. It is here temporarily, and will be replaced with the proper text shortly.
                     </p>
                     <p className="text-base font-[600]">
                        This is fill in text. It is here temporarily.
                     </p>
                     <div className="flex items-center pt-5 gap-3">
                        <HiLocationMarker className="text-primary-green" size={24} />
                        <div className="flex flex-col">
                           <span>
                              Unit 123, Block 123
                           </span>
                           <span>
                              Sample Street, Sample City
                           </span>
                           <span>
                              Country, 1234 Zip Code
                           </span>
                        </div>
                     </div>
                     <div className="flex gap-3">
                        <FaPhoneAlt className="text-primary-green" size={24} />
                        <span>123 456 7890</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <HiMail className="text-primary-green" size={24} />
                        <span>
                           animal.rescue@gmail.com
                        </span>
                     </div>
                  </div>
                  <div className='flex flex-col w-full md:w-1/2 py-10 gap-5'>
                     <AppInput
                        // label="Name"
                        name="title"
                        type="text"
                        size="150"
                        // required
                        placeholder="Name"
                        inputClass="my-1 w-full"
                        classNames="border border-default-gray rounded w-1/2 py-2 px-4 text-gray-700 focus:outline-none"
                     />
                     <AppInput
                        // label="Name"
                        name="title"
                        type="text"
                        size="150"
                        // required
                        placeholder="Email Address"
                        inputClass="my-1 w-full"
                        classNames="border border-default-gray rounded w-1/2 py-2 px-4 text-gray-700 focus:outline-none"
                     />
                     <AppInput
                        // label="Name"
                        name="title"
                        type="text"
                        size="150"
                        // required
                        placeholder="Contact Number"
                        inputClass="my-1 w-full"
                        classNames="border border-default-gray rounded w-1/2 py-2 px-4 text-gray-700 focus:outline-none"
                     />
                     <div className="" style={{ width: '100%' }}>
                        <AppInput
                           name="select-time"
                           type="select"
                           required
                           items={
                              [
                                 {
                                    label: 'Organization',
                                    value: '',
                                 },
                                 {
                                    label: 'Four Emperors',
                                    value: '',
                                 },
                                 {
                                    label: 'Seven Shichibukai',
                                    value: '',
                                 },
                                 {
                                    label: 'Eleven Supernovas',
                                    value: '',
                                 },
                                 {
                                    label: 'Marine',
                                    value: '',
                                 },
                                 {
                                    label: 'Wordld Government',
                                    value: '',
                                 }
                              ]
                           }
                           placeholder="Select"
                           inputClass=""
                           classNames=" border border-default-gray rounded-md w-full px-2 focus:outline-none border border-default"
                        />
                     </div>
                     <AppInput
                        // label="Name"
                        name="title"
                        type="textarea"
                        size="150"
                        // required
                        placeholder="Message"
                        inputClass="my-1 w-full"
                        classNames="border border-default-gray rounded w-1/2 px-4 text-gray-700 focus:outline-none h-[200px] none"
                     />
                     <p className="text-xs">
                        This site is protected by reCAPTCHA and the Google &nbsp;
                        <Link
                           href=''
                           className="text-primary-green"
                        >
                           Privacy Policy
                        </Link>
                        &nbsp;and&nbsp;
                        <Link
                           href=''
                           className="text-primary-green"
                        >
                           Terms of Service
                        </Link>
                        &nbsp;apply.
                     </p>

                     <div className="flex justify-center">
                        <button
                           name=""
                           className="flex items-center justify-center w-[200px] uppercase py-4 font-[600] rounded-lg bg-transparent border-2 border-primary-green text-primary-green text-xl transition duration-300 ease-in-out focus:outline-none hover:bg-primary-green hover:text-white"
                           type="button"
                        >
                           Submit
                           &nbsp;<BiSolidRightArrow />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="mapouter w-full border-t-[6px] border-primary-green">
            <div className="gmap_canvas">
               <iframe className="gmap_iframe w-full h-[500px]" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=PPBCC Foundation&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
         </div>
      </>
   )
}

export default ContactUs