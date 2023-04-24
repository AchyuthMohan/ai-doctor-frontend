import React from 'react'
import './MainLayout.css'
const MainLayout = ({children}) => {
  return (
    <div  className='mainlayout'>
      {/* <Navbar/> */}
      {children}
    </div>
  )
}

export default MainLayout