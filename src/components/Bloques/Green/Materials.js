import React from 'react'
import { Link } from 'react-router-dom'

const Materials = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/materials.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>MATERIALES</p>
        <p className='parrafo'>Materiales duraderos y certificados:</p>
        <p className='parrafo'>Utilizamos maderas certificadas por FSC</p>
        <p className='parrafo'>Usamos mármoles y porcelanatos porque son materiales de alta duración</p>
        <p className='parrafo'>Empleamos materiales nobles: hierro, piedras, hormigón, maderas</p>
        <p className='parrafo'>Empleamos algodones naturales</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Materials