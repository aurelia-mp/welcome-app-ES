import React from 'react'
import { Link } from 'react-router-dom'

const Water = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/_MG_3823-ZoomCascada3000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/energy" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/materials" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>AGUA</p>
        <p className='parrafo'>Empleo racional del agua:</p>
        <p className='parrafo'>Recuperamos el agua de lluvia</p>
        <p className='parrafo'>Usamos inodoros eficientes con sistema de doble descarga</p>
        <p className='parrafo'>Disponemos de medios de absorción de agua de lluvia para minimizar la carga al sistema pluvial de la ciudad
</p>
        <p className='parrafo'>Utilizamos riego por goteo
</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Water