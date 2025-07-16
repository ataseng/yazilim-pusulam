import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import "./Rnn.css";

const contents = [
  {
    id: 1,
    title: "HTML Nedir",
    videoUrl: "https://youtu.be/CsRT-4sucig?si=VQeKfSstgin2A0jP",
  },
  {
    id: 2,
    title: "En Çok Kullanılan HTML Etiketleri Nelerdir",
    videoUrl: "https://youtu.be/CsRT-4sucig?si=fBEnYfJWfMig5swh",
  },
  {
    id: 3,
    title: "Başlık Etiketleri Kullanımı",
    videoUrl: "https://youtu.be/tKQB7twxcOY?si=m9bdulU_N3jGV_B7",
  }
];

const Rnn = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [descriptions, setDescriptions] = useState({});
  const [category, setCategory] = useState("html"); // Şimdilik sabit

  useEffect(() => {
    import(`./descriptions/${category}Descriptions.js`)
      .then((module) => setDescriptions(module.default))
      .catch((err) => {
        console.error("Açıklama dosyası yüklenemedi:", err);
        setDescriptions({});
      });
  }, [category]);

  const selectedContent = contents.find(content => content.id === selectedId);
  const selectedDescription = descriptions[selectedId] || "Yükleniyor...";

  return (
    <div className="rnn-container">
      {/* Sol Menü */}
      <aside className="rnn-sidebar">
        <h3 className="rnn-sidebar-title">HTML</h3>

        <div className="rnn-section">
          <h4>HTML Giriş</h4>
          {contents.map(item => (
            <label key={item.id} className={item.id === selectedId ? "active" : ""}>
              <input
                type="checkbox"
                checked={item.id === selectedId}
                onChange={() => setSelectedId(item.id)}
              />
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedId(item.id);
                }}
              >
                {item.title}
              </a>
            </label>
          ))}
        </div>
      </aside>

      {/* Sağ İçerik */}
      <div className="rnn-content">
        <h2>{selectedContent.title}</h2>
        <div className="rnn-video-wrapper">
          <ReactPlayer width={"100%"} url={selectedContent.videoUrl} controls={true} />
        </div>
        <div className="rnn-description">
          <p>{selectedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Rnn;
