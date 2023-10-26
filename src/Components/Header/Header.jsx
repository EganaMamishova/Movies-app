import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineTag } from "react-icons/ai";
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from './images/logo.png'


const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='header'>
      <Link><img className='leftImg' src={logo} alt="" /></Link>
     <div className='MenuClose'>
      <GiHamburgerMenu onClick={()=>setShow(!show)} className='burgerMenu'/>
        <div className={show ? "open"  :"close"  }>
           <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='/'>Latest</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='nowplaying/now_playing'>Now Playing</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='popular/popular'>Popular</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='topRated/top_rated'>Top Rated</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='upcoming/upcoming'>Upcoming</NavLink>
        <NavLink to="heart"> <AiOutlineHeart className='heart' /></NavLink>
        <NavLink to="watchList"><AiOutlineTag className='watchList' /></NavLink>
        </div>
      
      </div> 
       
      <div className='rightSide'>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='/'>Latest</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='nowplaying/now_playing'>Now Playing</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='popular/popular'>Popular</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='topRated/top_rated'>Top Rated</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='upcoming/upcoming'>Upcoming</NavLink>
        <NavLink to="heart"> <AiOutlineHeart className='heart' /></NavLink>
        <NavLink to="watchList"><AiOutlineTag className='watchList' /></NavLink>
      </div>
    </div>
  )
}

export default Header
