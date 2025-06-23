import feature from "../../assets/images/feature.jpg";

const Feature = () => {
    return (
        <div className="container-fluid bg-image" style={{
            margin: "90px 0"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 my-5 pt-5 pb-lg-5">
                        <div className="section-title position-relative mb-4">
                            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Neden Bizi Seçmelisiniz?</h6>
                            <h1 className="display-4">Neden Bizimle Öğrenmeye Başlamalısınız?</h1>
                        </div>
                        <p className="mb-4 pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, numquam quo non in accusamus eos repudiandae libero reiciendis esse? Minima, distinctio aliquam quasi, quidem, voluptas ipsa iusto vel vero sapiente recusandae non. Recusandae enim, blanditiis odit dolorem explicabo asperiores adipisci, molestiae, ullam neque fugit hic ea quia earum est porro!</p>
                        <div className="d-flex mb-3">
                            <div className="btn-icon bg-primary mr-4">
                                <i className="fa fa-2x fa-graduation-cap text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Uzman Mentörler</h4>
                                <p>Belirlediğiniz alanda doğru yolda ilerleyebilmeniz için 7 / 24 iletişime geçip destek ve yönlendirme alabileceğiniz uzman mentörler.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <div className="btn-icon bg-secondary mr-4">
                                <i className="fa fa-2x fa-certificate text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Bitirme Sertifikası</h4>
                                <p>Başarıyla tamamladığınız eğitimlerden sonra CV'nize ekleyebileceğiniz sertifikanız ile portföyünüzü güçlendirin.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="btn-icon bg-warning mr-4">
                                <i className="fa fa-2x fa-book-reader text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Güncel İçerikler</h4>
                                <p className="m-0">Belirlediğiniz alanda en güncel ve detaylı içeriklerle geleceğe en doğru adımları atın.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5" style={{
                        minHeight: 500
                    }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src={feature} style={{
                                objectFit: "cover"
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature