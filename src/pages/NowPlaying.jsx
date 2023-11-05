import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setData, setLoading } from '../feature/counterSlice';
import { useParams } from 'react-router';
import { getData } from '../data/Data';


const NowPlaying = () => {


  const { name } = useParams()
  const dispatch = useDispatch();

 /*  useEffect(() => {

    const Key = "07989e510be31f37e529531744bfc3ec";
    if (selector.loading) {
      fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
        .then(resp => resp.json())
        .then(data => dispatch(setData(data)))
      dispatch(setLoading())
    }

  }, [dispatch, selector.loading, name]) */

  useEffect(()=>{
    const fetchData = async ()=>{ 
      const res  = await getData(name)
      dispatch(setData(res))      
  }
    fetchData()
  },[dispatch])

  return (
    <div> </div>
  )
}

export default NowPlaying
