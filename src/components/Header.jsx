import React, { useState } from "react";
import Logo from "../assets/cvsu.ico";
import PersonCard from "./PersonCard";
import { people } from "../data";


function Header ()  {
  const [search, setSearch] = useState("");
  

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header>
        <div className="bg-blue-600 py-3 shadow-white my-12 rounded font-funnel">
          <div className="flex justify-between items-center px-4">
            <div className="flex item-center mr-20">
              <img
                src={Logo}
                alt=""
                className="pr-5 object-contain"
                width="60"
                height="60"
              />
              <h2 className="text-white font-bold text-2xl">
                Department of Computer Studies <br />{" "}
                <span className="text-yellow-300"> 201 Files</span>
              </h2>
            </div>
            <div className="w-1/2">
              <form action="">
                <input
                  type="text"
                  className="px-5 py-3 border rounded text-gray-900 w-full outline-none bg-white"
                  placeholder="Search by name..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </header>

      <PersonCard data={filteredPeople} />
    </>
  );
};

export default Header;
