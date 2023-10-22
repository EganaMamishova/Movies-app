import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Header'

const DetailedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default DetailedLayout
