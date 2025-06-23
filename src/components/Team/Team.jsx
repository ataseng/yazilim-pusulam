import Instructor from "./Instructor";
import { instructors_data } from "./instructors_data";
import OwlCarousel from 'react-owl-carousel';


const Team = () => {

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
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="section-title text-center position-relative mb-5">
                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Eğitmenler</h6>
                    <h1 className="display-4">Eğitmenlerimizle Tanışın</h1>
                </div>

                <OwlCarousel className="team-carousel position-relative owl-nav" style={{
                    padding: "0 30px"
                }} {...options}>
                    {
                        instructors_data.map((instructor_data) => (
                            <Instructor key={`instructor_${instructor_data.id}`} data={instructor_data} />
                        ))
                    }
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Team