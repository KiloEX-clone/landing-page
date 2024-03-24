import React from 'react'
import Navbar from '../_Components/Navbar'

const layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout