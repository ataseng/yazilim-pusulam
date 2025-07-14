import { useEffect } from "react";
import Course from "../Course/Course";
// import { courseData } from "./courseData";
// import OwlCarousel from 'react-owl-carousel';
import { useState } from "react";
// import * as $ from "jquery" 
// import Loadable from '@loadable/component';
// const OwlCarousel = Loadable(() => import('react-owl-carousel'));

const Courses = () => {

    const options = {
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    }

    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch("https://ataseng.pythonanywhere.com/course/")
        .then(response => response.json())
        .then(data => {
            setCourseData(data);
        });
    }, []);

    return (
        <div className="container-fluid px-0 py-5">
            <div className="row mx-0 justify-content-center pt-5">
                <div className="col-lg-6">
                    <div className="section-title text-center position-relative mb-4">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Kurslarımız</h6>
                        <h1 className="display-4">En Yeni Kurslarımızı Keşfedin</h1>
                    </div>
                </div>
            </div>

            {/* <OwlCarousel className="courses-carousel" margin={4} {...options}>
                {
                    courseData?.map(course_data => (
                        <Course key={`course_${course_data.id}`} data={course_data} />
                    ))
                }
            </OwlCarousel> */}
            {/* TODO kayitli degilse goster */}
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Hemen Kayıt Olun!</h1>
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control bg-light border-0" placeholder="İsim" style={{
                                            padding: "30px 20px"
                                        }} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control bg-light border-0" placeholder="E-posta" style={{
                                            padding: "30px 20px"
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-12">
                                    <button className="btn btn-primary btn-block" type="submit" style={{
                                        height: 60
                                    }}>Kayıt ol</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses