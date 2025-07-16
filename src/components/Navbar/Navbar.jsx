import React from "react";
import { Link, useNavigate } from "react-router";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";

const Navbar = () => {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
    };

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
                        <Link to="/CoursePage" className="nav-item nav-link">Kurslar</Link>
                        <Link to="/Mentor" className="nav-item nav-link">Mentorluk</Link>
                        <Link to="/Contact" className="nav-item nav-link">İletişim</Link>
                    </div>
                    
                    <Link to="/EditProfileMenti" className="btn btn-primary py-2 px-4 d-none d-lg-block">Menti düzenle</Link>

                    {
                        userInfo ? (
                            <>
                                <Link to="/EditProfileMentor" className="btn btn-primary py-2 px-4 d-none d-lg-block">Mentor düzenle</Link>
                                <button onClick={logoutHandler} className="btn btn-primary py-2 px-4 d-none d-lg-block">Çıkış</button>
                            </>
                        ) : (
                            <Link to="/Login" className="btn btn-primary py-2 px-4 d-none d-lg-block">Giriş Yap</Link>
                        )}
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
