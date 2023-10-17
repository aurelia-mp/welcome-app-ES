import React from 'react'
import { Link } from 'react-router-dom'

const FoodHome = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/desayuno.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks/restaurant" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/food-drinks/minibar" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>DESAYUNO</p>
        <p className='parrafo'>Nuestro desayuno buffet se sirve en el restaurante en planta baja.</p>
        <p className='parrafo'>Horarios de desayuno:</p>
        <p className='parrafo'>Lunes a viernes: 7-10:30</p>
        <p className='parrafo'>Sábados, domingos y feriados: 8-11</p>
        <p className='parrafo'>EARLY BREAKFAST</p>
        <p className='parrafo'>Si tiene un vuelo muy temprano, podemos prepararle un desayuno reducido. Por favor, consulte el día anterior con Recepción. No viaje con la panza vacía :)</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default FoodHome