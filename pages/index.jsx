import Item from "@/component/Item";
import Carousel from "@/component/carousel";
import Carouseltv from "@/component/carouseltv";
import Link from "next/link";

import React, { useEffect, useState } from "react";

export default function Home() {
  let [movies, setmovies] = useState([]);
  let [tv, setTv] = useState([]);

  async function getTrending(type, dest) {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/popular?api_key=7c9289e094fd00ffc1fa0413b31d4795`
    );
    const data = await res.json();
    dest(data.results);
  }
  useEffect(() => {
    getTrending("movie", setmovies);
    getTrending("tv", setTv);
  }, []);
  return (
    <>
      <div className="container my-5 mt-4 py-5">
        <div className="position-relative">
          <img
            src="https://m.media-amazon.com/images/I/81nZu7RnPzL.jpg"
            className="mainimg"
            alt=""
          />
          <div className="captionmainImg">
            <h1>Welcome .</h1>

            <h3>
              Welcome. Millions of movies, TV shows and people to discover.
            </h3>
            <h3>Explore now.</h3>
            <div className="d-flex mt-3">
              <a class="playstore-button me-2" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span class="texts">
                  <span class="text-1">GET IT ON</span>
                  <span class="text-2">Google Play</span>
                </span>
              </a>{" "}
              <a
                class="playstore-button callusbtn"
                href="https://amr-sabry1.github.io/MyPortfolio/"
                target="_blank"
              >
                <svg
                  width="30"
                  height="30"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"></path>
                </svg>
                <span class="texts">
                  <span class="text-1">Call Us</span>
                  <span class="text-2">Amr Sabry</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="populer rounded-4">
          <button className="rounded-4 btn ms-2 text-white my-1 bg-danger">
            Trending Movie
          </button>
          <div className="ms-4 mt-2">
            {" "}
            <p class="type text-uppercase">
              <svg
                className="me-1"
                width="24"
                height="24"
                fill="#ffdd00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 7h2v10H5V7Zm-4 3h2v4H1v-4Zm8-8h2v18H9V2Zm4 2h2v18h-2V4Zm4 3h2v10h-2V7Zm4 3h2v4h-2v-4Z"></path>
              </svg>{" "}
            </p>
          </div>
        </div>
        <Carousel></Carousel>
        <div className="pb-3 populer rounded-4 mt-5 my-5">
          <div className="m-0 ps-5 rounded-4">
            <span className="bg-danger my-2 p-2 rounded-4">Populer Movie</span>
          </div>
        </div>
        <div className="row g-3">
          {movies?.slice(0, 6).map((movie) => (
            <Item key={movie.id} data={movie} type={"movies"} />
          ))}
        </div>{" "}
        <Link href="movies/" className="text-decoration-none">
          <div className="d-flex justify-content-center mt-4">
            <button className="button-mainItem more rounded-5">
              Show More
            </button>
          </div>{" "}
        </Link>
        <div className="populer rounded-4 mt-5 mb-4">
          <button className="rounded-4 btn ms-2 text-white my-1 bg-danger">
            Trending TvShows
          </button>
          <div className="ms-4 mt-2">
            {" "}
            <p class="type text-uppercase">
              <svg
                className="me-1"
                width="24"
                height="24"
                fill="#ffdd00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 7h2v10H5V7Zm-4 3h2v4H1v-4Zm8-8h2v18H9V2Zm4 2h2v18h-2V4Zm4 3h2v10h-2V7Zm4 3h2v4h-2v-4Z"></path>
              </svg>{" "}
            </p>
          </div>
        </div>
        <Carouseltv></Carouseltv>
        <div className="pb-3 populer rounded-4 my-5">
          <div className="m-0 ps-5 rounded-4">
            <span className="bg-danger my-2 p-2 rounded-4">
              Populer TV Shows
            </span>
          </div>
        </div>
        <div className="row g-4 mt-5">
          {tv?.slice(0, 6).map((movie) => (
            <Item key={movie.id} data={movie} type={"tv"} />
          ))}
        </div>
        <Link href="tv/" className="text-decoration-none">
          <div className="d-flex justify-content-center mt-4">
            <button className="button-mainItem more rounded-5">
              Show More
            </button>
          </div>{" "}
        </Link>
      </div>
    </>
  );
}
