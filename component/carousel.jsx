import Carousel from "@/component/carousel";
import Link from "next/link";

import React, { useEffect, useState } from "react";

export default function Home() {
  let [movies, setmovies] = useState([]);

  async function getTrending() {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=7c9289e094fd00ffc1fa0413b31d4795`
    );
    const data = await res.json();

    setmovies(data.results);
  }

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <>
      <div id="carouselExampleIndicators1" class="carousel slide  my-3">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="captionCarsouel">
              <div className="row">
                <div className="col-md-3">
                  <div className="ms-md-5">
                    <Link href={`movies/` + movies[0]?.id}>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          movies[0]?.poster_path
                        }
                        className="rounded-3"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-8  mt-4">
                  <div className="text-warning rounded-2 mt-2">
                    <svg
                      className="me-1"
                      width="20"
                      height="20"
                      fill="#fff700"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m12 17-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.23 4.48 1.597 6.7L12 17Z"></path>
                    </svg>{" "}
                    {movies[0]?.vote_average}{" "}
                  </div>

                  <div className="my-1">
                    {" "}
                    <svg
                      className="me-2 my-1"
                      width="20"
                      height="20"
                      fill="#8c8c8c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.18 12C2.12 6.88 6.609 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.82 9-5.391 0-9.877-3.88-10.818-9ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                    </svg>
                    {movies[0]?.popularity}
                  </div>
                  <h3>{movies[0]?.title}</h3>
                  <p>{movies[0]?.overview}</p>
                  <p>{movies[0]?.release_date}</p>
                  <Link href={`movies/` + movies[0]?.id}>
                    <button className="btn btn-danger bg-danger border-0">
                      {" "}
                      Watch Now
                    </button>
                  </Link>
                </div>{" "}
              </div>
            </div>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movies[0]?.backdrop_path}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <div className="captionCarsouel">
              <div className="row">
                <div className="col-md-3">
                  <div className="ms-md-5">
                    <Link href={`movies/` + movies[1]?.id}>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          movies[1]?.poster_path
                        }
                        className="rounded-3"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-8 mt-4">
                  <div className="text-warning rounded-2 mt-2">
                    <svg
                      className="me-1"
                      width="20"
                      height="20"
                      fill="#fff700"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m12 17-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.23 4.48 1.597 6.7L12 17Z"></path>
                    </svg>{" "}
                    {movies[1]?.vote_average}{" "}
                  </div>

                  <div className="my-1">
                    {" "}
                    <svg
                      className="me-2 my-1"
                      width="20"
                      height="20"
                      fill="#8c8c8c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.18 12C2.12 6.88 6.609 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.82 9-5.391 0-9.877-3.88-10.818-9ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                    </svg>
                    {movies[1]?.popularity}
                  </div>
                  <h3>{movies[1]?.title}</h3>
                  <p>{movies[1]?.overview}</p>
                  <p>{movies[1]?.release_date}</p>
                  <Link href={`movies/` + movies[1]?.id}>
                    <button className="btn btn-danger bg-danger border-0">
                      {" "}
                      Watch Now
                    </button>
                  </Link>
                </div>{" "}
              </div>
            </div>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movies[1]?.backdrop_path}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <div className="captionCarsouel">
              <div className="row">
                <div className="col-md-3">
                  <div className="ms-md-5">
                    <Link href={`movies/` + movies[2]?.id}>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          movies[2]?.poster_path
                        }
                        className="rounded-3"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-8 mt-4">
                  <div className="text-warning rounded-2 mt-2">
                    <svg
                      className="me-1"
                      width="20"
                      height="20"
                      fill="#fff700"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m12 17-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.23 4.48 1.597 6.7L12 17Z"></path>
                    </svg>{" "}
                    {movies[2]?.vote_average}
                  </div>

                  <div className="my-1">
                    {" "}
                    <svg
                      className="me-2 my-1"
                      width="20"
                      height="20"
                      fill="#8c8c8c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.18 12C2.12 6.88 6.609 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.82 9-5.391 0-9.877-3.88-10.818-9ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                    </svg>
                    {movies[2]?.popularity}
                  </div>
                  <h3>{movies[2]?.title}</h3>
                  <p>{movies[2]?.overview}</p>
                  <p>{movies[2]?.release_date}</p>
                  <Link href={`movies/` + movies[2]?.id}>
                    <button className="btn btn-danger bg-danger border-0">
                      {" "}
                      Watch Now
                    </button>
                  </Link>
                </div>{" "}
              </div>
            </div>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movies[2]?.backdrop_path}
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
