import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "/diploma/cvsu.ico";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navigation({ className }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkStyle = ({ isActive }) => ({
    color: isActive ? "#FBBF24" : "",
    borderBottomColor: isActive ? "#FBBF24" : "",
  });

  const handleNavigateToSection = (path, id) => {
    navigate(path);
    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100); // delay ensures route change before scroll
  };

  return (
    <>
      <header className={`bg-red-900 shadow-md w-full ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Title */}
            <div
              className="group flex items-center space-x-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={Logo} alt="CVSU Logo" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-amber-50 group-hover:text-amber-400 transition-colors duration-200">
                  Department of Computer Studies
                </h1>
                <p className="text-sm text-amber-50">
                  Cavite State University - Bacoor City Campus
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-amber-50">
              <NavLink
                to="/"
                style={activeLinkStyle}
                className="font-medium border-b-2 border-transparent hover:border-amber-400 transition-colors duration-200"
                end
              >
                Home
              </NavLink>

              <NavLink
                to="/home"
                style={activeLinkStyle}
                className="font-medium border-b-2 border-transparent hover:border-amber-400 transition-colors duration-200"
              >
                Faculty
              </NavLink>

              <NavLink
                to="/orgchart"
                style={activeLinkStyle}
                className="font-medium border-b-2 border-transparent hover:border-amber-400 transition-colors duration-200"
              >
                Organizational Chart
              </NavLink>

              {/* Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center font-medium border-b-2 border-transparent hover:border-amber-400 transition-colors duration-200 focus:outline-none">
                  About Us
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute right-0 mt-2 w-56 bg-red-800 rounded-md shadow-lg z-50 origin-top-right transition-all duration-200 ease-out ${
                    isDropdownOpen
                      ? "transform opacity-100 scale-100"
                      : "transform opacity-0 scale-95"
                  }`}
                >
                  <div className="py-1">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-amber-50 hover:bg-red-700"
                      onClick={() => handleNavigateToSection("/", "#visionmission")}
                    >
                      Vision & Mission
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-amber-50 hover:bg-red-700"
                      onClick={() => handleNavigateToSection("/", "#campus-goals")}
                    >
                      Campus Goals
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-amber-50 hover:bg-red-700"
                      onClick={() => handleNavigateToSection("/", "#dept-objectives")}
                    >
                      Department Objectives
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-amber-50 hover:bg-red-700"
                      onClick={() => handleNavigateToSection("/", "#cs-objectives")}
                    >
                      CS Objectives
                    </button>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-amber-50 focus:outline-none"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-red-900 z-50 flex flex-col items-center justify-center text-amber-50 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-amber-50 focus:outline-none"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-2xl">
            <button
              className="hover:text-amber-400"
              onClick={() => {
                handleNavigateToSection("/", "#");
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </button>
            <button
              className="hover:text-amber-400"
              onClick={() => {
                navigate("/home");
                setIsMobileMenuOpen(false);
              }}
            >
              Faculty
            </button>
            <button
              className="hover:text-amber-400"
              onClick={() => {
                navigate("/orgchart");
                setIsMobileMenuOpen(false);
              }}
            >
              Organizational Chart
            </button>
            <button
              className="hover:text-amber-400"
              onClick={() => {
                handleNavigateToSection("/", "#visionmission");
                setIsMobileMenuOpen(false);
              }}
            >
              Vision & Mission
            </button>
            <button
              className="hover:text-amber-400"
              onClick={() => {
                handleNavigateToSection("/", "#campus-goals");
                setIsMobileMenuOpen(false);
              }}
            >
              Campus Goals
            </button>
            <button
              className="hover:text-amber-400"
              onClick={() => {
                handleNavigateToSection("/", "#dept-objectives");
                setIsMobileMenuOpen(false);
              }}
            >
              Department Objectives
            </button>
            <button
              className="hover:text-amber-400"
              onClick={() => {
                handleNavigateToSection("/", "#cs-objectives");
                setIsMobileMenuOpen(false);
              }}
            >
              CS Objectives
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
