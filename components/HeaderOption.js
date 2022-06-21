import React from 'react'

const HeaderOption = ({ Icon, title, active }) => {
  return (
    <div className={`flex items-center mr-1 ml-1 cursor-pointer md:mr-6 pb-2 ${active && "border-b-2 border-blue-500"}`}>
        <Icon className={`w-5 h-5 hidden md:inline mr-1 ${active ? "text-blue-500" : "text-gray-500"}`} />
        <span className={`text-sm ${active ? "text-blue-500 font-semibold" : "text-gray-600"}`}>{title}</span>
    </div>
  )
}

export default HeaderOption