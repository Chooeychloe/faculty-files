import React, { useState } from "react";
import { people } from "../../data";

function QuickSearch({ navigate }) {
  const [query, setQuery] = useState("");

  const results = people.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Quick Search</h2>
      <input
        type="text"
        className="w-full border p-2 rounded mb-2"
        placeholder="Search faculty by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="text-sm max-h-40 overflow-auto">
        {results.map((p, i) => (
          <li
            key={i}
            className="cursor-pointer hover:underline text-blue-600"
            onClick={() => navigate(`/person/${p.last_name}${p.first_name}`, { state: { person: p } })}
          >
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickSearch;