import '@/styles/globals.css'
import '@/styles/fonts.css'
import Navbar from '../../components/_partials/Navbar';
import MainFooter from '../../components/_partials/MainFooter';
import DefaultLayout from '../../layout/DefaultLayout';

export default function App({ Component, pageProps }) {
   return (
      <>
         <DefaultLayout>
            <Component {...pageProps} />
         </DefaultLayout>
      </>
   );
}
