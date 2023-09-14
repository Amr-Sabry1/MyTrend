import LayOut from "@/component/LayOut";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LayOut>
        <Component {...pageProps} />{" "}
      </LayOut>{" "}
    </>
  );
}
