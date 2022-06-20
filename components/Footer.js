import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full justify-end bg-gray-100 mt-16'>
        <div className='flex space-x-4 flex-end items-center p-3 border-b border-gray-200'>
          <p className='text-xs text-gray-500 md:text-sm'>Srbija</p>
        </div>
        <div className='flex flex-col p-3 justify-between md:flex-row'>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 items-center text-center'>
            <p className='text-xs link text-gray-500 mr-3 md:text-sm'>Osnovni podaci</p>
            <p className='text-xs link text-gray-500 mr-3 md:text-sm'>Oglašavanje</p>
            <p className='text-xs link text-gray-500 mr-3 md:text-sm'>Za posao</p>

          </div>
          <div className='grid grid-cols-3 mt-2 col-auto md:grid-cols-3 lg:grid-cols-3 items-center text-center'>
            <p className='text-xs link text-gray-500 mr-3 md:text-sm'>Privatnost</p>
            <p className='text-xs link text-gray-500 mr-3 md:text-sm'>Uslovi</p>
            <p className='text-xs link text-gray-500 mr-3 md:text-sm'>Podešavanja</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer