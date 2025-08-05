import { useNavigate } from "react-router-dom";
import Logo from "/diploma/cvsu.ico";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <header className="bg-red-900 shadow-md w-full sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 flex-wrap gap-y-4">
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={Logo}
              alt="CVSU Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-amber-50">
                Department of Computer Studies
              </h1>
              <p className="text-sm text-amber-50">
                Cavite State University - Bacoor City Campus
              </p>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end space-y-2 text-right">
            <nav className="flex space-x-6 text-amber-50">
              <a href="/home" className="hover:text-amber-400 font-medium">
                Faculty
              </a>
              <a href="/orgchart" className="hover:text-amber-400 font-medium">
                Organizational Chart
              </a>
              <a
                href="#visionmission"
                className="hover:text-amber-400 font-medium"
              >
                Vision & Mission
              </a>
            </nav>

            <nav className="flex space-x-6 text-amber-50">
              <a
                href="#campus-goals"
                className="hover:text-amber-400 font-medium"
              >
                Campus Goals
              </a>
              <a
                href="#dept-objectives"
                className="hover:text-amber-400 font-medium"
              >
                Department Objectives
              </a>
              <a
                href="#cs-objectives"
                className="hover:text-amber-400 font-medium"
              >
                CS Objectives
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
