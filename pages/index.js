import React from "react";

export default function index() {
  async function getStaticProps() {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7c9289e094fd00ffc1fa0413b31d4795"
    );
    const data = await res.json();
    console.log(data);
    return {
      props: {
        data: data,
      },
    };
  }

  return (
    <>
      <div className="pt-5 mt-3 container"> index </div>{" "}
    </>
  );
}
