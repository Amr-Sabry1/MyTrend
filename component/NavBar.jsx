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
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/movies" className="nav-link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tv" className="nav-link">
                  TvShows
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/people" className="nav-link">
                  People
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <>
                {" "}
                <li className="nav-item">
                  <a
                    href="https://amr-sabry1.github.io/MyPortfolio/"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <p className="nav-link m-0 text-uppercase text-white">
                      Amr Sabry
                    </p>
                  </a>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
