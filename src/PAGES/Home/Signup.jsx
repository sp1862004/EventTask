import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!🤷‍♀️");
            return;
        }
        alert("Account created successfully!😊👍");

        navigate('/signin');

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 ">🔐 Create an Account 🔐</h2>
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
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
                        <div className="form-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="text-center mt-3">Already have an account? <a href="/signin">Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
