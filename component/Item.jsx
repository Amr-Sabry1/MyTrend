import Link from "next/link";
import React from "react";

export default function Item({ data, type }) {
  return (
    <div className=" col-md-3 col-lg-2  col-12">
      <div className="item-text position-relative overflow-hidden">
        <img
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          className="w-100 rounded-2"
          alt=""
        />
        <Link href={type + `/` + data.id}>
          <div className="caption  text-white">
            <div className="vote">
              <span className="me-1">
                {data.id}
                {data.vote_average}
              </span>
              <svg
                width="20"
                height="20"
                fill="yellow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 17-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.23 4.48 1.597 6.7L12 17Z"></path>
              </svg>
            </div>
            <div className="view">
              <span className="me-1">{Math.floor(data.popularity)}</span>
              <svg
                width="20"
                height="20"
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.18 12C2.12 6.88 6.609 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.82 9-5.391 0-9.877-3.88-10.818-9ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
              </svg>
            </div>
            <svg
              className="play"
              width="100"
              height="100"
              fill="#f000006a"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.376 12.42 8.777 19.484A.5.5 0 0 1 8 19.07V4.937a.5.5 0 0 1 .777-.416l10.599 7.066a.501.501 0 0 1 0 .832Z"></path>
            </svg>
            <svg
              className="play"
              width="65"
              height="65"
              fill="red"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.376 12.42 8.777 19.484A.5.5 0 0 1 8 19.07V4.937a.5.5 0 0 1 .777-.416l10.599 7.066a.501.501 0 0 1 0 .832Z"></path>
            </svg>
            <p>
              {data.title}
              {data.name}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
