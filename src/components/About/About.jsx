import about from "../../assets/images/about.jpg";
import { useSelector } from "react-redux";


const About = () => {

    const mentorList = useSelector(state => state.mentorList);
    const { error, loading, mentors } = mentorList;

    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-5 mb-5 mb-lg-0"
                        style={{
                            minHeight: 500
                        }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src={about} style={{
                                objectFit: "cover"
                            }} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="section-title position-relative mb-4">
                            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Hakkımızda</h6>
                            <h1 className="display-4">Çevrimiçi Eğitimler</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sequi vitae totam reprehenderit cum iure dicta impedit illum incidunt facere corporis eligendi, error praesentium obcaecati porro earum voluptatibus at fuga adipisci aspernatur nam similique beatae corrupti amet! Nihil distinctio, temporibus quos corrupti exercitationem ratione dolores? Praesentium at nisi optio necessitatibus deleniti maiores aut vero pariatur ab non ipsam quo officiis dolor vel id natus eos asperiores quam omnis a earum, repellat incidunt ullam illo! Totam laudantium explicabo amet laborum animi earum suscipit aspernatur reprehenderit, nulla aut necessitatibus libero qui dolorem accusamus iusto? Illo doloremque sit quibusdam cumque modi atque nostrum!</p>
                        <div className="row pt-3 mx-0">
                            <div className="col-4 px-0">
                                <div className="bg-primary text-center p-4">
                                    <h1 className="text-white" data-toggle="counter-up">5</h1>
                                    <h6 className="text-uppercase text-white">Çevrimiçi<span className="d-block">Eğitim</span></h6>
                                </div>
                            </div>
                            <div className="col-4 px-0">
                                <div className="bg-secondary text-center p-4">
                                    <h1 className="text-white" data-toggle="counter-up">{mentors?.length}</h1>
                                    <h6 className="text-uppercase text-white">Yetenekli<span className="d-block">Mentör</span></h6>
                                </div>
                            </div>
                            <div className="col-4 px-0">
                                <div className="bg-warning text-center p-4">
                                    <h1 className="text-white" data-toggle="counter-up">5</h1>
                                    <h6 className="text-uppercase text-white">Mutlu<span className="d-block">Öğrenci</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About