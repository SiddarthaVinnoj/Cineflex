import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
function Welcomepage() {
  return (
    <>
    <div className='main' style={{backgroundImage: 'url("https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg")',  backgroundSize: "cover",     // covers entire screen
    backgroundPosition: "center",
    height: "91.33vh",        
    width: "100vw"}}>
    <div className='home-page'>
     <div className='title'>
        <h1>CineFlex</h1>
     </div>
     <div className='description'>
        <h3>Your World of Movies, Webseries & Kids Entertainment – All in One Place</h3>
        <p>Stream anytime, anywhere</p>
     </div>
     <div className='what'>
        <h4>What Do You Want to Watch?</h4>
     </div>
     <div className='all'>
     <div className='box'>
      <img src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg" alt="" />
      <p>Blockbusters and classics – all in one place.</p>
      <Link to="/movies"><button className='btn'>Watch Now</button></Link>
     </div>
      <div className='box'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4M6KsZWRS3BYhNrMjH_EwY8pFQLOAo2AbSFB_runZ5tNM8aXWX3yYbb0nRr0BCNLa_k&usqp=CAU" alt="" />
      <p>Binge-worthy shows you can’t stop watching.</p>
      <Link to="/webseries"><button className='btn'>Watch Now</button></Link>
     </div>
      <div className='box'>
      <img src="https://static.vecteezy.com/system/resources/previews/007/380/516/non_2x/colorful-kids-logo-children-logo-designs-template-design-element-for-logo-poster-card-banner-emblem-t-shirt-illustration-vector.jpg" alt="" />
      <p>Cartoons and adventures for every kid.</p>
      <Link to='/kids'><button className='btn'>Watch Now</button></Link>
      </div>
     </div>
     <h3 className='foot'>Sit back, relax, and enjoy endless entertainment</h3>
    </div>
    </div>
    </>
  )
}

export default Welcomepage
