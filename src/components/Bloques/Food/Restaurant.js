import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/patioNoche.jpg" alt="patio de noche" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks/minibar" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/food-drinks" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>RESTAURANTE CHARQUI</p>
        <p className='parrafo'>Ubicado en planta baja del hotel, el restaurante Charqui ofrece cocina argentina e internacional.</p>
        <p className='parrafo'>Encontrará el menú y propuesta en su Instragram:</p>
        <p className='parrafo'><a href="https://instagram.com/charquirestaurantok?igshid=NTc4MTIwNjQ2YQ==" rel="noreferrer" target="_blank">@charquirestaurantok</a></p>
        <p className='parrafo'>Horarios de apertura:</p>
        <p className='parrafo'>Abierto para el brunch, almuerzo y cena de miércoles a sábado.
Abierto solamente para el brunch y almuerzo los martes y domingos</p>
        <p className='parrafo'>Cerrado los lunes</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Restaurant