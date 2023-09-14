import React from "react";
import Navbar from "./NavBar";

export default function LayOut(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
