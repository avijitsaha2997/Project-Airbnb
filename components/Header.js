import Image from "next/image";
import React from "react";

import { SearchIcon, MenuIcon, UserCircleIcon, UserIcon, GlobeAltIcon } from '@heroicons/react/solid'




function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/*left*/}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png" alt=""
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    className=""
                />

            </div>

            {/*middle*/}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
                <input className="flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-orange-300 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/*top*/}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>

        </header>
    );
}

export default Header;
