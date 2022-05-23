import React, { useEffect } from "react";
import Announcement from "./announcement/Announcement";
import Banner from "./banner/Banner";
import Courses from "./courses/Courses";
import Events from "./events/Events";
import Footer from "./footer/Footer";
import Header from "./header/Header";
function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Courses />
        <Announcement />
        <Events />
      </main>
      <Footer />
    </>
  );
}

export default App;
