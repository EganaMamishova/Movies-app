/* const Key = "07989e510be31f37e529531744bfc3ec"

const axios = require('axios').default;
export const getData = async (name) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
    const data = res.data
    
   return data.results
   
} */

/* export const getData = fetch( `https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
  .then(resp => resp.json())
  .then(data => resp.json()) */

  const Key = "07989e510be31f37e529531744bfc3ec"


export const getData = async (name) =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
    const data = await res.json()
    console.log(data);
    
   return data
   
}