import { Link } from "react-router"

const Instructor = ({ data }) => {
    return (
        <div className="team-item">
            <img className="img-fluid w-100" src={`https://ataseng.pythonanywhere.com/${data.user.avatar}`} alt="mentor-image" />
            <div className="bg-light text-center p-4">
                <h5 className="mb-3">{data.user.first_name} {data.user.last_name}</h5>
                <p className="mb-2">{data.expertise}</p>
                <div className="d-flex justify-content-center">
                    {/* <Link className="mx-1 p-1" to={data.linkedin}><i className="fab fa-twitter"></i></Link> */}
                    {/* <Link className="mx-1 p-1" to={data.linkedin}><i className="fab fa-facebook-f"></i></Link> */}
                    <Link className="mx-1 p-1" to={data.linkedin}><i className="fab fa-linkedin-in"></i></Link>
                    <Link className="mx-1 p-1" to={data.instagram}><i className="fab fa-instagram"></i></Link>
                    <Link className="mx-1 p-1" to={data.youtube}><i className="fab fa-youtube"></i></Link>
                    <Link className="mx-1 p-1" to={data.github}><i className="fab fa-github"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Instructor