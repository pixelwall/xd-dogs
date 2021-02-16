/// <reference lib="dom" />
import React, { useState } from 'react'
import Hamburger from './hamburguer'
import Sidebar from './sidebar'
import s from './navigation.module.css'

export default function Navbar() {
  const [ sidebar, setSidebar ] = useState(false)
  const toggleSidebar = () => (setSidebar(!sidebar))
  return (
    <header className={s.header}>
      <Sidebar open={sidebar} toggle={toggleSidebar}/>
      <div className={s.headerWrapper}>
        <Hamburger open={sidebar} toggle={toggleSidebar}/>
      </div>
    </header>
  )
}
