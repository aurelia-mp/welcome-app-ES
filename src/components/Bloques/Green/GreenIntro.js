import React from 'react'
import { Link } from 'react-router-dom'

const GreenIntro = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/green2.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/energy" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>GREEN</p>
        <p className='parrafo'>INTRO. Palo Santo es el primer hotel urbano sustentable de Latinoamérica.
Construido según normas LEED (Leadership in Energy and Environmental Design), Palo Santo es un hotel responsable con una arquitectura verde basada en la presencia de jardines verticales y un programa ambiental abarcativo que comprende las diferentes ramas de la edificación sustentable.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default GreenIntro