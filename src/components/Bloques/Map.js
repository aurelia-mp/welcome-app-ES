import React from 'react'

const Map = () => {
  return (
    <div>
        <h2 className='tituloMap'>Las recomendaciones de nuestro Conserje</h2>

        <div className='mapa'>
          <a href="https://www.google.com/maps/d/u/0/edit?mid=1nnBsL8jvSiZbWANTmIWOOm8raCYCCPU&usp=sharing" rel="noreferrer" target='_blank'>
            <img src="/fotos/mapaNegro.jpg" alt="Mapa Buenos Aires" />
          </a>
        </div>

        <p className='textoMapa'>Seleccionamos especialmente los mejores lugares alrededor del hotel: bares, restaurantes and boutiques<br></br> Haga click en el mapa para explorar</p>

  
    </div>
  )
}

export default Map