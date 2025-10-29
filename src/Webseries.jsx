import React from 'react'
import Navbar from './Navbar'
import {seriesdata} from './Webseries/seriesdata';
import { Link } from 'react-router-dom';
function Webseries() {
  return (
   <>
    <Navbar />
    <div className='card-movies '>
    <div className='bodyback' style={{backgroundImage: 'url("https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQdJ5zNiFdqp68upLroZ4-K9kYdbZAwlVX7I-UQrcYw8N05mmdam79LvRASRWx1rY5Sh4L8pLXU4wyH51VvnVWuDqPImpOKPxKIIZr0_tVJR2cEGTbquL8HIQcjYBxCTfvgQekGNcq531JbLCerZnV8CFvjI.jpg?r=a04")'}}>
    <div className='backdata'>
    <h1 >Money Heist</h1>
    <h6>A criminal mastermind plans the biggest heist in recorded history—to print billions of euros in the Royal Mint of Spain.</h6>
    <h3>Spanish | Action, Crime | IMDB : 8.3</h3>
    <button className='btn'><i className="fa-solid fa-play"></i>  Watch now</button>
    </div>
    </div>
    <h2 className='text'>Make your entertainment here  <i className="fa-regular fa-circle-down"></i></h2>
   {
    seriesdata.map((eachItem)=>{
      return (
        <>
        <Link to={`/webseries/${eachItem.id}`} key={eachItem.id}>
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

export default Webseries
