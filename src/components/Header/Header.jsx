
const Header = () => {
    return (
        <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{
            marginBottom: 90
        }}>
            <div className="container text-center my-5 py-5">
                <h1 className="text-white mt-4 mb-4">Dijital Gelişim</h1>
                <h1 className="text-white display-1 mb-5">Yazılım Eğitimleri</h1>
                {/* <div className="mx-auto mb-5" style={{
                    width: "100%",
                    maxWidth: 600
                }}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Kurslar</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Courses 1</a>
                                <a className="dropdown-item" href="#">Courses 2</a>
                                <a className="dropdown-item" href="#">Courses 3</a>
                            </div>
                        </div>
                        <input type="text" className="form-control border-light" style={{
                            padding:"30px 25px"
                        }} placeholder="Ara" />
                            <div className="input-group-append">
                                <button className="btn btn-secondary px-4 px-lg-5">Ara</button>
                            </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Header