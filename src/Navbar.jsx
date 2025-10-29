import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Movies from './Movies'

function Navbar() {
  const [Color, setColor] = useState(false);

  // Persist body class
  useEffect(() => {
    if (Color) {
      document.body.classList.add('body-light');
      document.body.classList.remove('body-dark');
    } else {
      document.body.classList.add('body-dark');
      document.body.classList.remove('body-light');
    }
  }, [Color]);
  const handleColor = () => {
    setColor(!Color);
  };
  return (
    <>
    <nav className={Color ? "navbar-dark navbar  border-bottom border-body fixed-top" : " navbar   border-bottom border-body fixed-top"} data-bs-theme="dark">
        <div className="navbody">
         <ul>
          <Link to='/' style={{textDecoration: "none"}}> <li className='navItem'>Home</li>  </Link>
           <Link to='/movies' style={{textDecoration: "none"}}> <li className='navItem'>Movies</li> </Link>
            <Link to='/webseries' style={{textDecoration: "none"}}><li className='navItem'>Webseries</li></Link>
            <Link to='/kids' style={{textDecoration: "none"}}><li className='navItem'>Kids</li></Link>
         </ul>
          <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className={Color ? "container-fluid-dark form-control me-2" : " container-fluid form-control me-2" } type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn searchbtn" type="submit">Search</button>
    </form>
  </div>
  <div className='auth'>
    <button className='btn'>SignIn</button>
    <button className='btn'>SignUp</button>
  </div>
  <div className={Color ? "modes-dark" : "modes-light"}>
    <button onClick={handleColor} className=" btn mode">{Color ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</button>
  </div>
  </div>
     </nav>
    </>
  )
}

export default Navbar
