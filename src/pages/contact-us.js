import Head from 'next/head'
import React from 'react'
import ContactUs from '../../components/slices/ContactUs'
import Breadcrumbs from '../../components/_partials/Breadcrumbs'

const contactus = () => {
   return (
      <>
         <div className="relative w-full">
            <Breadcrumbs />
            <ContactUs />
         </div>
      </>
   )
}

export default contactus