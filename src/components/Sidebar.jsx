import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import Chats from './Chats'


export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <NavBar />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar