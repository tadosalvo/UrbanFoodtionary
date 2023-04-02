import React from "react";

const Landing = (props) => {
  const { children } = props;
  return (
    <>
      <h1>Hello world</h1>
      <div className="flex flex-col min-h-screen relative bg-[url('../public/background.jpg')]">
        <main className="flex-1 bg-yellow">{children}</main>
      </div>
    </>
  );
};

export default Landing;
