import Instructor from "./Instructor";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMentors } from "../../redux/actions/mentorActions";

const Team = () => {

    const dispatch = useDispatch();

    const mentorList = useSelector(state => state.mentorList);
    const { error, loading, mentors } = mentorList;

    useEffect(() => {

        dispatch(listMentors());

    }, [dispatch]);

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="section-title text-center position-relative mb-5">
                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Eğitmenler</h6>
                    <h1 className="display-4">Eğitmenlerimizle Tanışın</h1>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: mentors.length > 2 ? 3 : 2 },
                        992: { slidesPerView: mentors.length > 3 ? 4 : mentors.length > 2 ? 3 : 2 },
                    }}
                    className="team-carousel"
                    style={{ padding: "0 30px" }}
                >
                    {
                        mentors.map((mentor_data, index) => (
                            <SwiperSlide key={`instructor_${index}`}>
                                <Instructor data={mentor_data} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default Team;
