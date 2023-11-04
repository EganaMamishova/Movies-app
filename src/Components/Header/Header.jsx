import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineTag } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from './images/logo.png'
import { useSelector } from 'react-redux';


const Header = () => {

  const [show, setShow] = useState(false);
  const selector = useSelector((state) => state.counter)


  return (
    <div className='header'>
      <Link><img className='leftImg' src={logo} alt="" /></Link>
      <div className='MenuClose'>
        <GiHamburgerMenu onClick={() => setShow(!show)} className='burgerMenu' />
        <div className={show ? "open" : "close"}>
          <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='/'>Latest</NavLink>
          <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='nowplaying/now_playing'>Now Playing</NavLink>
          <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='popular/popular'>Popular</NavLink>
          <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='topRated/top_rated'>Top Rated</NavLink>
          <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='upcoming/upcoming'>Upcoming</NavLink>
          <NavLink to="favourite"> <AiOutlineHeart className='heart' /></NavLink>
          <NavLink to="watchList"><AiOutlineTag className='watchList' /></NavLink>
        </div>

      </div>

      <div className='rightSide'>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='/'>Latest</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='nowplaying/now_playing'>Now Playing</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='popular/popular'>Popular</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='topRated/top_rated'>Top Rated</NavLink>
        <NavLink activeclassname='active' className='headerList' style={{ textDecoration: 'none' }} to='upcoming/upcoming'>Upcoming</NavLink>
        <NavLink to="favourite">
          <div className='boxHeart'>
            <AiOutlineHeart className='heart' />
            <div className='count' >{selector.countFavourite}</div>
          </div>
        </NavLink>
        <NavLink to="watchList">
          <div className='boxTag'>
            <AiOutlineTag className='watchList' />
            <div className='count'>{selector.countWatchlist}</div>
          </div>

        </NavLink>
      </div>
    </div>
  )
}

export default Header
