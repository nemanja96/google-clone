import React, { useRef, useState } from 'react'
import googleImg from '../public/googleImg.png';
import avatarImg from '../public/avatar.png';
import Image from 'next/image';
import { CogIcon, MenuIcon, MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import Avatar from './Avatar';
import { useRouter } from 'next/router';
import HeaderOptions from './HeaderOptions';

const Header = () => {

    const router = useRouter(null);

    const searchInputRef = useRef(null);

    const [term, setTerm] = useState(router.query.term);

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);
    }

  return (
    <header className="sticky top-0 bg-white z-10">
        <div className="w-full flex-col justify-end items-center border-b hidden md:flex">
            <div className="w-11/12 flex justify-end">
                <div className="flex items-center py-7 w-full md:w-4/5 ">
                    <Image src={googleImg} width="93.1" height="31.2" onClick={() => router.push('/')} className="cursor-pointer" alt="Google Logo" />
                    <form className="px-3 py-3 rounded-full border shadow-md flex w-full items-center ml-7 max-w-screen-sm md:w-full">
                        <input type="text" value={term} onChange={e => setTerm(e.target.value)} ref={searchInputRef} className='w-full focus:outline-none' />
                        <XIcon onClick={() => setTerm('')} className="w-5 h-5 text-gray-500 mx-1 cursor-pointer transition duration-100 transform hover:scale-125" />
                        <MicrophoneIcon className="w-5 h-5 text-gray-500 mx-1 cursor-pointer hidden md:inline" />
                        <SearchIcon className="w-5 h-5 text-blue-500 mx-1 cursor-pointer hidden md:inline" />
                        <button type="submit" onClick={search} className="hidden">Search</button>
                    </form>
                </div>
                <div className="flex items-center justify-end w-1/5">
                    <CogIcon className="w-6 h-6 text-gray-500 cursor-pointer hidden md:inline" />
                    <MenuIcon className="w-6 h-6 text-gray-500 mx-5 cursor-pointer hidden md:inline" />
                    <Avatar url={avatarImg} />
                </div>
            </div>
            <div className="w-full flex justify-between">
                <div className="w-4/5 flex">
                    <HeaderOptions styles={" ml-5 w-3/5"} />
                </div>
            </div>
        </div>

        {/* MOBILE */}
        <div className="flex w-full flex-col justify-end items-center border-b md:hidden">
            <div className="w-11/12 flex flex-col justify-end">
                <div className="flex items-center justify-between py-4 w-full">
                    <MenuIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
                    <Image src={googleImg} width="93.1" height="31.2" onClick={() => router.push('/')} className="cursor-pointer" alt="Google Logo" />
                    <Avatar url={avatarImg} />
                </div>
                <div className="flex items-center justify-center w-full">
                    <form className="px-3 py-3 rounded-full border shadow-md flex w-full items-center mb-4 max-w-screen-sm">
                        <input type="text" value={term} onChange={e => setTerm(e.target.value)} ref={searchInputRef} className='w-full focus:outline-none' />
                        <XIcon onClick={() => setTerm('')} className="w-5 h-5 text-gray-500 mx-1 cursor-pointer transition duration-100 transform hover:scale-125" />
                        <MicrophoneIcon className="w-5 h-5 text-gray-500 mx-1 cursor-pointer hidden md:inline" />
                        <SearchIcon className="w-5 h-5 text-blue-500 mx-1 cursor-pointer hidden md:inline" />
                    </form>
                </div>
            </div>
            <HeaderOptions styles={" w-full justify-evenly"} />
        </div>
    </header>
  )
}

export default Header