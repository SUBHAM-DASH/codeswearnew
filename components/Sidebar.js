import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Sidebar = () => {

    const router = useRouter();
    const [useData, setUserData] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/users/getUserProfile`, {
            headers: {
                "codeswear-token": Cookies.get("codeswear-token")
            }
        }).then((response) => {
            if (response.data.status === "success") {
                setUserData(response.data.userInfo);
            }
        }).catch((error) => {
            console.log(error.message);
        })
    }, []);


    const handleLogout = () => {
        signOut();
        document.cookie = "codeswear-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    return (
        <div>
            <div className="z-50 fixed w-1/6 rounded-tr-none right-2 top-16 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                <div className="px-4 py-3" role="none">
                    <div class="bg-purple-600 rounded-full h-12 w-12 flex items-center justify-center">
                        <span class="text-white text-xl font-semibold">{useData?.floating_first_name.charAt(0).toUpperCase()}</span>
                    </div>
                    <p className="text-sm text-gray-900 dark:text-white font-bold" role="none">
                        {useData?.floating_first_name}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        {useData?.floating_email}
                    </p>
                </div>
                <ul className="py-1" role="none">
                    <li>
                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</Link>
                    </li>
                    <li>
                        <Link href="/cart/cartproduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Cart</Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Edit Profile</Link>
                    </li>
                    <li onClick={handleLogout}>
                        <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;

