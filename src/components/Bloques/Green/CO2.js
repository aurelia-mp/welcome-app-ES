import React from 'react'
import { Link } from 'react-router-dom'

const CO2 = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/fachada.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/air" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>CO2</p>
        <p className='parrafo'>Control de emisiones de CO2:</p>
        <p className='parrafo'>Más de 800 plantas de crecimiento permanente absorben el CO2</p>
        <p className='parrafo'>Tratamos la poda para no generar CO2</p>
        <p className='parrafo'>Instalamos equipos de aire acondicionado con un gas que no daña la capa de ozono</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default CO2