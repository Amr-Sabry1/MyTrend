import Link from "next/link";
import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link href="" className="navbar-brand fw-bold text-white">
            TREND
          </Link>

          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars fs-4 "></i>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="" className="nav-link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link href="" className="nav-link">
                  TvShows
                </Link>
              </li>

              <li className="nav-item">
                <Link href="" className="nav-link">
                  People
                </Link>
              </li>

              <li className="nav-item">
                <Link href="" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <>
                {" "}
                <li className="nav-item">
                  <p className="nav-link m-0 text-uppercase text-white">
                    ooooooh
                  </p>
                </li>
                <li className="nav-item">
                  <p className="m-0 nav-link text-bg-primary text-center bg-opacity-25 rounded-3 p-2">
                    Log Out
                  </p>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
