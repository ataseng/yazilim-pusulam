import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Courses from "../components/Courses/Courses";
import Feature from "../components/Feature/Feature";
import Header from "../components/Header/Header";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonial/Testimonial";

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