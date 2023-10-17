import React from 'react'
import { Link } from 'react-router-dom'

const Insulation = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/terrace.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/materials" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/CO2" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>AISLACIONES</p>
        <p className='parrafo'>Maximización de las aislaciones:</p>
        <p className='parrafo'>Ventanas con DVH (vidrios dobles)</p>
        <p className='parrafo'>Aislación acústica y térmica de los pisos y paredes</p>
        <p className='parrafo'>Utilizamos jardines verticales verdes y enredaderas como método de aislación</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Insulation