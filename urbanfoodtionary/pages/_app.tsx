import "../styles/globals.css";
import Navbar from "../components/navbar";
import type { AppProps } from "next/app";
import Landing from "@/components/landing";
import Layout from "@/components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Landing>
        <Component {...pageProps} />
      </Landing>
    </>
  );
}

export default App;
