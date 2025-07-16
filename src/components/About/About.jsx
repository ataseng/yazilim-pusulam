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
                        <p>Yapay zekâ destekli dijital eğitim platformumuz, yazılım öğrenme sürecini herkes için daha erişilebilir, verimli ve kişiselleştirilmiş hâle getirmeyi amaçlamaktadır. Türkçe kaynak eksikliği yaşayan, yazılıma yeni başlamış ya da kariyer değişikliği yapmayı düşünen bireyler için sade, anlaşılır ve yönlendirici içerikler sunuyoruz. Platformumuz, yalnızca eğitimle sınırlı kalmayıp, aynı zamanda alanında yetkin mentorlar aracılığıyla kullanıcıların yazılım dünyasında doğru adımlarla ilerlemesine destek olur. Hedefimiz, teknolojiyi herkes için anlaşılır kılarak bireylerin kendi yolculuklarını güvenle inşa etmelerini sağlamaktır.</p>
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