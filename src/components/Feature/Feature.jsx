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
                        <p className="mb-4 pb-2"> YAZILIM SERÜVENİNDE KAYBOLMA, YAZILIM PUSULAN HEP YANINDA</p>
                        <div className="d-flex mb-3">
                            <div className="btn-icon bg-primary mr-4">
                                <i className="fa fa-2x fa-graduation-cap text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Uzman Mentörler</h4>
                                <p>Alanında deneyimli mentor kadromuz, bireysel öğrenme yolculuğunuzda size rehberlik eder. Sadece teknik bilgi değil; kariyer planlama, proje geliştirme ve sektörel yönlendirme konusunda da yanınızdalar.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <div className="btn-icon bg-secondary mr-4">
                                <i className="fa fa-2x fa-certificate text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Güncel Eğitim İçeriği</h4>
                                <p>Sürekli yenilenen içeriklerimiz sayesinde, yazılım dünyasındaki en güncel teknolojileri ve trendleri takip ederek öğrenirsiniz. Temel konulardan ileri düzeye kadar geniş bir yelpazede eğitim sunuyoruz.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="btn-icon bg-warning mr-4">
                                <i className="fa fa-2x fa-book-reader text-white"></i>
                            </div>
                            <div className="mt-n1">
                                <h4>Yapay Zekâ Desteği</h4>
                                <p>Yapay zekâ tabanlı sistemimiz, öğrenme stilinize ve seviyenize uygun içerikleri önerir. Böylece daha hızlı, verimli ve kişiselleştirilmiş bir öğrenme deneyimi yaşarsınız.</p>
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