//mentor sayfası
import React, { useState, useEffect } from 'react';
import './Mentor.css';
import { Link } from "react-router";



const mentorData = [
    {
        name: "betül kantarcı",
        category: "yazilim kariyer",
        img: "/images/indir.jpeg",
        rating: "5.0",
        reviews: "4",
        job: "Senior Computer Engineer",
        languages: ["English", "Turkish"],
        title: "Cloud Engineer | 9+ years experience | AWS | JS | Python",
        desc: "Tutkulu bir yazılımcı ve mentor.",
        tags: ["Cloud", "Kariyer", "JavaScript"],
        price: 140,
        link: "/MentorPage/Mentorpage"
    },
    {
        name: "özgül kaya",
        category: "isletme kariyer",
        img: "/images/indir.jpeg",
        rating: "4.8",
        reviews: "12",
        job: "Backend Developer",
        languages: ["Turkish", "English"],
        title: "Backend Specialist | 6+ years experience",
        desc: "Junior geliştiricilere yardımcı olmayı seviyorum.",
        tags: ["Backend", "SQL", "NodeJS"],
        price: 90
    },
    {
        name: "zeynep gündoğdu",
        category: "yapayzeka tasarim",
        img: "/images/indir.jpeg",
        rating: "4.7",
        reviews: "7",
        job: "AI Researcher",
        languages: ["Turkish", "English"],
        title: "AI Specialist | 7+ years experience",
        desc: "Derin öğrenme ve görsel tanıma üzerine çalışıyorum.",
        tags: ["AI", "Python", "CV"],
        price: 90
    }
];

const categories = [
    { label: "Yazılım Dünyası", value: "yazilim" },
    { label: "Sistem Dünyası", value: "sistem" },
    { label: "İşletme Dünyası", value: "isletme" },
    { label: "Yapay Zeka Dünyası", value: "yapayzeka" },
    { label: "Tasarım Dünyası", value: "tasarim" },
    { label: "Kariyer Yolu", value: "kariyer" }
];

const Mentor = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleCategoryChange = (value) => {
        setSelectedCategories((prev) =>
            prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
        );
    };

    const filteredMentors = mentorData.filter((mentor) => {
        const categoryList = mentor.category.split(" ");
        const nameMatches = mentor.name.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatches =
            selectedCategories.length === 0 ||
            selectedCategories.some((cat) => categoryList.includes(cat));
        return nameMatches && categoryMatches;
    });

    return (
        <div className="mentor-container">
            <aside className="mentor-sidebar">
                <h3>Kategoriler</h3>
                {categories.map((cat) => (
                    <label key={cat.value}>
                        <input
                            type="checkbox"
                            value={cat.value}
                            checked={selectedCategories.includes(cat.value)}
                            onChange={() => handleCategoryChange(cat.value)}
                        />
                        {cat.label}
                    </label>
                ))}
            </aside>
            {/* <div className="mentor-top-bar">
                <input
                    type="text"
                    placeholder="Mentor ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div> */}




            <div className="mentor-card-container">
                {filteredMentors.map((mentor, idx) => (
                    <div key={idx} className="mentor-card">
                        <img className="mentor-img" src={mentor.img} alt={mentor.name} />
                        <div className="mentor-info">
                            <div className="mentor-header">
                                <h2>{mentor.name} <span className="mentor-country">TR</span></h2>
                                <span className="mentor-badge">⭐ Quick Responder</span>
                            </div>
                            <div className="mentor-meta">
                                <p><strong>{mentor.rating}</strong> ({mentor.reviews} reviews)</p>
                                <p>💼 {mentor.job}</p>
                                <p>🌍 Speaks {mentor.languages.map((lang, i) => (
                                    <strong key={i}> {lang}</strong>
                                ))}</p>
                            </div>
                            <p className="mentor-title">
                                <span className="mentor-highlight">{mentor.title.split('|')[0]}</span> | {mentor.title.split('|').slice(1).join('|')}
                            </p>
                            <p className="mentor-desc">{mentor.desc}</p>
                            <div className="mentor-tags">
                                {mentor.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                            <div className="mentor-footer">
                                <div className="mentor-price">Starting from <strong>${mentor.price}</strong> / month</div>

                                {filteredMentors.map((mentorData) => (
                                    <Link to={mentorData.link}>
                                        <button className="mentor-view-btn">View Profile</button>
                                    </Link>

                                ))}



                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Mentor;
