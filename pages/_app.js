import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { checkToken } from '@/utils/token';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {

  const router = useRouter();
  const isTokenAvailable = checkToken();

  useEffect(() => {
    if (!isTokenAvailable && !router.pathname.startsWith('/login') && !router.pathname.startsWith('/signup')) {
      router.push('/login');
    } else if (!isTokenAvailable && router.pathname.startsWith('/signup')) {
      router.push("/signup");
    }
  }, [isTokenAvailable, router]);

  if (router.pathname.startsWith('/login')) {
    return <Component {...pageProps} />;
  }else if(router.pathname.startsWith('/signup')){
    return <Component {...pageProps}/>
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
