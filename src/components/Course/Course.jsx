import { Link } from "react-router";

const Course = ({ data }) => {
    return (
        <div className="courses-item position-relative">
            <img className="img-fluid" src={`https://ataseng.pythonanywhere.com/${data.image}`} alt="" />
            <div className="courses-text">
                <h4 className="text-center text-white px-3">{data.title}</h4>
                <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                        <span className="text-white"><i className="fa fa-user mr-2"></i>{data.lecturer.user.first_name} {data.lecturer.user.last_name}</span>
                        <span className="text-white"><i className="fa fa-star mr-2"></i>{data.rating} <small>({data.review_count})</small></span>
                    </div>
                </div>
                <div className="w-100 bg-white text-center p-4" >
                    <Link className="btn btn-primary" to="/Rnn">Kurs Detayı</Link>
                    {/* <a className="btn btn-primary" href=""></a> */}
                </div>
            </div>
        </div>
    )
}

export default Course;