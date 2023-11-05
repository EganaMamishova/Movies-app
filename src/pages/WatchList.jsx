import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setHandleWatchlistDelete } from '../feature/counterSlice';
import { AiFillHeart, AiFillTag, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const API_IMG = "https://image.tmdb.org/t/p/w500";


const WatchList = () => {
  
  const selector = useSelector((state)=>state.counter)
  const dispatch = useDispatch(); 
  
  return (
    <div className='container' style={{ display: "flex",width:"1300px", margin:"0 auto", flexWrap: "wrap", justifyContent: " space-between" }}>
    {
        selector.watchlist?.map((item, index)=>(
          <div className='moviesCardContainer' key={index}>

          <div className='movieRateHeart'>
              <div className='starVoteContainer' >
                  <AiOutlineStar className='star' />
                  {item.vote_average}
              </div>
              <div className='heartContainer'>
             {/*  {item.heartTagValue === true ? <AiFillHeart className='heart' /> : <AiOutlineHeart className='heart' />} */}
              </div>
          </div>
          <NavLink to={`/details/${item.id}`} >
              <img className='imageLogo' src={API_IMG + item.poster_path} alt="" />
          </NavLink>
          <div className='movieNameTitle'>
              <p>{item.original_title.slice(0, 26)}</p>
              <AiFillTag onClick={()=>dispatch(setHandleWatchlistDelete(item.id))} className='aiOutlineTag' />
          </div>
      </div>
        ))
    }
    
  </div>
  
  )
}

export default WatchList
