import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();
  const [openBar, setOpenbar] = useState(true);

  const openSidebar = () => {
    setOpenbar(!openBar);
  }


  useEffect(() => {
    if (!openBar) {
      openSidebar()
    }
  }, [router])


  return (
    <div>
      <nav className='bg-slate-400 z-10 py-6 flex justify-between fixed top-0 w-full'>
        <ul className='flex space-x-5 ml-5 text-white font-semibold font-mono cursor-pointer'>
          <li>
            <Link href="/hoodies">Hoodies</Link>
          </li>
          <li>
            <Link href="/tshirts">T-shirts</Link>
          </li>
          <li>
            <Link href="/mugs">Mugs</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/jeans">Jeans</Link>
          </li>
        </ul>
        <ul className='flex text-white space-x-7 mx-8'>
          <li className='text-2xl font-mono'>Codeswear.com</li>
          <li className='cursor-pointer mt-1'>
            <Link href={'/login'}><FiLogOut size={26} color="white" /></Link>
          </li>
          <li className='cursor-pointer mt-1'>
            <FiMenu size={26} color="white" onClick={openSidebar} />
          </li>
        </ul>
      </nav>
      {!openBar && <Sidebar />}
    </div>
  )
}

export default Navbar;
