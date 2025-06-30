import "./EditProfileMenti.css";

const Profile = () => {
  return (
  
    <div className="menti-profile-wrapper">
      {/* Sol kutu */}
      <div className="menti-profil_Bilgileri">
        <div className="baslik1">
          <p>PROFİL BİLGİLERİ</p>
          <hr />
        </div>

        <div className="menti-kisisel-bilgiler">
          <p>İsim</p>
          <p>Soyisim</p>
          <p>E-posta</p>
          <p>Telefon No</p>
        </div>
      </div>

      {/* Sağ kutu */}
      <div className="menti-profil_Duzenleme">
        <div className="baslik2">
          <p>PROFİLİ DÜZENLE</p>
          <hr />
        </div>

        <div className="menti-foto-Yukleme">
          <i className="fa-solid fa-user" style={{ fontSize: "60px" }}></i>
          <div className="menti-foto-yazi-grup">
            <button className="menti-foto-buton">Fotoğraf Yükle</button>
            <p>Maks. 20MB. JPG ve PNG dosyaları.</p>
          </div>
        </div>

        <hr />

        <div className="bilgi-form">
          <p>Lütfen Hesabınız İçin Gerekli Bilgileri Doldurun</p>

          <form className="form-kapsayici">
            <div className="form-sutun">
              <div className="input-alani">
                <label>Ad</label>
                <input type="text" />
              </div>
              <div className="input-alani">
                <label>Soyad</label>
                <input type="text" />
              </div>
              <div className="input-alani">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="input-alani">
                <label>Telefon</label>
                <input type="tel" />
              </div>
            </div>

            <div className="form-sutun">
              <div className="input-alani">
                <label>Şehir</label>
                <input type="text" />
              </div>
              <div className="input-alani">
                <label>Meslek</label>
                <input type="text" />
              </div>
              <div className="input-alani">
                <label>Doğum Tarihi</label>
                <input type="date" />
              </div>
              <div className="input-alani">
                <label>Cinsiyet</label>
                <input type="text" />
              </div>
            </div>

            <div className="ilgi-alani">
              <label>İlgi Alanları</label>
              <div className="menti-checkbox-grup">
                <label>
                  <input type="checkbox" name="dil" value="python" /> Python
                </label>
                <label>
                  <input type="checkbox" name="dil" value="javascript" /> JavaScript
                </label>
              </div>
            </div>
          </form>
        </div>

        <button className="menti-kaydet-buton">DEĞİŞİKLİKLERİ KAYDET</button>
      </div>
    </div>
  );
};

export default Profile;
