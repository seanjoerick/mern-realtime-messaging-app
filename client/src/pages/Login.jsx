import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Bell } from 'lucide-react';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { loading, login } = useLogin();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center moving-background relative overflow-hidden">
            {/* Random "Chat" Words */}
            <div className="chat-word chat-1">OwChat</div>
            <div className="chat-word chat-2">OwChat</div>
            <div className="chat-word chat-3">OwChat</div>
            <div className="chat-word chat-4">OwChat</div>
            <div className="chat-word chat-5">OwChat</div>
            <div className="chat-word chat-6">OwChat</div>
            <div className="chat-word chat-7">OwChat</div>
            <div className="chat-word chat-8">OwChat</div>
            <div className="chat-word chat-9">OwChat</div>

            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <h3 className="text-3xl font-extrabold text-center">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Username Input */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70"
                                    >
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="grow"
                                        placeholder="Username"
                                        required
                                    />
                                </label>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="grow"
                                        placeholder="Password"
                                        required
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="mt-5">
                            <button
                                type="submit"
                                className="btn btn-primary w-full flex items-center justify-center"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="loading loading-spinner"></span>
                                        <span className="ml-2">Logging in...</span>
                                    </>
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </div>

                        <p className="mt-3 text-center">
                            Don't have an account?{' '}
                            <Link to="/signup" className="link link-primary">
                                Sign up here
                            </Link>
                        </p>
                    </form>

                    {/* Centered Icon Section */}
                    <div className="card-body text-center">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center">
                                <MessageCircle className="h-7 w-7 text-blue-600" />
                                <span className="ml-2 text-gray-800">Connect with friends instantly!</span>
                            </div>
                            <div className="flex items-center">
                                <Bell className="h-7 w-7 text-yellow-600" />
                                <span className="ml-2 text-gray-800">Stay updated with notifications!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
