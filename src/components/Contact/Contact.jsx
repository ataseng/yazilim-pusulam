const Contact = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="bg-light d-flex flex-column justify-content-center px-5" style={{
                            height: 450
                        }}>
                            <div className="d-flex align-items-center mb-5">
                                <div className="btn-icon bg-primary mr-4">
                                    <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="mt-n1">
                                    <h4>Konumumuz</h4>
                                    <p>Atatürk Üniversitesi Mühendislik Fakültesi</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                                <div className="btn-icon bg-secondary mr-4">
                                    <i className="fa fa-2x fa-phone-alt text-white"></i>
                                </div>
                                <div className="mt-n1">
                                    <h4>Bizi Arayın</h4>
                                    <p >0442 231 1288</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="btn-icon bg-warning mr-4">
                                    <i className="fa fa-2x fa-envelope text-white"></i>
                                </div>
                                <div className="mt-n1">
                                    <h4>E-Posta Gönderin</h4>
                                    <p>destek@ataseng.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="section-title position-relative mb-4">
                            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Herhangi Bir Sorun İçin?</h6>
                            <h1 className="display-4">Bize Mesaj Gönderin</h1>
                        </div>
                        <div className="contact-form">
                            <form>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <input type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="İsim" required="required" />
                                    </div>
                                    <div className="col-6 form-group">
                                        <input type="email" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="E-Posta" required="required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control border-top-0 border-right-0 border-left-0 p-0" placeholder="Konu" required="required" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control border-top-0 border-right-0 border-left-0 p-0" rows="5" placeholder="Mesaj" required="required"></textarea>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-3 px-5" type="submit">Gönder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact