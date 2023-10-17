import React from 'react'
import { Link } from 'react-router-dom'

const PresentacionGreen = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
    <img src="/fotos/Psanto13-3000px.jpg" alt="flechaDerecha" />
    </div>

    <Link to="/green" className='linkInterno'>
      <h1 className="tituloInterno">green</h1>
    </Link>

    <div className='fotoPresentacionFood'>
    <img src="/fotos/Patio-General-2_8004-1000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='contenedorExplore'>
      <Link to="/green" className='linkInterno'>
        <h2 className='explore'>+ Click para explorar</h2>
      </Link>

        <div className='lineaIzquierdaSinContenedor'>
            <img src="/icons/line.png" alt="flechaDerecha" />
        </div>
    </div>

    </>
  )
}

export default PresentacionGreen