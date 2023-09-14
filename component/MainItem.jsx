import Link from "next/link";
import React from "react";

export default function Item({ data, type }) {
  return (
    <>
      <div className=" col-md-3 col-lg-6 col-12">
        {" "}
        <Link
          className="text-white text-decoration-none"
          href={type + `/` + data.id}
        >
          <div className="m-2 mainItem">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="m-2">
                  <h5>{data?.title?.split(" ").splice(0, 3).join(" ")}</h5>
                  <h5>{data?.name}</h5>
                  <p>{data.release_date}</p>
                  <p>{data.overview.split(" ").splice(0, 7).join(" ")}...</p>
                  <div className="d-flex">
                    <button class="button-mainItem">
                      <svg
                        width="46"
                        height="46"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.18 12C2.12 6.88 6.609 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.82 9-5.391 0-9.877-3.88-10.818-9ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
                      </svg>
                    </button>
                    <button class="button-mainItem ms-2">
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464Z"></path>
                      </svg>
                    </button>{" "}
                    <button class="button-mainItem w-50 rounded-3 ms-2">
                      Watch Later
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </Link>
      </div>
    </>
  );
}
