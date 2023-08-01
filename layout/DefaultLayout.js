import Head from 'next/head'
import React from 'react'
import MainFooter from '../components/_partials/MainFooter'
import Navbar from '../components/_partials/Navbar'

const DefaultLayout = (props) => {
   return (
      <>
         <Head>
            <title>Sample</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="h-screen">
            <Navbar />
            <main >
               {React.cloneElement(props.children)}
            </main>
            <MainFooter />
         </div>
      </>
   )
}

export default DefaultLayout  