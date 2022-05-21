import React, { useEffect } from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <Banner />
      <main>
        <h1 className="text-center display-4">Still under development...</h1>
      </main>
    </>
  );
}

export default App;
