/// <reference lib="dom" />
import React, { useState } from 'react'
import Hamburger from './hamburguer'
import Sidebar from './sidebar'

export default function Navbar() {
  const [ sidebar, setSidebar ] = useState(false)
  const toggleSidebar = () => (setSidebar(!sidebar))
  return (
    <header className="header">
      <Sidebar open={sidebar} toggle={toggleSidebar}/>
      <div className="header__wrapper">
        <Hamburger open={sidebar} toggle={toggleSidebar}/>
      </div>
    </header>
  )
}
