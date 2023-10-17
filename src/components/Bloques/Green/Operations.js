import React from 'react'
import { Link } from 'react-router-dom'

const Operations = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/operations.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/air" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/plants" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>OPERACIONES</p>
        <p className='parrafo'>Reduciendo nuestro impacto a través de los servicios y operaciones:</p>
        <p className='parrafo'>Separación de residuos</p>
        <p className='parrafo'>Programa de préstamo de bicicletas</p>
        <p className='parrafo'>Lavandería certificada y de bajo impacto</p>
        <p className='parrafo'>Productos de limpieza de bajo impacto</p>
        <p className='parrafo'>Amenidades eco-friendly</p>
        <p className='parrafo'>Eco-friendly amenities</p>
        <p className='parrafo'>Uso limitado de papelería</p>
        <p className='parrafo'>Uso de servidores eco-certificados para el hosting</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Operations