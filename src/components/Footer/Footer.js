import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='clear'>
      <div className='footer'>
        <Link to="/"><img className='iconFooter' src='/icons/home.png' alt="home"/></Link>
        <Link to="/food-drinks"><img className='iconFooter' src='/icons/restaurant.png' alt="restaurant"/></Link>
        <Link to="/green"><img className='iconFooter' src='/icons/ecology.png' alt="green"/></Link>
        <Link to="/map"><img className='iconFooter' src='/icons/placeholder.png' alt="map"/></Link>
        <Link to="https://wa.me/5491163572374?text=Hola,%2les%20escribo%20desde%20la%20habitacion%20XX" target="_blank"><img className='iconFooter' src='/icons/whatsapp.png' alt="contact"/></Link>
      </div>
    </div>
  )
}

export default Footer