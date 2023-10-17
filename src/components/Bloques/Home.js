import React, {useEffect, useContext} from 'react'
import { SessionContext } from '../../context/sessionContext'
import UsefulInfo from './UsefulInfo'
import Map from './Map'
import PresentacionFood from './PresentacionFood'
import PresentacionGreen from './PresentacionGreen'

const Home = () => {
  const {esPrimerIngreso, ingresar} = useContext(SessionContext)

  useEffect(()=>{
    if(esPrimerIngreso === true){
      setTimeout(()=>{
        ingresar()
      }, 3000)
    }
  })


  return (
    <div>
      {!esPrimerIngreso ?
        <div>
          <img className="imagenHome" src="/fotos/Psanto04-1000px.jpg" alt="Palo Santo Hotel façade"/>
          <h1 className="titulo">Descubra Palo Santo</h1>
          <div className='lineaCentro'>
            <img src="/icons/line.png" alt="flechaDerecha" />
          </div>
          <img className="imagenHome" src="/fotos/PremiumPiso8_MG_8285-1000px.jpg" alt="Palo Santo Hotel façade"/>

          <UsefulInfo />
          <PresentacionFood/>
          <PresentacionGreen/>
          <Map />
        </div>
      :
        <div className="prehome">
          <h1 className="upper">Palo Santo Hotel</h1>
          <div className=''>
            <img src="/icons/line.png" alt="flechaDerecha" />
          </div>
        </div>
      }

    </div>
  )
}

export default Home