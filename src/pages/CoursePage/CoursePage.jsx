import "./coursePage.css";
import React, { useState } from "react";
import { Link } from "react-router";

const categories = [
    "Web Dünyası",
    "Frontend Geliştirme",
    "Backend Geliştirme",
    "Yapay Zeka",
    "Veri"
];

const courses = [
    {
        id: 0,
        title: "RNN Yinelemeli Sinir Ağları",
        badge: "BTK",
        likes: 17,
        students: 397,
        image: "https://img.icons8.com/clouds/452/database.png",
        keywords: ["Backend Geliştirme", "Yapay Zeka"],
        link: "/Rnn"
    },
    {
        id: 1,
        title: "Excel Pivot Tablolarla Veri Analizi",
        badge: "BTK",
        likes: 26,
        students: 2000,
        image: "https://img.icons8.com/clouds/452/database.png",
        keywords: ["Web Dünyası"]
    },
    {
        id: 2,
        title: "Büyük Veriye Giriş",
        badge: "BTK",
        likes: 43,
        students: 2300,
        image: "https://img.icons8.com/clouds/452/database.png",
        keywords: ["Backend Geliştirme", "Veri"]
    },
    {
        id: 3,
        title: "PyTorch ile Derin Öğrenme Algoritmaları",
        badge: "BTK",
        likes: 40,
        students: 1500,
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png",
        keywords: ["Yapay Zeka", "Backend Geliştirme"]
    }
];

export default function CoursePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Kategori seçme/çıkarma
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Hem arama hem kategoriye göre filtreleme
    const filteredCourses = courses.filter((course) => {
        const titleMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.some((cat) => course.keywords.includes(cat));
        return titleMatch && categoryMatch;
    });

    return (
        <div className="course-container">
            {/* Sol Panel - Kategoriler */}
            <aside className="category-panel">
                <h3>Kategoriler</h3>
                {categories.map((category, i) => (
                    <div key={i}>
                        <input
                            type="checkbox"
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                        <label htmlFor={category}>{category}</label>
                    </div>
                ))}
            </aside>

            {/* Ana İçerik */}
            <main className="course-main">
                <div className="course-top">
                    <div className="course-education">
                        <h4>Eğitimler</h4>
                        <p>{filteredCourses.length} Eğitim Bulunuyor</p>
                    </div>
                    {/* Arama Çubuğu */}
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Kurs ara 🔍"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="course-grid">
                    {filteredCourses.map((course) => (
                        <Link
                            to={course.link} key={course.id} style={{ textDecoration: 'none' }}
                        >
                            <div className="course-card">
                                <div className="course-image">
                                    <img src={course.image} alt={course.title} />
                                </div>
                                <div className="course-explanation">
                                    <h4>{course.title}</h4>
                                </div>

                                <div className="card-footer">
                                    <span>👍 {course.likes}</span>
                                    <span>👥 {course.students.toLocaleString()}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
