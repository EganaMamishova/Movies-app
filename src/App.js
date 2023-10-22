
import { Route, Routes } from 'react-router';
import React from 'react';
import './index.css';
import Latest from './pages/Latest';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import UpComing from './pages/UpComing';
import Heart from './pages/Heart';
import WatchList from './pages/WatchList';
import backGround from './Components/Imgs/Background.png'
import HomeLayout from './Components/layout/HomeLayout';
import DetailedLayout from './Components/layout/DetailedLayout';
import Details from './pages/Details';

function App() {
  
  return (
    <div className='main'>

      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<Latest />} />
          <Route path='/nowplaying/:name' element={<NowPlaying />} />
          <Route path='/popular/:name' element={<Popular />} />
          <Route path='/topRated/:name' element={<TopRated />} />
          <Route path='/upcoming/:name' element={<UpComing />} />
        </Route>
        <Route path='/' element={<DetailedLayout />} >
          <Route path='/heart' element={<Heart />} />
          <Route path='/watchlist' element={<WatchList />} />
          <Route path='/details/:id' element={<Details />} />
        </Route>
      </Routes>
      <div className='mainBackGround'>
        {/* <img className='backGroundImage' alt='backImg' src={backGround} /> */}
      </div>

    </div>

  );
}

export default App;
