import React, {useState, useEffect} from "react";
import search from "../assets/icon-search.svg";
import tv from "../assets/icon-category-tv.svg";
import play from "../assets/icon-play.svg";
import movie from "../assets/icon-category-movie.svg";
import notBookMarked from "../assets/icon-bookmark-empty.svg";
import bookMarked from "../assets/icon-bookmark-full.svg";
import { gsap } from "gsap";
import { data } from "../data.js";

const BookMark = () => {
  const [initialDataVideo, setInitialDataVideo] = useState(data.filter(data => data.isBookmarked))
  const [dataVideo, setdataVideo] = useState(data.filter(data => data.isBookmarked))
  const [movieMap, setMovieMap] = useState(dataVideo.filter(data => data.category === "Movie"))
  const [tvMap, setTvMap] = useState(dataVideo.filter(data => data.category === "TV Series"))
  const dataHandler = e => {
    if(e.target.value.length === 0) {
      setMovieMap(initialDataVideo.filter(data => data.category === "Movie"))
      setTvMap(initialDataVideo.filter(data => data.category === "TV Series"))
    }
    else if(e.target.value.length > 0 ){
      console.log(2);
      setdataVideo(initialDataVideo.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase())))
      setMovieMap(dataVideo.filter(data => data.category === "Movie"))
      setTvMap(dataVideo.filter(data => data.category === "TV Series"))
    }
  }

  useEffect(() => {
    const TL1 = gsap.timeline({paused: true});
  
    TL1
    .from(document.querySelector(".inputContainer"), {opacity: 0, duration: 1,y:-20})
    .from(document.querySelector(".cardContainer h2"), {opacity: 0, duration: 0.8,y:-20, ease: "power4"},'-=0.8')
    .from(document.querySelectorAll(".card"), {stagger: 0.02, opacity: 0, duration: 0.6, y:-20 }, "-=0.8")

    TL1.play()
  }, [])

  const dataVideoMap = movieMap.map((data, idx) => (
    <div className="card" key={idx}>
      <img src={`${data.thumbnail.regular.large}`} />
      <div className="card__txtContainer">
        <p>{data.year}</p>
        <span></span>
        {data.category == "TV Series" ? (
          <img className="icon-card" src={tv} alt="tv-icon" />
        ) : (
          <img className="icon-card" src={movie} alt="icon-movie" />
        )}
        <p>{data.category}</p>
        <span></span>
        <p>{data.rating}</p>
      </div>
      <h3>{data.title}</h3>
      <div className="playContainer">
        <div className="playBtn">
          <img src={play} alt="play" />
          <p>Play</p>
        </div>
      </div>
      <div className="bookMarked">
        <img
          src={data.isBookmarked ? bookMarked : notBookMarked}
          alt={
            data.isBookmarked ? "icon-bookarmed-full" : "icon-bookmarked-empty"
          }
        />
      </div>
    </div>)
    );

  const dataTvMap = tvMap.map((data, idx) => (
    <div className="card margin-bookmark" key={idx}>
      <img src={`${data.thumbnail.regular.large}`} />
      <div className="card__txtContainer">
        <p>{data.year}</p>
        <span></span>
        {data.category == "TV Series" ? (
          <img className="icon-card" src={tv} alt="tv-icon" />
        ) : (
          <img className="icon-card" src={movie} alt="icon-movie" />
        )}
        <p>{data.category}</p>
        <span></span>
        <p>{data.rating}</p>
      </div>
      <h3>{data.title}</h3>
      <div className="playContainer">
        <div className="playBtn">
          <img src={play} alt="play" />
          <p>Play</p>
        </div>
      </div>
      <div className="bookMarked">
        <img
          src={data.isBookmarked ? bookMarked : notBookMarked}
          alt={
            data.isBookmarked ? "icon-bookarmed-full" : "icon-bookmarked-empty"
          }
        />
      </div>
    </div> ));

  return (
    <>
      <div className="inputContainer">
        <label htmlFor="search" >
          <img src={search} alt="search-icon" />
        </label>
        <input onChange={dataHandler} id="search" placeholder="Search for movies or TV series"></input>
      </div>
      <section className="cardContainer margin-bookmark">
        <h2>Bookmarked Movies</h2>
        {movieMap.length >= 1 ? (dataVideoMap) :
        (
          <div className='errorHandler'>
            <svg xmlns="http://www.w3.org/2000/svg" stroke='white' fill='white' viewBox="0 0 32 32"><path d="M16 2a14 14 0 0 0-7.54 2.2 1 1 0 0 0 1.08 1.69 12 12 0 1 1-3.65 3.65 10.12 10.12 0 0 1 .65-.92A1 1 0 1 0 5 7.38c-.27.35-.52.71-.76 1.08A14 14 0 1 0 16 2z"/><path d="M14 12v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM20 12v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM9.2 20.4a1 1 0 1 0 1.6 1.2A6.79 6.79 0 0 1 16 19a6.81 6.81 0 0 1 5.2 2.6 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2 1 1 0 0 0 .2-1.4A8.74 8.74 0 0 0 16 17a8.76 8.76 0 0 0-6.8 3.4z"/></svg>
            <p>No results found</p>
          </div>
        )}
      </section>
      <section className="cardContainer margin-bookmark">
        <h2>BookMarked TV Series</h2>
        {tvMap.length > 0 ? (dataTvMap):
        (
          <div className='errorHandler'>
            <svg xmlns="http://www.w3.org/2000/svg" stroke='white' fill='white' viewBox="0 0 32 32"><path d="M16 2a14 14 0 0 0-7.54 2.2 1 1 0 0 0 1.08 1.69 12 12 0 1 1-3.65 3.65 10.12 10.12 0 0 1 .65-.92A1 1 0 1 0 5 7.38c-.27.35-.52.71-.76 1.08A14 14 0 1 0 16 2z"/><path d="M14 12v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM20 12v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM9.2 20.4a1 1 0 1 0 1.6 1.2A6.79 6.79 0 0 1 16 19a6.81 6.81 0 0 1 5.2 2.6 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2 1 1 0 0 0 .2-1.4A8.74 8.74 0 0 0 16 17a8.76 8.76 0 0 0-6.8 3.4z"/></svg>
            <p>No results found</p>
          </div>
        )}
      </section>
    </>
  );
};

export default BookMark;
