import { useEffect, useState } from "react";
import Instructor from "./Instructor";
// import { instructors_data } from "./instructors_data";
import OwlCarousel from 'react-owl-carousel';
import { useDispatch, useSelector } from "react-redux";
import { listMentors } from "../../redux/actions/mentorActions";

const Team = () => {

    const dispatch = useDispatch();

    const mentorList = useSelector(state => state.mentorList);
    const { error, loading, mentors } = mentorList;

    useEffect(() => {

        dispatch(listMentors());

    }, [dispatch]);

    // const [mentors, setMentors] = useState([]);

    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/user/mentor/all/")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setMentors(data);
    //         });
    // }, [])

    const options = {
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: mentors.length > 2 ? 3 : 2
            }
        },
    }

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="section-title text-center position-relative mb-5">
                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Mentörler</h6>
                    <h1 className="display-4">Mentörlerimizle Tanışın</h1>
                </div>

                <OwlCarousel className="team-carousel position-relative owl-nav" style={{
                    padding: "0 30px"
                }} {...options}>
                    {
                        mentors.map((mentor_data) => (
                            <Instructor key={`instructor_${mentor_data.id}`} data={mentor_data} />
                        ))
                    }
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Team