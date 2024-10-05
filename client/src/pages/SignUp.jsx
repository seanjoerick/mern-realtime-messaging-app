import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Bell } from 'lucide-react';
import useSignup from '../hooks/useSignup';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    gender: 'male',
    terms: false,
  });

  const { loading, signup } = useSignup();
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms) {
      toast.error('You must accept the Terms and Conditions to sign up.');
      return;
    }
    await signup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h3 className="text-3xl font-extrabold text-center">Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              
              {/* Full Name Input */}
              <div>
                <label className="label" htmlFor="fullName">
                  <span className="label-text">Full Name</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="grow"
                    placeholder="Full Name"
                    required
                  />
                </label>
              </div>

              {/* Username Input */}
              <div>
                <label className="label" htmlFor="username">
                  <span className="label-text">Username</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    id="username"
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
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="grow"
                    placeholder="Password"
                    required
                  />
                </label>
              </div>

              {/* Gender Selection */}
              <div>
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <div className="flex space-x-4">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      className="radio radio-primary"
                    />
                    <span className="label-text ml-2">Male</span>
                  </label>
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                      className="radio radio-primary"
                    />
                    <span className="label-text ml-2">Female</span>
                  </label>
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={formData.gender === 'other'}
                      onChange={handleChange}
                      className="radio radio-primary"
                    />
                    <span className="label-text ml-2">Other</span>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="checkbox"
                />
                <label htmlFor="terms" className="ml-3 label-text">
                  I accept the{' '}
                  <Link to="#" className="link link-primary">Terms and Conditions</Link>
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
                    <span className="ml-2">Creating Account...</span>
                  </>
                ) : (
                  'Create an account'
                )}
              </button>
            </div>

            {/* Already have an account link */}
            <p className="mt-3 text-center">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary">
                Login here
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

export default SignUp;
