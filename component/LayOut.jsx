import React from "react";
import Navbar from "./NavBar";
import Footer from "@/component/footer";

export default function LayOut(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
