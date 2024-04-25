import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <h3>Financier</h3>
       <div className="list">
       <ul className='navbar_list'>
            <li>Home</li>
            <li>Solutions</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <p><i class="fa-solid fa-phone"></i> +994 51 578 13 13</p>
       </div>
       <div className="navbar_icon">  <i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Navbar