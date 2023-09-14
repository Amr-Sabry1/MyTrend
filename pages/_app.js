import LayOut from "@/component/LayOut";
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <LayOut>
        <Component {...pageProps} />{" "}
      </LayOut>{" "}
      <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js">
        {" "}
      </script>{" "}
    </>
  );
}
