import React, { useState } from 'react';
import './Login.css'; // CSS dosyan aynı kalabilir

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/register/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Kayıt başarılı!");
                setError('');
            } else {
                setError(data.error || "Kayıt başarısız.");
                setSuccess('');
            }
        } catch (error) {
            console.error("Hata:", error);
            setError("Bir hata oluştu.");
            setSuccess('');
        }
    };

    return (
        <div className="login-container">
            <div className="row justify-content-center bg-image mx-0 mb-5">
                <div className="col-lg-6 py-5">
                    <div className="bg-white p-5 my-5">
                        <h1 className="text-center mb-4">Kayıt Ol</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="first_name"
                                    className="form-control bg-light border-0"
                                    placeholder="İsim"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                    style={{ padding: '30px 20px' }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="last_name"
                                    className="form-control bg-light border-0"
                                    placeholder="Soyisim"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    required
                                    style={{ padding: '30px 20px' }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control bg-light border-0"
                                    placeholder="E-posta"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    style={{ padding: '30px 20px' }}
                                />
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {success && <p style={{ color: 'green' }}>{success}</p>}
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" style={{ height: 60 }}>
                                    Kayıt Ol
                                </button>
                            </div>
                            <p style={{ padding: '30px 20px' }}>
                                Zaten bir hesabınız var mı? <a href="/login">Giriş Yap</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
