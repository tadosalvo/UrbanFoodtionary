import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css"; // Assuming you have a global CSS file

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="app-container">
      <Component {...pageProps} />
      {/* You can add a footer or any other global components here */}
      <footer>
        <p> UrbanFoodtionary © 2023</p>
      </footer>
    </div>
  );
};

export default MyApp;
