import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Courses from "../components/Courses/Courses";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonial/Testimonial";
import Topbar from "../components/Topbar/Topbar";
import { Link } from "react-router";
import React, { useState } from "react";

function Home() {
  return (
    <>
      <Header />
      <Courses />
      <Team />
      <About />
      <Feature />
      <Testimonial />
      <Contact />
    </>
  );
}

export default Home;