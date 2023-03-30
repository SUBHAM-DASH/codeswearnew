import Head from 'next/head'
import React from 'react';
import Script from 'next/script';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="text-white bottom-0 w-full bg-gray-500 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Codeawear.com</span>
            </a>
            <p className="mt-2 text-sm text-white">Codeswear.com - Wear the code</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">MENS</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/tshirts'} className="text-white hover:text-gray-800">Tshirt</Link>
                </li>
                <li>
                  <Link href={'/jeans'} className="text-white hover:text-gray-800">Jeans</Link>
                </li>
                <li>
                  <Link href={'/underwear'} className="text-white hover:text-gray-800">Underwear</Link>
                </li>
                <li>
                  <Link href={'/shirts'} className="text-white hover:text-gray-800">Shirts</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">WOMENS</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/sharee'} className="text-white hover:text-gray-800">Sharee</Link>
                </li>
                <li>
                  <Link href={'/bags'} className="text-white hover:text-gray-800">Bags</Link>
                </li>
                <li>
                  <Link href={'/salwar'} className="text-white hover:text-gray-800">Salwar</Link>
                </li>
                <li>
                  <Link href={'/lipsticks'} className="text-white hover:text-gray-800">Lipsticks</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">KIDS</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/schoolbags'} className="text-white hover:text-gray-800">School Bags</Link>
                </li>
                <li>
                  <Link href={'/shoes'} className="text-white hover:text-gray-800">Shoes</Link>
                </li>
                <li>
                  <Link href={'/cricketbat'} className="text-white hover:text-gray-800">Cricket Bat</Link>
                </li>
                <li>
                  <Link href={'/cricketball'} className="text-white hover:text-gray-800">Cricket Balls</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ACCESORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/mobiles'} className="text-white hover:text-gray-800">Mobiles</Link>
                </li>
                <li>
                  <Link href={'/laptops'} className="text-white hover:text-gray-800">Laptops</Link>
                </li>
                <li>
                  <Link href={'/watches'} className="text-white hover:text-gray-800">Watches</Link>
                </li>
                <li>
                  <Link href={'/telivisions'} className="text-white hover:text-gray-800">Telivisions</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-black text-sm text-center sm:text-left">© 2023 Codeswear.com —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank"></a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-blue-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
