import React from 'react'
import { Link } from 'react-router-dom'

const Plants = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/plants.jpg" alt="plantas en jardin" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>ARQUITECTURA VERDE</p>
        <p className='parrafo'>El edificio de Palo Santo Hotel se caracteriza por su estructura verde. Son verdes sus fachadas, sus patios, sus jardines, sus balcones, sus terrazas. Las fachadas cuentan con estructuras de hierro especialmente diseñadas para guiar el crecimiento de dos jardines verticales de 28 metros de altura. En total, más de 900 plantas componen los jardines verticales del hotel.</p>
        <p className='parrafo'>La cortina de plantas del hotel tiene, además de su presencia estética, un objetivo sustentable. Por un lado, los jardines verticales constituyen una aislación natural del edificio. Por otro lado, las plantas de crecimiento permanente son una excelente fuente de recuperación de emisiones de CO2.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Plants