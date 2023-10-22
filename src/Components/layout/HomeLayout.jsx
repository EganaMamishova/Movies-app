import React from 'react'
import { Outlet } from 'react-router'
import Movies from '../Movies'
import Header from '../Header/Header'

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Movies />
    </div>
  )
}

export default HomeLayout
