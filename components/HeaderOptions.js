import React from 'react'
import HeaderOption from './HeaderOption'
import { CogIcon, DotsVerticalIcon, LocationMarkerIcon, MenuIcon, MicrophoneIcon, NewspaperIcon, PhotographIcon, SearchIcon, VideoCameraIcon, XIcon } from '@heroicons/react/outline';

const HeaderOptions = ({styles}) => {
  return (
    <div className={`flex items-center px-5 ${styles}`}>
        <HeaderOption Icon={SearchIcon} title="Sve" active={true} />
        <HeaderOption Icon={PhotographIcon} title="Slike" />
        <HeaderOption Icon={NewspaperIcon} title="Vesti" />
        <HeaderOption Icon={VideoCameraIcon} title="Video" />
        <HeaderOption Icon={LocationMarkerIcon} title="Mape" />
        <HeaderOption Icon={DotsVerticalIcon} title="Jos" />
    </div>
  )
}

export default HeaderOptions