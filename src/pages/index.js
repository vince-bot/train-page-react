import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '../../components/_partials/Navbar'
import Banner from '../../components/slices/Banner'
import Programs from '../../components/slices/Programs'
import News from '../../components/slices/News'
import Partners from '../../components/slices/Partners'
import Advocacy from '../../components/slices/Advocacy'
import TopFooter from '../../components/_partials/TopFooter'
import ImgFooter from '../../components/_partials/ImgFooter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return (
      <>
         <div className="relative w-full">
            <Banner />
            <Programs />
            <News />
            <Partners />
            <Advocacy />
            <TopFooter />
            <ImgFooter />
         </div>
      </>
   )
}
