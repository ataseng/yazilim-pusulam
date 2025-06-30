import "./Login.css";
import { Link } from "react-router";
import React from 'react'
import { useState } from "react";

const Login = () => {
    const Login = () => {

        const [formData, SetFormData] = useState({
            first_name: "",
            last_name: "",
            email: "",
            phone_number: ""
        });


    }
    return (
        <div>
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Hemen Kayıt Olun!</h1>
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control bg-light border-0" placeholder="İsim" style={{
                                            padding: "30px 20px"
                                        }} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Soyisim" style={{
                                            padding: "30px 20px"
                                        }} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control bg-light border-0" placeholder="E-posta" style={{
                                            padding: "30px 20px"
                                        }} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Şifre" style={{
                                            padding: "30px 20px"
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-12">
                                    <button className="btn btn-primary btn-block" type="submit" style={{
                                        height: 60
                                    }}>Kayıt Ol</button>
                                </div>
                                <p style={{
                                    padding: "30px 20px"
                                }}>Hesabın var mı? <a href="#">Giriş Yap</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

