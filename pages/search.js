import React from 'react'
import Head from 'next/head';
import Header from '../components/Header';
import { ExclamationIcon } from '@heroicons/react/outline';
import apiKey from '../public/apiKey.png';
import Image from 'next/image';

const search = () => {
  return (
    <div>
        <Head>
            <title>Google search</title>
        </Head>

        <Header />

        <div className="flex justify-center">
          <div className="px-8 py-5 m-10 max-w-lg rounded-md border border-l-8 border-l-red-500 items-center gap-4">
            <ExclamationIcon className='text-red-500 w-7 h-7' />
            <div className="flex flex-col">
              <h3 className="font-medium py-2 ">Obavezno pročitati!</h3>
              <p className="text-gray-500 text-sm pb-2">Zbog problema prilikom kreiranja <strong>API ključa</strong>, aplikacija trenutno ne može implementirati funkcionalnost Google pretrage.</p>
              <Image src={apiKey} alt="API key" width="416" height="98" />
            </div>
          </div>
        </div>

    </div>
  )
}

export default search