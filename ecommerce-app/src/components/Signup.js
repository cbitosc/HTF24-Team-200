import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Phone } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [signupMethod, setSignupMethod] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
    otp: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically make an API call to create the account
    // For demo purposes, we'll simulate a successful signup
    navigate('/login');
  };

  const sendOtp = async () => {
    // Implement OTP sending logic here
    setIsOtpSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-600">Sign up to get started</p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`flex items-center px-4 py-2 rounded-full ${
              signupMethod === 'email' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSignupMethod('email')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Email
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-full ${
              signupMethod === 'phone' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSignupMethod('phone')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Phone
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {signupMethod === 'email' ? 'Email' : 'Phone Number'}
            </label>
            <input
              type={signupMethod === 'email' ? 'email' : 'tel'}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.emailOrPhone}
              onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
            />
          </div>

          {!isOtpSent ? (
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
              <input
                type="text"
                maxLength="6"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
              />
            </div>
          )}

          {!isOtpSent ? (
            <button
              type="button"
              onClick={sendOtp}
              className="text-blue-600 hover:text-blue-500 text-sm"
            >
              Verify with OTP instead
            </button>
          ) : (
            <button
              type="button"
              onClick={sendOtp}
              className="text-blue-600 hover:text-blue-500 text-sm"
            >
              Resend OTP
            </button>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;