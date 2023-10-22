import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineTag } from "react-icons/ai";
import logo from './images/logo.png'


const Header = () => {
  return (
    <div className='header'>
      <Link><img className='leftImg' src={logo} alt="" /></Link>
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
