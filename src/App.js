import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Tv from "./pages/Tv";
import BookMark from "./pages/BookMark";
import ErrorPage from "./pages/ErrorPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/reactproject5/" element={<Home />} />
          <Route path="/reactproject5/video" element={<Video />} />
          <Route path="/reactproject5/tv" element={<Tv />} />
          <Route path="/reactproject5/bookmark" element={<BookMark />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
