import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import Movies from './Movies'
import Welcomepage from './Welcomepage'

function Landingpage() {
  return (
    <div>
      <Navbar />
      <Welcomepage />
    </div>
  )
}

export default Landingpage
