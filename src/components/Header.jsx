import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/cvsu.ico";
import PersonCard from "./PersonCard";
import { people } from "../data";
import { X, Search } from "lucide-react";
function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <>
      <header>
        <div className="bg-red-900 py-3 shadow-white my-12 rounded font-funnel">
          <div className="flex justify-between items-center px-4">
            {/* Logo Section */}
            <div className="flex item-center mr-20">
              <img
                src={Logo}
                alt=""
                className="pr-5 object-contain"
                width="60"
                height="60"
              />
              <h2
                className="text-amber-50 font-bold text-xl shover:scale-105 cursor-pointer"
                onClick={() => navigate("/home")}
              >
                Department of Computer Studies <br />
                <span className="text-amber-400 text-base">
                  Cavite State University - Bacoor City Campus
                </span>
              </h2>
            </div>

            {/* Search Input Section */}
            <div className="w-1/2 relative">
              <input
                type="text"
                className="pl-10 pr-10 py-3 border rounded-full text-gray-900 w-full outline-none bg-amber-50"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Search icon on the left */}
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              {/* Clear button on the right */}
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 transition-opacity duration-200"
                  title="Clear"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
          </div>
        
        </div>
          <button
              onClick={() => navigate("/")}
              className="text-sm ml-4 px-4 py-2 bg-amber-400 text-red-900 font-semibold rounded hover:bg-amber-300"
            >
              View Organizational Chart
            </button>
      </header>

      <PersonCard data={filteredPeople} />
    </>
  );
}

export default Header;
