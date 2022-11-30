import React from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useStateContext } from '../context/ContextProvider';

const Navbar = () => {
  const {activeMenu, setActiveMenu} = useStateContext(); 

  return (
    <header className='flex justify-between items-center h-14 px-4 bg-gray-300'>
      <div className='flex items-center gap-2'>
        {activeMenu ? <MenuOpenIcon className='cursor-pointer text-gray-600' onClick={()=>setActiveMenu(false)} /> : <MenuIcon className='cursor-pointer text-gray-600' onClick={()=>setActiveMenu(true)} />}
        <form action="" className='flex items-center px-2 h-8 bg-white '>
          <input type="search" placeholder='search...' className='outline-none h-full' />
          <SearchIcon/>
        </form>
      </div>
      <div className='flex items-center gap-2'>
        <ChatBubbleIcon/>
        <NotificationsIcon/>
        <div>
          <img src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-8 w-8 rounded-full object-cover' />
        </div>
        <div>Hi, Jhon</div>
        <KeyboardArrowDownIcon className='cursor-pointer' />
      </div>
    </header>
  )
}

export default Navbar