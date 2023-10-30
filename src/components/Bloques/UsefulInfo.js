import React from 'react'

const UsefulInfo = () => {
  return (
    <>
    <div className='contenedorGrande'>
      <div className='contenedorGeneral'>

        <div className='in'>
          <p className='palabraIn'>IN</p>
          <img src="/icons/flechaIzquierda.png" alt="flechaIzquierda" />
          <p className='tresPM'>15 HS</p>
        </div>

        <div className='in'>
          <p className='palabraIn'>OUT</p>
          <img src="/icons/flechaDerecha.png" alt="flechaDerecha" />
          <p className='tresPM'>12 HS</p>
        </div>

        <div className='frase'>
          <h3 className='fraseIt'>No queremos que se vaya. Pero cómo dice el proverbio italiano: “cosa bella passa è non dura” (las cosas buenas terminan y no duran).</h3>
        </div>

        <div className="lineaIzquierda">
          <img src="/icons/line.png" alt="linea" />
        </div>


      <div className='bloquesInternos'>
        <img src="/icons/smoking.png" alt="no fumador" />
          <div className='texto'>
            <p>Hotel libre de humo</p>
            <p>Incluidos los balcones</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/wifi.png" alt="wifi" />
          <div className='texto'>
            <p>Contraseña wifi</p>
            <p>bonpland</p>
          </div>
      </div>

      <div>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/bicycle.png" alt="bicicletas" />
          <div className='texto'>
            <p>por favor, ¡llévenme</p>
            <p>a pasear!</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/piscina.png" alt="pileta" />
          <div className='texto'>
            <p>todos los días</p>
            <p>de 9 a 21 HS</p>
            <p>piso 8</p>
          </div>
      </div>

      <div>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/aspiradora.png" alt="aspiradora" />
          <div className='texto'>
            <p>limpieza diaria de las habitaciones:</p>
            <p>entre las 9 y las 16hs</p>
          </div>
      </div>


      </div>

      <img className='imagenHome' src="/fotos/1604 - Guest Bikes - Garden - DSC_0299 - 1000px.jpg" alt="bicletas para huéspedes" />
    
      <div className='in'>
          <p className='palabraBike'>BICIS</p>
          <p className='textoBike'>Visite Buenos Aires con nuestras bicicletas de cortesía. Disponibles en Recepción, por orden de llegada. </p>
      </div>


    </div>
    </>
  )
}

export default UsefulInfo