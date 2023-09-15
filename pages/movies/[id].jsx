import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/component/Loading";
export default function details() {
  let [movie, setmovie] = useState([]);
  let [isLoading, setisLoading] = useState(true);

  const router = useRouter();

  async function getDetails(e) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${e}?api_key=7c9289e094fd00ffc1fa0413b31d4795`
    );
    const data = await res.json();
    setmovie(data);
    setisLoading(false);
  }
  useEffect(() => {
    getDetails(router.query.id);
  }, []);
  return (
    <>
      <div className="container  mt-md-4 py-md-4 pb-md-5 pb-5">
        {" "}
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <div className="details"></div>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie?.backdrop_path}
              alt=""
              className="bg-page"
            />
            <div className="row pt-5 ">
              {" "}
              <div className="col-md-4">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
                  alt=""
                  className="w-100 rounded-1"
                />
              </div>
              <div className="col-md-8 mt-5">
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <ul class="my-4 list-unstyled d-flex ">
                  <svg
                    width="20"
                    height="20"
                    fill="#ffdd00"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path d="M6 7V4a1 1 0 0 1 1-1h6.414l2 2H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3Zm0 2H4v10h12v-2H6V9Z"></path>
                  </svg>{" "}
                  Movie rating :
                  {movie.genres?.map((genre) => (
                    <div class="rounded-2 mx-2">{genre.name} ,</div>
                  ))}
                </ul>
                <div className="rounded-2 my-2 mb-3">
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
                  Rate : {movie.vote_average}
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
                  popularity : {movie.popularity}
                </div>{" "}
                <div className="d-flex">
                  <a href={movie.homepage} target="_blank">
                    <button className="mt-3 rounded-4 btn btn-danger bg-danger border-0">
                      {" "}
                      Watch Now
                    </button>
                  </a>{" "}
                  <button className="ms-2 mt-3 rounded-4 btn btn-danger bg-danger border-0">
                    {" "}
                    Add To Favorite
                  </button>
                  <button className="ms-2 mt-3 rounded-4 btn btn-primary bg-primary border-0">
                    {" "}
                    Share Link
                  </button>
                </div>
              </div>{" "}
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
}
