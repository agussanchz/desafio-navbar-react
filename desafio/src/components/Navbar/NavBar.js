import React from 'react'
import logo from "../../utils/img/icono.jpg"

export default function NavBar() {
  return (
    <header className='header'>  
        <div className="nav-logo">
            <a href=""><img src={logo}/></a>
        </div>

        <nav className='nav'>
            <ul className='nav-ul'>
                <li className='nav-li'> <a href="">Inicio</a> </li>
                <li className='nav-li'> <a href="">Contacto</a> </li>
                <li className='nav-li'> <a href="">Nosotros</a> </li>
            </ul>
        </nav> 
        <div className='nav-espacio'><a href=""></a></div>
    </header>
  
  )
}
