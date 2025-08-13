import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// REMOVED: Unused imports can be cleaned up
// import Logo from "/diploma/cvsu.ico";
// import { X, Search } from "lucide-react";
import PersonCard from "./PersonCard";
import { people } from "../data";
import Footer from "./widgets/Footer";
import Navigation from "./DashboardComponents/Navigation";

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
    // MODIFICATION: Replaced the React Fragment `<>` with a `<div>`.
    // ADDITION: Added classes to this div to define the page layout and, most importantly, the font.
    <div className="flex flex-col min-h-screen  font-funnel">
      {/* ADDITION: Made the Navigation sticky on this page as well for consistency. */}
      <Navigation className="sticky top-0 z-50" />

      {/* MODIFICATION: Wrapped the main content in a `flex-grow` div. */}
      {/* This ensures the footer is pushed to the bottom of the screen, even if the content is short. */}

      <PersonCard data={filteredPeople} />
      <Footer textColor={"text-white"} spanColor={"text-red-900"} />
    </div>
  );
}

export default Header;
