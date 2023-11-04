import React from 'react'
import { AiOutlineHeart, AiOutlineStar, AiOutlineTag, AiFillHeart, AiFillTag } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFavourite, setHandleFavouriteDelete, setHandleWatchlistDelete, setWatchlist } from '../../feature/counterSlice';
const API_IMG = "https://image.tmdb.org/t/p/w500";

const MainCard = () => {

    const selector = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    return (
        <div className='container' style={{ display: "flex", flexWrap: "wrap", justifyContent: " space-between" }}>
            {
                selector.search.results ?
                    selector.search.results?.map((item, index) => {
                        return (

                            <div className='moviesCardContainer' key={index}>

                                {
                                    <>
                                        <div className='movieRateHeart' >
                                            <div className='starVoteContainer' >
                                                <p> <AiOutlineStar className='star' />
                                                    {item.vote_average}</p>
                                            </div>
                                            <div className='heartContainer'>
                                            {item.heartTagValue === true ? <AiFillHeart className='heart' onClick={() => dispatch(setHandleFavouriteDelete(item.id))} /> : <AiOutlineHeart onClick={() => dispatch(setFavourite(item.id))} className='heart' />}
                                            </div>
                                        </div>
                                        <NavLink to={`/details/${item.id}`} >
                                            <img className='imageLogo' src={API_IMG + item.poster_path} alt="" />
                                        </NavLink>
                                        <div className='movieNameTitle'>
                                            <p>{item.original_title.slice(0, 26)}</p>
                                            {item.watchlistValue === true ? <AiFillTag className='aiOutlineTag' onClick={() => dispatch(setHandleWatchlistDelete(item.id))} /> : <AiOutlineTag className='aiOutlineTag' onClick={() => dispatch(setWatchlist(item.id))} />}
                                        </div>

                                    </>
                                }
                            </div>
                        )
                    }) :
                    selector.data.results?.map((item, index) => {

                        return (
                            <div className='moviesCardContainer' key={index}>

                                <div className='movieRateHeart'>
                                    <div className='starVoteContainer' >
                                        <AiOutlineStar className='star' />
                                        {item.vote_average}
                                    </div>
                                    <div className='heartContainer'>
                                        {item.heartTagValue === true ? <AiFillHeart className='heart' onClick={() => dispatch(setHandleFavouriteDelete(item.id))} /> : <AiOutlineHeart onClick={() => dispatch(setFavourite(item.id))} className='heart' />}
                                    </div>
                                </div>
                                <NavLink to={`/details/${item.id}`} >
                                    <img className='imageLogo' src={API_IMG + item.poster_path} alt="" />
                                </NavLink>
                                <div className='movieNameTitle'>
                                    <p>{item.original_title.slice(0, 26)}</p>
                                    {item.watchlistValue === true ? <AiFillTag className='aiOutlineTag' onClick={() => dispatch(setHandleWatchlistDelete(item.id))} /> : <AiOutlineTag className='aiOutlineTag' onClick={() => dispatch(setWatchlist(item.id))} />}
                                </div>
                            </div>
                        )
                    })
            }

        </div>

    )
}

export default MainCard
