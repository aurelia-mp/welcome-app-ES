import React from 'react'

import Home from '../Bloques/Home'
import FoodHome from '../Bloques/Food/FoodHome'
import Minibar from '../Bloques/Food/Minibar'
import Restaurant from '../Bloques/Food/Restaurant'
import {Routes, Route} from 'react-router-dom'
import GreenIntro from '../Bloques/Green/GreenIntro'
import Energy from '../Bloques/Green/Energy'
import Plants from '../Bloques/Green/Plants'
import Water from '../Bloques/Green/Water'
import Materials from '../Bloques/Green/Materials'
import Insulation from '../Bloques/Green/Insulation'
import CO2 from '../Bloques/Green/CO2'
import Air from '../Bloques/Green/Air'
import Operations from '../Bloques/Green/Operations'
import Map from '../Bloques/Map'

const Main = () => {
  return (
    <div className='containerMain'>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/food-drinks' element={<FoodHome/>} />
        <Route path='/food-drinks/minibar' element={<Minibar/>} />
        <Route path='/food-drinks/restaurant' element={<Restaurant/>} />
        <Route path='/green' element={<GreenIntro/>} />
        <Route path='/green/energy' element={<Energy/>} />
        <Route path='/green/plants' element={<Plants/>} />
        <Route path='/green/water' element={<Water/>} />
        <Route path='/green/materials' element={<Materials/>} />
        <Route path='/green/insulation' element={<Insulation/>} />
        <Route path='/green/CO2' element={<CO2/>} />
        <Route path='/green/air' element={<Air/>} />
        <Route path='/green/operations' element={<Operations/>} />
        <Route path='/map' element={<Map/>} />

    </Routes>
    </div>
  )
}

export default Main