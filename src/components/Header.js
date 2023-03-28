import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   
  return (
    <div>
        <h2>Welcome</h2>
        <div><Link to='login'>Log In</Link></div>
        <div><Link to='signin'>SignIn</Link></div>
    </div>
  )
}

export default Header