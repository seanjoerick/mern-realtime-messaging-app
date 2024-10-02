import React from "react";

const Login = () => {
    return (
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="login-email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="john@example.com"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="login-password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="login-password"
            type="password"
            placeholder="Password"
            required
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Log In
        </button>
      </form>
    );
};

export default Login;
