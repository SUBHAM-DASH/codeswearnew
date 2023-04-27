import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { checkToken } from '@/utils/token';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react"
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const isTokenAvailable = checkToken();

  useEffect(() => {
    if (!isTokenAvailable && !router.pathname.startsWith('/login') && !router.pathname.startsWith('/signup') && !router.pathname.startsWith('/forgotpassword')) {
      router.push('/login');
    } else if (!isTokenAvailable && router.pathname.startsWith('/signup')) {
      router.push("/signup");
    }
  }, [isTokenAvailable, router]);

  if (router.pathname.startsWith('/login') || router.pathname.startsWith('/forgotpassword')) {
    return (
      //for social login we used SessionProvider
      <SessionProvider session={pageProps.session}>
        <Head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    );
  } else if (router.pathname.startsWith('/signup')) {
    return <Component {...pageProps} />
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
