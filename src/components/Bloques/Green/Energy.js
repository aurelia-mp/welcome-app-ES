import React from 'react'
import { Link } from 'react-router-dom'

const Energy = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/energy.jpeg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>ENERGÍA</p>
        <p className='parrafo'>Uso racional de la energía:</p>
        <p className='parrafo'>Uso de leds y artefactos de bajo consumo</p>
        <p className='parrafo'>Detectores de movimiento para evitar consumo innecesario</p>
        <p className='parrafo'>Equipos de aire acondicionado VRV con sistema Inverter</p>
        <p className='parrafo'>Optimización de las aislaciones</p>
        <p className='parrafo'>Ascensores de bajo consumo</p>
        <p className='parrafo'>Tarjetas de corte de energía en las habitaciones</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Energy