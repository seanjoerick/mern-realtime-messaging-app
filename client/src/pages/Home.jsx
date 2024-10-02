import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Lock, Zap } from 'lucide-react';
import SignUp from './SignUp'; 
import Login from './Login';

export default function Home() {
  const [activeTab, setActiveTab] = useState('signup'); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Connect Instantly with ChatConnect
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Experience seamless, secure messaging that brings you closer to what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="text-indigo-600" />
              <span>Real-time messaging</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="text-indigo-600" />
              <span>End-to-end encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="text-indigo-600" />
              <span>Lightning-fast</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 max-w-md">
          <div className="tabs flex justify-center">
            <button 
              className={`tab px-4 py-2 rounded ${activeTab === 'signup' ? 'tab-active' : 'hover:bg-indigo-200'}`} 
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
            <button 
              className={`tab px-4 py-2 rounded ${activeTab === 'login' ? 'tab-active' : 'hover:bg-indigo-200'}`} 
              onClick={() => setActiveTab('login')}
            >
              Log In
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mt-2">
            {/* Render the appropriate form based on active tab */}
            {activeTab === 'signup' && <SignUp />}
            {activeTab === 'login' && <Login />}
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-sm text-gray-600">
              By using ChatConnect, you agree to our{" "}
              <a href="/terms" className="link link-primary">Terms</a>{" "}
              and{" "}
              <a href="/privacy" className="link link-primary">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <button className="btn btn-lg btn-primary">
          Join ChatConnect
          <ArrowRight className="ml-2" />
        </button>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-600">
        <p>&copy; 2024 ChatConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}
