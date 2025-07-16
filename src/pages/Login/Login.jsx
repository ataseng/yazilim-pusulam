import React, { useEffect, useState } from 'react';
import './Login.css'; // CSS dosyan aynı kalabilir
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/userActions';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if(userInfo){
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);
    

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <div className="login-container">
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Giriş Yap</h1>
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control bg-light border-0"
                                    placeholder="E-posta"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    style={{ padding: '30px 20px' }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control bg-light border-0"
                                    placeholder="Şifre"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    style={{ padding: '30px 20px' }}
                                />
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {!error && <p style={{ color: 'green' }}>{!error}</p>}
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" style={{ height: 60 }}>
                                    Giriş Yap
                                </button>
                            </div>
                            {/* <p style={{ padding: '30px 20px' }}>
                                Zaten bir hesabınız var mı? <a href="/login">Giriş Yap</a>
                            </p> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
