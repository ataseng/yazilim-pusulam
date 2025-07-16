// MentorProfile.jsx
import React, { useEffect } from 'react';
import './EditProfileMentor.css';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/actions/userActions';

const MentorProfile = () => {
  const dispatch = useDispatch();

    const user_details = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = user_details;

    useEffect(() => {

        dispatch(getUserDetails());

    }, [dispatch]);


  return (
    <div className="mentor-profile-container">
      <div className="profil_Bigileri">
        <div className="baslik1">
          <p>PROFİL BİLGİLERİ</p>
          <hr />
        </div>
        <div className="KişiselBİlgiler">
          <p>İsim
          <br />
          <span style={{
            color: "black",
            borderTop: "1px solid #bbb"
          }}>{userInfo.first_name}</span>
          </p>
          <p>Soyisim
          <br />
          <span style={{
            color: "black",
            borderTop: "1px solid #bbb"
          }}>{userInfo.last_name}</span>
          </p>
          <p>E-posta
          <br />
          <span style={{
            color: "black",
            borderTop: "1px solid #bbb"
          }}>{userInfo.email}</span>
          </p>
          <p>Telefon No
          <br />
          <span style={{
            color: "black",
            borderTop: "1px solid #bbb"
          }}>{userInfo.phone_number}</span>
          </p>
        </div>
      </div>

      <div className="profil_Duzenleme">
        <div className="baslik2">
          <p>PROFİLİ DÜZENLE</p>
          <hr />
        </div>
        <div className="foto-Yukleme">
          <FaUser style={{ fontSize: '60px', marginLeft: '35px', marginRight: '20px', marginBottom: '10px' }} />
          <div className="foto-yazi-grup">
            <button className="foto-buton">Fotoğraf Yükle</button>
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
              <div className="input-alani">
                <label>İş Tecrübesi</label>
                <input type="text" />
              </div>
              <div className="input-alani">
                <label htmlFor="sertifika">Sertifika Yükle</label>
                <input type="file" name="sertifika" id="sertifika" accept=".pdf,.jpg,.png" />
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
              <div className="input-alani">
                <label>Mezun Olduğu/Okuduğu Üniversite</label>
                <input type="text" />
              </div>
              <div className="input-alani">
                <label htmlFor="cv">CV Yükle (zorunlu)</label>
                <input type="file" name="cv" id="cv" accept=".pdf,.jpg,.png" />
              </div>
            </div>
            <div className="ilgi-alani">
              <label>İlgi Alanlari</label>
              <div className="checkbox-grup">
                <label><input type="checkbox" name="dil" value="python" /> Python</label>
                <label><input type="checkbox" name="dil" value="javascript" /> JavaScript</label>
              </div>
            </div>
            <button className="kaydet-buton">DEĞİŞİKİLERİ KAYDET</button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default MentorProfile;
