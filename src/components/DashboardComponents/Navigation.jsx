// ... (imports remain the same)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "/diploma/cvsu.ico";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navigation({ className }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#FBBF24" : "", // amber-400
      borderBottomColor: isActive ? "#FBBF24" : "",
    };
  };

  return (
    <>
      <header className={`bg-red-900 shadow-md w-full ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* MODIFICATION: The logo/title section now uses the `group` utility for a cleaner hover effect. */}
            <div
              className="group flex items-center space-x-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={Logo}
                alt="CVSU Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-amber-50 group-hover:text-amber-400 transition-colors duration-200">
                  Department of Computer Studies
                </h1>
                <p className="text-sm text-amber-50">
                  Cavite State University - Bacoor City Campus
                </p>
              </div>
            </div>

            {/* --- Desktop Navigation --- */}
            {/* MODIFICATION: Restructured the navigation to be more conventional and fix the invalid HTML. */}
            <nav className="hidden md:flex items-center space-x-8 text-amber-50">
              {/* ADDITION: A direct link to Home. */}
              <NavLink
                to="/"
                style={activeLinkStyle}
                className="font-medium border-b-2 border-transparent hover:border-amber-400 transition-colors duration-200"
                // ADDITION: `end` prop ensures this is only active on the exact "/" path.
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

              {/* MODIFICATION: The dropdown is now a separate item, labeled more clearly. */}
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
                  className={`absolute right-0 mt-2 w-56 bg-red-800 rounded-md shadow-lg z-50 origin-top-right transition-all duration-200 ease-out
                             ${
                               isDropdownOpen
                                 ? "transform opacity-100 scale-100"
                                 : "transform opacity-0 scale-95"
                             }`}
                >
                  <div className="py-1">
                    <Link
                      to="/#visionmission"
                      className="block px-4 py-2 text-sm text-amber-50 hover:bg-red-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Vision & Mission
                    </Link>
                    <Link
                      to="/#campus-goals"
                      className="block px-4 py-2 text-sm text-amber-50 hover:bg-red-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Campus Goals
                    </Link>
                    <Link
                      to="/#dept-objectives"
                      className="block px-4 py-2 text-sm text-amber-50 hover:bg-red-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Department Objectives
                    </Link>
                    <Link
                      to="/#cs-objectives"
                      className="block px-4 py-2 text-sm text-amber-50 hover:bg-red-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      CS Objectives
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* --- Mobile Hamburger Button --- */}
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

      {/* --- Mobile Menu Overlay --- */}
      {/* MODIFICATION: Updated the mobile menu to reflect the new, cleaner navigation structure. */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-red-900 z-50 flex flex-col items-center justify-center text-amber-50 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-amber-50 focus:outline-none"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-2xl">
            <Link
              to="/"
              className="hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/home"
              className="hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Faculty
            </Link>
            <Link
              to="/orgchart"
              className="hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Organizational Chart
            </Link>
            <Link
              to="/#visionmission"
              className="hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vision & Mission
            </Link>
            <Link
              to="/#campus-goals"
              className="hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Campus Goals
            </Link>
            <Link
              to="/#dept-objectives"
              className="hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Department Objectives
            </Link>
            <Link
              to="/#cs-objectives"
              className="hover:text-amber-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CS Objectives
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
