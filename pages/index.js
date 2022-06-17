import Head from 'next/head'
import Avatar from '../components/Avatar'
import imageUrl from '../public/avatar.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex w-full justify-end px-5 py-4'>
        <div className='flex space-x-4 flex-end items-center'>
          <p className='text-sm link'>Gmail</p>
          <p className='text-sm link'>Photo</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <Avatar url={imageUrl} />
        </div>
      </header>

    </div>
  )
}
