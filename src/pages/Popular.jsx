import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setData } from '../feature/counterSlice';

const Popular = () => {

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

export default Popular
