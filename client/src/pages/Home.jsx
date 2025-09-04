import React from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <BlogList />
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default Home;