import logo from "../../assets/images/dark_logo_with_text.png";
import Home from "../../pages/Home";
import "./Footer.css";
import { Link } from "react-router";


const Footer = () => {
    return (
        <>
            <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{
                marginTop: 90
            }}>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <a href="index.html" className="navbar-brand">
                                <a className="mt-n2 text-uppercase text-white">
                                    <Link to="About">
                                        <img src={logo} style={{ height: 50 }} alt="" />
                                    </Link>
                                </a>

                            </a>
                            <p className="m-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nisi, molestiae placeat voluptatibus earum tempore, praesentium libero maxime itaque fugit totam corporis sequi expedita. Neque?</p>
                        </div>
                        {/* <div className="col-md-6 mb-5">
                            <h3 className="text-white mb-4">Haber Bülteni</h3>
                            <div className="w-100">
                                <div className="input-group">
                                    <input type="text" className="form-control border-light" placeholder="E-Posta" />
                                       
                                </div>
                            </div>
                        </div> */}
                        <div className="input-group-append">
                            <Link to="Login/Login">
                                <button className="login-btn btn-primary px-4" >Üye Ol</button>
                            </Link>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">İletişime Geçin</h3>
                            <p><i className="fa fa-map-marker-alt mr-2"></i>Atatürk Üniversitesi, Mühendislik Fakültesi, Türkiye</p>
                            <p><i className="fa fa-phone-alt mr-2"></i>0442 231 1288</p>
                            <p><i className="fa fa-envelope mr-2"></i>destek@ataseng.com</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-twitter"></i></a>
                                <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-facebook-f"></i></a>
                                <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-linkedin-in"></i></a>
                                <a className="text-white" href="#"><i className="fab fa-2x fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">Kurslarımız</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Web Tasarımı</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Uygulama Tasarımı</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Oyun Geliştirme</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Mobil Uygulama Geliştirme</a>
                                <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2"></i>Masaüstü Uygulama Geliştirme</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">Hızlı Linkler</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Gizlilik Politikası</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Şartlar ve Koşullar</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>SSS</a>
                                <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Yardım ve Destek</a>
                                <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2"></i>İletişim</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                            <p className="m-0">&copy; <a className="text-white" href="#">Yazılım Pusulam</a>. Tüm Hakları Saklıdır.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <p className="m-0"><a className="text-white" href="https://ataseng.com">ATASENG - Future Minds</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;