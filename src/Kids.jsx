import React from 'react'
import { Link } from 'react-router-dom'
import {kidsdata} from "./Kids/kidsdata"
import Navbar from './Navbar'
function Kids() {
  return (
     <>
    <Navbar />
    <div className='card-movies '>
    <div className='bodyback' style={{backgroundImage: 'url("https://www.mikrosanimation.com/app/uploads/2023/01/KungFuPanda-still.jpg")'}}>
    <div className='backdata'>
    <h1 >Kung Fu Panda</h1>
    <h6>The Dragon Warrior must battle the savage Tai Lung as China's fate hangs in the balance.</h6>
    <h3>English | Animation, Action, Comedy | IMDB : 7.6</h3>
    <button className='btn'><i className="fa-solid fa-play"></i>  Watch now</button>
    </div>
    </div>
    <h2 className='text'>Make your entertainment here  <i className="fa-regular fa-circle-down"></i></h2>
   {
    kidsdata.map((eachItem)=>{
      return (
        <>
        <Link to={`/kids/${eachItem.id}`} key={eachItem.id}>
       <div className="card">
  <img src={eachItem.img} className="card-img-top" alt="..." />
  </div>
  </Link>
  </>
      )
    })
    
   }
</div>
    </>
  )
}

export default Kids
