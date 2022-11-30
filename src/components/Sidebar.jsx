import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavLinks } from '../assets/data'


const Sidebar = () => {
  return (
    <aside className='felx items-center h-screen overflow-scroll'>
      <h2 className='text-3xl text-white text-center border-b-orange-50 mt-2'>Ecommerce</h2>
      {NavLinks.map(item => (
        <div key={item.id} className="pl-2 mt-2">
          <span className='uppercase text-l text-gray-500'>{item.title}</span>
          {item.links.map(link => (
            <NavLink to={`/${link.name}`} key={link.name} className="flex p-1 ml-2 text-gray-300 hover:bg-gray-700">
              {link.icon}
              <span className='ml-2 capitalize'>{link.name}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  )
}

export default Sidebar