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
        <Route path='/' element={<Home />} />
        <Route path='/video' element={<Video />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/bookmark' element={<BookMark />} />
      </Routes>
    </>
  );
}

export default App;
