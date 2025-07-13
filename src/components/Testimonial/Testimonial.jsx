import TestimonialItem from "./TestimonialItem"
import { testimonials_data } from "./testimonials_data"
// import OwlCarousel from 'react-owl-carousel';
// import * as $ from "jquery" 
import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel'));

const Testimonial = () => {

    const options = {
        smartSpeed: 1500,
        items: 1,
        dots: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    }
    return (
        <div className="container-fluid bg-image py-5" style={{
            margin: "90px 0"
        }}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="section-title position-relative mb-4">
                            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Referanslar</h6>
                            <h1 className="display-4">Öğrencilerimiz Ne Diyor?</h1>
                        </div>
                        <p className="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum fugit perspiciatis quo consequuntur optio vitae aperiam qui doloremque quidem tempora velit reprehenderit eius, nisi fugiat labore vel dolor veniam molestiae pariatur dolorem accusantium! Magnam, officiis, velit, quibusdam eligendi accusamus provident harum quisquam perspiciatis nulla aperiam commodi nam numquam possimus?</p>
                    </div>
                    <div className="col-lg-7">

                        <OwlCarousel className="testimonial-carousel" loop autoplay {...options}>
                            {
                                testimonials_data.map((testimonial_data) => (
                                    <TestimonialItem key={`testimonial_${testimonial_data.id}`} data={testimonial_data} />
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial