import React from 'react'
import MainCard from './MainCards/MainCard'

import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setDoSearch } from '../feature/counterSlice';
const { Search } = Input;

const Movies = () => {

  const dispatch = useDispatch();
 
  const change = async (value) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=07989e510be31f37e529531744bfc3ec&query=${value}`
    const resp = await fetch(url)
    const data = await resp.json()
    dispatch(setDoSearch(data))
    
  }

  return (
    <div className='moviesContainer'>
      <h1 className='tagHone'>MovieDB</h1>
      <p className='tagP'>List of movies and TV Shows, I, Pramod Poudel have watched till date. <br /> Explore what I have watched and also feel free to make a suggestion. 😉</p>

      <Search onSearch={change}  enterButton placeholder=" search movie" className='search' />

      <h2 className='tagHtwo'>All(120)</h2>
      <MainCard />
    </div>
  )
}

export default Movies
