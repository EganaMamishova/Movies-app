import React, { useEffect } from 'react'
import { setData } from '../feature/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Latest = () => {

  const selector = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  useEffect(() => {
    const Key = "07989e510be31f37e529531744bfc3ec";

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`
    )
      .then((resp) => resp.json())
      .then((data) => dispatch(setData(data)));
  }, []);

    console.log(selector.favourite);
    
  return (
    < >

    </>
  )
}

export default Latest
