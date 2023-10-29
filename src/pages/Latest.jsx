import React, { useEffect } from 'react'
import { setData, setLoading } from '../feature/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Latest = () => {

  const selector = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  console.log(selector.loading);
  useEffect(() => {
    const Key = "07989e510be31f37e529531744bfc3ec";
    
    if(selector.loading){
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`
      )
        .then((resp) => resp.json())
        .then((data) => dispatch(setData(data)));
        dispatch(setLoading())
    }

    
  }, [selector.loading, dispatch]);
    
  return (
    < >

    </>
  )
}

export default Latest
