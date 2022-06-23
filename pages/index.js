import Head from 'next/head'
import Avatar from '../components/Avatar'
import imageUrl from '../public/avatar.png';
import {MenuIcon, MicrophoneIcon, SearchIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import googleImg from '../public/googleImg.png';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);

  }

  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex w-full justify-end px-5 py-4'>
        <div className='flex space-x-4 flex-end items-center'>
          <p className='text-sm link'>Gmail</p>
          <p className='text-sm link'>Slike</p>
          <MenuIcon className="w-8 h-8 rounded-full p-1 hover:bg-gray-100 cursor-pointer" />
          <Avatar url={imageUrl} />
        </div>
      </header>

      <form className="flex flex-col items-center justify-center flex-1 mt-16">
        <Image
          src={googleImg} width={272} height={92} alt="Google Logo"
        />
        <div className='rounded-full border max-w-xl w-4/5 px-2 py-3 mt-7 flex items-center hover:shadow-md focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className="w-5 h-5 mr-3 text-gray-400" />
          <input ref={searchInputRef} className='flex-1 focus:outline-none' />
          <MicrophoneIcon className="w-5 h-5 ml-3 text-gray-400" />
        </div>
        <div className='flex flex-col mt-7 md:flex-row'>
          <button className="bg-gray-100 px-4 py-2 text-md text-gray-800 hover:bg-gray-200 md:mr-2" onClick={search}>Google pretraga</button>
          <button className="bg-gray-100 px-4 py-2 mt-2 text-md text-gray-800 hover:bg-gray-200 md:mt-0 md:ml-2">Iz prve ruke</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
