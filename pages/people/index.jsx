import MainItem from "@/component/MainItem";
import Profile from "@/component/Profile";

import React, { useEffect, useState } from "react";

export default function Home() {
  let [people, setpeople] = useState([]);
  let [x, setx] = useState(8);

  async function search(e) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/person?api_key=7c9289e094fd00ffc1fa0413b31d4795&query=${e.target.value}&include_adult=false&language=en-US&page=1`
    );
    const data = await res.json();
    setpeople(data.results);
    if (data.results == "") {
      document.getElementById("Hide").classList.remove("d-none");
      document.getElementById("More").classList.add("d-none");
    } else {
      document.getElementById("Hide").classList.add("d-none");
      document.getElementById("More").classList.remove("d-none");
    }
  }

  function more() {
    setx((prev) => prev + 6);
  }
  async function getTrending() {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=7c9289e094fd00ffc1fa0413b31d4795`
    );
    const data = await res.json();
    setpeople(data.results);
    if (data.results == "") {
      document.getElementById("Hide").classList.remove("d-none");
      document.getElementById("More").classList.add("d-none");
    } else {
      document.getElementById("Hide").classList.add("d-none");
      document.getElementById("More").classList.remove("d-none");
    }
  }

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <>
      <div className="container my-5 mt-4 py-5">
        <div className="position-relative">
          <img
            src="https://wallpapershome.com/images/pages/ico_h/24894.jpg"
            className="mainimg movieMainImg"
            alt=""
          />
          <div className="captionmainImg moviecaptionmainImg">
            <h2>Welcome. Millions of people to Discover.</h2>
            <h3>Explore now.</h3>
            <div className="search">
              <input
                type="text"
                placeholder="Search on Movies"
                onChange={(e) => search(e)}
              />
              <button>Search</button>
            </div>
          </div>
        </div>

        <div className="row  g-3">
          {people?.slice(0, x).map((movie) => (
            <Profile key={movie.id} data={movie} type={"people"} />
          ))}
        </div>
        <div id="Hide" className="d-none m-3 text-center">
          <h3>No Movie to Show ...</h3>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            id="More"
            className="button-mainItem more rounded-5"
            onClick={() => more()}
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
}
