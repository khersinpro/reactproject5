import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Video from './pages/Video';
import Tv from './pages/Tv';
import BookMark from './pages/BookMark';
import NavBar from './components/NavBar';



function App() {

  // console.log(data.filter(data => data.isTrending));

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/reactproject5' element={<Home />} />
        <Route path='/reactproject5video' element={<Video />} />
        <Route path='/reactproject5tv' element={<Tv />} />
        <Route path='/reactproject5bookmark' element={<BookMark />} />
      </Routes>
    </>
  );
}

export default App;
