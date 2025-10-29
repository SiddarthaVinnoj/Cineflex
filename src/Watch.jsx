import React, {useState, useEffect} from 'react'
import { data } from './Movies/data';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
function Watch() {
  const { id } = useParams();
  const movie = data.find((item) => item.id.toString() === id);

  if (!movie) {
    return <h1>Movie not found</h1>;
  }
const similarMovies = data.filter((item) => item.genre === movie.genre && item.id != movie.id);
  return (
    <>
    <Navbar />
    <div className='movie-detail'>
    <div className='single card'>
       <img src={movie.img} alt={movie.name} className="card-img-top"/>
      </div>
      <div className='details'>
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
         <p>{movie.year} | {movie.genre} | {movie.language}</p>
      <p>IMDB: {movie.imdbRating}</p>
      <div className='play'>
        <Link to={`/play/${id}`}><button className='btn'><i className="fa-solid fa-play"></i>  Watch now</button></Link>
      </div>
      </div>
      <div className='more'>
        <h3>More like this in this genre</h3>
      </div>
     <div className="similar">
  {similarMovies.length > 0 ? (
    similarMovies.map((m) => (
      <Link to={`/movies/${m.id}`}><div className='card'>
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

export default Watch;
