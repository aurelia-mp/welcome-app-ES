import React from 'react'
import { Link } from 'react-router-dom'

const Minibar = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/Premium-Balcon-Noche-1030.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/food-drinks/restaurant" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>MINIBAR & VINO</p>
        <p className='parrafo'>Encontrará en su minibar una variedad de snacks dulces y salados, con algunas opciones más saludables.</p>
        <p className='parrafo'>AGUA</p>
        <p className='parrafo'>Para reducir el uso de plástico, encontrará agua en lata y una jarra de vidrio reusable. Un dispenser de agua está a su disposición en el lobby.
El agua de la canilla es perfectamente potable y segura para el consumo.</p>
        <p className='parrafo'>VINO</p>
        <p className='parrafo'>Seleccionamos cuidadosamente vinos tintos de bodegas boutique argentinas.</p>
        <p className='parrafo'>Encontrará los precios en la lista de minibar.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Minibar