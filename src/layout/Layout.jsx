import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
