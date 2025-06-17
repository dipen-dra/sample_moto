
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MotoFixLogo } from '../assets/MotoFixLogo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navbarStyle = "bg-white shadow-md sticky top-0 z-50";


  const isLoginPage = location.pathname === '/login';
  const isSignupView = location.pathname === '/login' && location.hash === '#/signup';

  const commonLinkClass = "px-4 py-1.5 text-base font-medium border border-blue-600 rounded-md transition";
  const activeLinkClass = "bg-gray-300 text-gray-400 border-gray-300 cursor-not-allowed";
  const enabledLinkClass = "text-blue-600 hover:bg-blue-600 hover:text-white";

  const handleLoginClick = () => {
    if (!isLoginPage || isSignupView) {
      navigate('/login#/login');
      window.location.reload(); // Scroll to top when navigating to login
    }
  };

  const handleSignupClick = () => {
    if (!isLoginPage || !isSignupView) {
      navigate('/login#/signup');
      window.location.reload(); // Scroll to top when navigating to signup
    }
  };

  return (
    <nav className={navbarStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0 mr-auto cursor-pointer" onClick={() => navigate("/")}>
            <MotoFixLogo />
          </div>

          {/* Center nav */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            <button onClick={() => navigate("/")} className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Home</button>
            <button onClick={() => navigate("/#service")} className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Services</button>
            <button onClick={() => navigate("/#about")} className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-semibold">About Us</button>
            <button onClick={() => navigate("/#contact")} className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Contact</button>
          </div>

          {/* Right: Login/Signup */}
          <div className="hidden md:flex items-center space-x-3 ml-auto">
            <button
              disabled={isLoginPage && !isSignupView}
              onClick={handleLoginClick}
              className={`${commonLinkClass} ${(isLoginPage && !isSignupView) ? activeLinkClass : enabledLinkClass}`}
            >
              Login
            </button>
            <button
              disabled={isSignupView}
              onClick={handleSignupClick}
              className={`${commonLinkClass} ${isSignupView ? activeLinkClass : enabledLinkClass}`}
            >
              Register
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 p-2 rounded-md text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <button onClick={() => navigate("/")} className="block w-full text-left text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Home</button>
          <button onClick={() => navigate("/#service")} className="block w-full text-left text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Services</button>
          <button onClick={() => navigate("/#about")} className="block w-full text-left text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-semibold">About Us</button>
          <button onClick={() => navigate("/#contact")} className="block w-full text-left text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Contact</button>
          <button
            disabled={isLoginPage && !isSignupView}
            onClick={handleLoginClick}
            className={`block w-full text-left px-3 py-2 rounded-md text-lg font-medium transition ${(isLoginPage && !isSignupView) ? 'bg-gray-300 text-gray-400 cursor-not-allowed' : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
          >
            Login
          </button>
          <button
            disabled={isSignupView}
            onClick={handleSignupClick}
            className={`block w-full text-left px-3 py-2 rounded-md text-lg font-medium transition ${isSignupView ? 'bg-gray-300 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
