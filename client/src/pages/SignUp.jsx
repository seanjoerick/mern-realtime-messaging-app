import React from "react";

const SignUp = () => {
    return (
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="signup-name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="signup-name"
            type="text"
            placeholder="Name"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-username" className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            id="signup-username"
            type="text"
            placeholder="Username"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-gender" className="label">
            <span className="label-text">Gender</span>
          </label>
          <select
            id="signup-gender"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            required
            className="input input-bordered w-full"
          />
        </div>
      
        <button type="submit" className="btn btn-primary w-full">
          Sign Up
        </button>
      </form>
    );
};

export default SignUp;
