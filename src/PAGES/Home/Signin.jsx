import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(" 🔓 Signed in successfully! 🔓");
        navigate('/');
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">🙏🏼 Welcome Back 🙏🏼</h2>
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-light">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="form-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Sign In</button>
                        <p className="text-center mt-3">Don't have an account? <a href="/signup">Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
