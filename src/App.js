
import { Route, Routes } from 'react-router';
import React from 'react';
import './index.css';
import "./burgerMenu.css";
import Latest from './pages/Latest';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import UpComing from './pages/UpComing';
import WatchList from './pages/WatchList';
import HomeLayout from './Components/layout/HomeLayout';
import DetailedLayout from './Components/layout/DetailedLayout';
import Details from './pages/Details';
import Favourite from './pages/Favourite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className='main'>
   <ToastContainer/>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<Latest />} />
          <Route path='/nowplaying/:name' element={<NowPlaying />} />
          <Route path='/popular/:name' element={<Popular />} />
          <Route path='/topRated/:name' element={<TopRated />} />
          <Route path='/upcoming/:name' element={<UpComing />} />
        </Route>
        <Route path='/' element={<DetailedLayout />} >
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/watchlist' element={<WatchList />} />
          <Route path='/details/:id' element={<Details />} />
        </Route>
      </Routes>
      <div className='mainBackGround'>
      
      </div>

    </div>

  );
}

export default App;
