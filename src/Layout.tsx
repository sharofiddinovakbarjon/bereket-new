import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, HeaderTop } from "@/components"

const Layout: React.FC = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
    </>
  )
}

export default Layout