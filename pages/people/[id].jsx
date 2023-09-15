import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Profile from "@/component/Profile";
import Loading from "@/component/Loading";

export default function details() {
  let [people, setpeople] = useState([]);
  let [peoplew, setpeoplew] = useState([]);

  let [x, setx] = useState(100);
  let [isLoading, setisLoading] = useState(true);

  async function movie_credits(e) {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/${e}/combined_credits?api_key=7c9289e094fd00ffc1fa0413b31d4795`
    );
    const data = await res.json();
    setpeoplew(data.cast);
    setisLoading(false);
  }

  function more() {
    setx((prev) => prev + 50);
  }
  const router = useRouter();

  async function getDetails(e) {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/${e}?api_key=7c9289e094fd00ffc1fa0413b31d4795`
    );
    const data = await res.json();
    setpeople(data);
    setisLoading(false);
  }

  useEffect(() => {
    getDetails(router.query.id);
    movie_credits(router.query.id);
  }, []);
  return (
    <>
      <div className="container  mt-md-4 py-md-4 pb-md-5 pb-5">
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <div className="row pt-5 ">
              {" "}
              <div className="col-md-4">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + people?.profile_path}
                  alt=""
                  className="w-100 rounded-1"
                />
              </div>
              <div className="col-md-8">
                <h3 className="fe-semibold">{people.name}</h3>
                <h5 className="fw-semibold my-3">Biography</h5>
                <p>
                  {people?.biography?.split(" ").splice(0, x).join(" ")} ...
                  <a
                    onClick={() => more()}
                    className="text-primary text-decoration-none"
                  >
                    Read More.
                  </a>
                </p>
                <br />
                <br />
                <div className="my-1">
                  {" "}
                  <svg
                    className="me-2 my-1"
                    width="20"
                    height="20"
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2Zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5Zm5 6H4v8h16v-8Z"></path>
                  </svg>
                  Pirthday :{people.birthday}
                </div>{" "}
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
                  popularity : {people.popularity}
                </div>{" "}
                <div className="row g-3" id="show">
                  <h5 className="fw-semibold mb-2 mt-4">Known For</h5>

                  <div class="col-md-3">
                    {" "}
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        peoplew[0]?.poster_path
                      }
                      class="w-100 rounded-2"
                      alt=""
                    />{" "}
                  </div>

                  <div class="col-md-3">
                    {" "}
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        peoplew[1]?.poster_path
                      }
                      class="w-100 rounded-2"
                      alt=""
                    />{" "}
                  </div>
                  <div class="col-md-3">
                    {" "}
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        peoplew[2]?.poster_path
                      }
                      class="w-100 rounded-2"
                      alt=""
                    />{" "}
                  </div>
                  <div class="col-md-3">
                    {" "}
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        peoplew[3]?.poster_path
                      }
                      class="w-100 rounded-2"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
}
