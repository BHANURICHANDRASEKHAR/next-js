import React from 'react'
import navbarcss from './navbar.module.css'
export default function Navbar() {
  return (
    <div>
    <nav className={navbarcss.nav}>
    <ul>
    <li><a href='/'>Home</a></li>
    <li><a href='/about'>About</a></li>
    <li><a href='/users'>User</a></li>
    <li><a href='/login'>Login</a></li>
    <li><a href='/signup'>Signup</a></li>

    </ul>
    </nav>
    </div>
  )
}
