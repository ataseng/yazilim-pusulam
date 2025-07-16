import Instructor from "./Instructor";
import { instructors_data } from "./instructors_data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const repeatedData = [...instructors_data, ...instructors_data]; // 2x çoğalt

const Team = () => {
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
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                    className="team-carousel"
                    style={{ padding: "0 30px" }}
                >
                    {
                        repeatedData.map((instructor_data, index) => (
                            <SwiperSlide key={`instructor_${index}`}>
                                <Instructor data={instructor_data} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default Team;
