import React from 'react'
import Head from 'next/head';
import Header from '../components/Header';
import { useRouter } from 'next/router';

const search = () => {

  const router = useRouter(null);

  return (
    <div>
        <Head>
            <title>{router.query.term} - Google search</title>
        </Head>

        <Header />

    </div>
  )
}

export default search