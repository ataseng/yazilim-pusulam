import TestimonialItem from "./TestimonialItem";
import { testimonials_data } from "./testimonials_data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <div className="container-fluid bg-image py-5" style={{ margin: "90px 0" }}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="section-title position-relative mb-4">
                            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Referanslar</h6>
                            <h1 className="display-4">Öğrencilerimiz Ne Diyor?</h1>
                        </div>
                        <p >
                            Projemizi daha önce deneyimleyen kullanıcılarımızın geri bildirimleri, sistemin ne kadar etkili ve faydalı olduğunu ortaya koyuyor. İşte onlardan bazıları:
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            spaceBetween={30}
                            className="testimonial-carousel"
                        >
                            {
                                testimonials_data.map((testimonial_data) => (
                                    <SwiperSlide key={`testimonial_${testimonial_data.id}`}>
                                        <TestimonialItem data={testimonial_data} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
