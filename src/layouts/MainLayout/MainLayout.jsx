import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./MainLayout.css";

const MainLayout = ( {children} ) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout