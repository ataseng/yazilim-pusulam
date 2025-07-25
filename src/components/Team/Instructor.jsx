
const Instructor = ({ data }) => {
    return (
        <div className="team-item">
            <img className="img-fluid w-100" src={`https://ataseng.pythonanywhere.com/${data.user.avatar}`} alt="mentor-image" />
            <div className="bg-light text-center p-4">
                <h5 className="mb-3">{data.user.first_name} {data.user.last_name}</h5>
                <p className="mb-2">{data.expertise}</p>
                <div className="d-flex justify-content-center">
                    <a className="mx-1 p-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="mx-1 p-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-1 p-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="mx-1 p-1" href="#"><i className="fab fa-instagram"></i></a>
                    <a className="mx-1 p-1" href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Instructor