//mentor profil 
import React from 'react';
import './MentorPage.css';


const Mentor = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img src="/images/indir.jpeg" alt="Profil Resmi" />
        <div className="profile-info">
          <h2>Özgül KAYA</h2>
          <p><strong>Yazılım Geliştirici X Şirketinde</strong></p>
          <p>
            Girişimcilere ve CEO’lara İş Doğrulaması, Strateji, Büyüme ve Fon Toplama konularında Mentorluk
          </p>
          <ul>
            <li>✔ Onaylanmış Mentor</li>
            <li>📍 Erzurum / Türkiye</li>
            <li>⭐ 5.0</li>
            <li>🌍 Türkçe - İngilizce - Almanca</li>
          </ul>
        </div>

        <div className="profile-offer">
          <h3>MENTORLUK VE PLANLAMA</h3>
          <h1>120$</h1>
          <p>
            Ayda 1 Çağrı (Çağrı Başına 30dk)<br />
            Sohbet Yoluyla Sınırsız Soru-Cevap<br />
            Uygulamalı Destek<br />
            2 Gün İçinde Yanıt Alın
          </p>
          <button>EŞLEŞ</button>
        </div>
      </div>

      <div className="skills-section">
        <h4>Beceriler</h4>
        <div className="skills">
          <span>Python</span>
          <span>SQL</span>
          <span>C++</span>
          <span>C#</span>
        </div>
      </div>

      <div className="about">
        <h4>Hakkımda</h4>
        <p>
          Girişimcilere ve CEO’lara İş Doğrulaması, Strateji, Büyüme ve Fon Toplama konularında Mentorluk
        </p>
      </div>
    </div>
  );
};

export default Mentor;
