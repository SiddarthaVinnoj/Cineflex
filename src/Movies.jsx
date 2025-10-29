import React , {useState} from 'react'
import {data} from './Movies/data';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';

function Movies() {
  return (
    <>
    <Navbar />
    <div className='card-movies '>
    <div className='bodyback' style={{backgroundImage: 'url("https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/mahesh-babu-guntur-kaaram-17102474-16x9_0.jpeg?VersionId=bhNE8Tv3RgXzfaVhhh39Wr7cAq1GA7S_")'}}>
    <div className='backdata'>
    <h1>Guntur Kaaram</h1>
    <h6>Guntur Kaaram follows the story of Ramana, a fiery man with a turbulent past who returns to confront his family conflicts and political conspiracies in Guntur. Packed with mass action, powerful dialogues, and emotional family drama.</h6>
    <h3>Telugu | Action, Drama | IMDB : 6.0</h3>
    <button className='btn'><i className="fa-solid fa-play"></i>  Watch now</button>
    </div>
    </div>
    <h2 className='text'>Make your entertainment here  <i className="fa-regular fa-circle-down"></i></h2>
   {
    data.map((eachItem)=>{
      return (
        <>
        <Link to={`/movies/${eachItem.id}`} key={eachItem.id}>
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

export default Movies
