import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                <a href="index.html" className="navbar-brand ml-lg-3">
                    <h1 className="m-0 text-uppercase text-primary">
                        <img src={logo} alt="" />
                    </h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Anasayfa</a>
                        <a href="about.html" className="nav-item nav-link">Hakkımızda</a>
                        <a href="course.html" className="nav-item nav-link">Kurslar</a>
                        <a href="contact.html" className="nav-item nav-link">İletişim</a>
                    </div>
                    <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">Kayıt Ol</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar