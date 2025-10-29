import React from 'react'
import Landingpage from './Landingpage'
import { Route, Routes } from 'react-router-dom'
import Watch from './Watch'
import Movies from './Movies'
import Webseries from './Webseries'
import Kids from './Kids'
import Webwatch from './Webwatch'
import Kidwatch from './Kidwatch'
import Video from './Video'
function App() {
  return (
   <Routes>
    <Route path='/' element={<Landingpage />}/>
    <Route path='/movies' element={<Movies />}/>
    <Route path='/webseries' element={<Webseries />}/>
    <Route path='/kids' element={<Kids />}/>
    <Route path='/movies/:id' element={<Watch />}/>
    <Route path='/webseries/:id' element={<Webwatch />}/>
    <Route path='/kids' element={<Kids />}/>
    <Route path='/kids/:id' element={<Kidwatch />}/>
    <Route path='/play/:id' element={<Video />}/>
   </Routes>
  )
}

export default App
