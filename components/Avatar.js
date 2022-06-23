import React from 'react'
import Image from 'next/image';

const Avatar = ({ url }) => {
  return (
    <div className="h-8 w-8 relative cursor-pointer transition duration-150 transform hover:scale-110">
        <Image loading="lazy" src={url} alt="Profile picture" layout="fill" objectFit="cover" className="rounded-full" />
    </div>
  )
}

export default Avatar