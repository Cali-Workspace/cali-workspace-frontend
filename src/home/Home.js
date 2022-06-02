import React from "react";
import Announcement from "../announcement/Announcement";
import Banner from "../banner/Banner";
import Courses from "../courses/Courses";
import Events from "../events/Events";
import Footer from "../footer/Footer";
function Home() {
  return (
    <>
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

export default Home;
