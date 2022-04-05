import React from "react";
import search from "../assets/icon-search.svg";
import tv from "../assets/icon-category-tv.svg";
import play from "../assets/icon-play.svg";
import movie from "../assets/icon-category-movie.svg";
import bookMarked from "../assets/icon-bookmark-empty.svg";
import notBookMarked from "../assets/icon-bookmark-full.svg";
import { data } from "../data.js";

const Video = () => {
  const dataVideo = data.filter((data) => data.category === "Movie");
  const dataVideoMap = dataVideo.map((data, idx) => (
    <div className="card" key={idx}>
      <img src={`.${data.thumbnail.regular.large}`} />
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
    </div>
  ));
  return (
    <>
      <div className="inputContainer">
        <label for="search">
          <img src={search} alt="search-icon" />
        </label>
        <input id="search" placeholder="Search for movies or TV series"></input>
      </div>
      <section className="cardContainer">
        <h2>Movies</h2>
        {dataVideoMap}
      </section>
    </>
  );
};

export default Video;
