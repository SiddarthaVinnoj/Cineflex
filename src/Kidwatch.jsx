import React from 'react'
import { kidsdata } from './Kids/kidsdata';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
function Kidwatch() {
    const { id } = useParams();
  const kids = kidsdata.find((item) => item.id.toString() === id);

  if (!kids) {
    return <h1>Movie not found</h1>;
  }
  const similarkids = kidsdata.filter((item) => item.genre === kids.genre && item.id != kids.id);
  return (
     <>
    <Navbar />
    <div className='movie-detail'>
    <div className='single card'>
       <img src={kids.img} alt={kids.name} className="card-img-top"/>
      </div>
      <div className='details'>
        <h1>{kids.name}</h1>
        <p>{kids.description}</p>
         <p>{kids.year} | {kids.genre} | {kids.language}</p>
      <p>IMDB: {kids.imdbRating}</p>
      <div className='play'>
       <Link to={`/play/${id}`}> <button className='btn'><i className="fa-solid fa-play"></i>  Watch now</button></Link>
      </div>
      </div>
       <div className='more'>
        <h3>More like this in this genre</h3>
      </div>
        <div className="similar">
  {similarkids.length > 0 ? (
    similarkids.map((m) => (
      <Link to={`/kids/${m.id}`}><div className='card'>
      <img src={m.img} className="card-img-top"/>
      </div></Link>
    ))
  ) : (
    <p style={{ color: "gray" }}>No similar movies found.</p>
  )}
</div>
      </div>
      </>
  )
}

export default Kidwatch
