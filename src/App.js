import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Tv from "./pages/Tv";
import BookMark from "./pages/BookMark";
import NavBar from "./components/NavBar";

function App() {
  // console.log(data.filter(data => data.isTrending));

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/reactproject5/" element={<Home />} />
          <Route path="/reactproject5/video" element={<Video />} />
          <Route path="/reactproject5/tv" element={<Tv />} />
          <Route path="/reactproject5/bookmark" element={<BookMark />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
