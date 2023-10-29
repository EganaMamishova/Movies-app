import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../feature/counterSlice';
import { useParams } from 'react-router';


const NowPlaying = () => {


  const { name } = useParams()
  const selector = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(selector.data);
  useEffect(() => {
    const Key = "07989e510be31f37e529531744bfc3ec";

    fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(data => dispatch(setData(data)))

  }, [dispatch, name])

  return (
    <div>

    </div>
  )
}

export default NowPlaying
