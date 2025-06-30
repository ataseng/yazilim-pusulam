import React from "react";
import "./Profile.css";
import { Link } from "react-router";

const Mentor = () => {
    return (
        <div className="profil-container">
            {/* SOL KISIM */}
            <div className="left-panel">
                <div className="profile-card">
                    <img
                        src="/images/darvin.jpeg"
                        alt="Profil Avatar"
                        className="avatar"
                    />

                    <h2>BETÜL KANTARCI</h2>
                    <Link to="/EditProfileMentor/EditProfileMentor">
                        <a href="#" className="btn btn-primary py-2 px-4 d-none d-lg-block">Profil Düzenle</a>
                    </Link>

                    {/* Dilersen "⚙️" yerine başka sembol ya da sadece "Profili Düzenle" yazabilirsin */}
                </div>
            </div>

            {/* SAĞ KISIM */}
            <div className="right-panel">
                {/* MENTORLAR KUTUSU */}
                <div className="mentor-box">
                    <p className="box-title">Mentorlar</p>

                    <div className="mentor-item">
                        <img src="/images/rach.png" alt="Betül Kantarcı" />
                        <span>Betül Kantarcı</span>
                    </div>

                    <div className="mentor-item">
                        <img src="/images/darvin.jpeg" alt="Özgül Kaya" />
                        <span>Özgül Kaya</span>
                    </div>

                    <div className="mentor-item">
                        <img src="/images/indir.jpeg" alt="Osman Durdağ" />
                        <span>Osman Durdağ</span>
                    </div>
                </div>

                {/* EĞİTİM DURUMU VE EĞİTİMLER */}
                <div className="status-section">
                    <div className="chart-box">
                        <p className="box-title">Eğitim Durumu</p>
                        <div className="circle">Grafik</div>
                        <div className="legend">
                            <span className="blue">Tamamlandı - 0</span>
                            <span className="green">Devam ediyor - 10</span>
                            <span className="orange">Kayıtlı - 0</span>
                        </div>
                    </div>

                    <div className="course-box">
                        <p className="box-title">Güncel Eğitimler</p>

                        {[
                            { name: "PHP 8 ile Web Uygulama Geliştirme", progress: "0%" },
                            { name: "REACT ile Web Programcılığı", progress: "28%" },
                            { name: "JAVASCRIPT", progress: "5%" },
                            { name: "HTML5 ile Web Geliştirme", progress: "79%" },
                            { name: "Uygulamalı Figma", progress: "2%" },
                            { name: "C++ ile Programlamaya Giriş", progress: "52%" },
                        ].map((course, index) => (
                            <div className="course" key={index}>
                                <p>{course.name}</p>
                                <div className="progress">
                                    <div style={{ width: course.progress }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentor;
