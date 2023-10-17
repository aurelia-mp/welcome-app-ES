import React from 'react'
import { Link } from 'react-router-dom'

const Air = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/deluxe.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/CO2" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/operations" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>AIRE</p>
        <p className='parrafo'>Aire puro, reduciendo la contaminación:</p>
        <p className='parrafo'>El aire que llega a las habitaciones está filtrado</p>
        <p className='parrafo'>El aire externo entra a las habitaciones dosificado y regulado para que sea puro y optimizar el consumo energético</p>
        <p className='parrafo'>Utilizamos papel en vez de pintura en habitaciones para reducir los efectos contaminantes de los solventes</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Air