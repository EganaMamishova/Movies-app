import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AiOutlineHeart, AiOutlineStar, AiOutlineTag } from 'react-icons/ai';


const Details = () => {

  const { id } = useParams();
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const [dataDetail, setDataDetail] = useState("")

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=07989e510be31f37e529531744bfc3ec&language=en-US`)
      .then(resp => resp.json())
      .then(data => setDataDetail(data))

  },[id])

  console.log(dataDetail);
  let backdrop = `https://image.tmdb.org/t/p/original/${dataDetail.backdrop_path}`

  return (
    <div>
      <div className='topImgContainer'>
        <img className='detailTopImg' src={API_IMG + backdrop} alt='' />
      </div>
      <div className='detailTopTitle'>
        <p>{dataDetail.tagline}</p>
        <h1>{dataDetail.original_title}</h1>
      </div>
      <div className='bottomDetail'>
        <div className='bottomLeftPart'>
          <img className='bottomLeftPartImg' src={API_IMG + backdrop} alt="" />
        </div>
        <div className="bottomRightPart">
          <div>
            <h3>Part of the journey is the end.</h3>
          </div>
          <div>
            <p>{dataDetail.overview}</p>
          </div>
          <div className="starContainer">
            <AiOutlineStar className='star' />
            <div className='count'>{dataDetail.vote_average}</div>
          </div>
          <div className='BottomHeartTagContainer' >
            <AiOutlineHeart className='detailedHeart' />
            <AiOutlineTag className='detailedWatchList' />
          </div>
          <div>
            <p>Type</p>
            <h4>Movie</h4>
            <p>Relase Date:</p>
            <h4>{dataDetail.release_date}</h4>
            <p>Run time</p>
            <h4>181 min</h4>
            <p>Genres</p>
            <h4>Adventure, Sciense Fiction, Action</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
