import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Courses from "../../components/Courses/Courses";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Team from "../../components/Team/Team";
import Testimonial from "../../components/Testimonial/Testimonial";
import Topbar from "../../components/Topbar/Topbar";
import "./MainLayout.css";

const MainLayout = ( {children} ) => {
    return (
        <>
            <Topbar />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout