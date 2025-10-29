import React, {useState, useEffect} from 'react'
import { seriesdata } from './Webseries/seriesdata';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function Webwatch() {
  const { id } = useParams();
  const webseries = seriesdata.find((item) => item.id.toString() === id);

  if (!webseries) {
    return <h1>Webseries not found</h1>;
  }
const similarWebseries = seriesdata.filter((item) => item.genre === webseries.genre && item.id != webseries.id);
  return (
    <>
    <Navbar />
    <div className='movie-detail'>
    <div className='single card'>
       <img src={webseries.img} alt={webseries.name} className="card-img-top"/>
      </div>
      <div className='details'>
        <h1>{webseries.name}</h1>
        <p>{webseries.description}</p>
         <p>{webseries.year} | {webseries.genre} | {webseries.language}</p>
      <p>IMDB: {webseries.imdbRating}</p>
      <div className='play'>
       <Link to={`/play/${id}`}> <button className='btn'><i className="fa-solid fa-play"></i>  Watch now</button></Link>
      </div>
      </div>
      <div className='more'>
        <h3>More like this in this genre</h3>
      </div>
        <div className="similar">
  {similarWebseries.length > 0 ? (
    similarWebseries.map((m) => (
      <Link to={`/webseries/${m.id}`}><div className='card'>
      <img src={m.img} className="card-img-top"/>
      </div></Link>
    ))
  ) : (
    <p style={{ color: "gray" }}>No similar movies found.</p>
  )}
</div>
      </div>
      </>
  );

}

export default Webwatch;
