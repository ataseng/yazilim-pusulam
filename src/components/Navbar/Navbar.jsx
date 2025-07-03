import React from "react";
import { Link } from "react-router";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                <Link to="/" className="navbar-brand ml-lg-3">
                    <h1 className="m-0 text-uppercase text-primary">
                        <img src={logo} alt="" />
                    </h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <Link to="/" className="nav-item nav-link">Anasayfa</Link>
                        <Link to="/About" className="nav-item nav-link">Hakkımızda</Link>
                        <Link to="/CoursePage/CoursePage" className="nav-item nav-link">Kurslar</Link>
                        <Link to="/Mentor/Mentor" className="nav-item nav-link">Mentorluk</Link>
                        <Link to="/iletisim" className="nav-item nav-link">İletişim</Link>
                    </div>
                    <Link to="/Login/Login">
                        <Link to="#" className="btn btn-primary py-2 px-4 d-none d-lg-block">Giriş Yap</Link>
                    </Link>
                    <Link to="/EditProfileMentor/EditProfileMentor">
                        <Link to="#" className="btn btn-primary py-2 px-4 d-none d-lg-block">Mentor düzenle</Link>
                    </Link>
                     <Link to="/EditProfileMenti/EditProfileMenti">
                        <Link to="#" className="btn btn-primary py-2 px-4 d-none d-lg-block">Menti düzenle</Link>
                    </Link>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;
