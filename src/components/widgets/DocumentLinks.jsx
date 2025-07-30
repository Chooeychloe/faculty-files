import React from "react";

function DocumentLinks() {
  const documents = [
    { name: "Masterlist.pdf", url: "/docs/Masterlist.pdf" },
    { name: "TOR_Template.pdf", url: "/docs/TOR_Template.pdf" },
    { name: "Evaluation_Guide.pdf", url: "/docs/Evaluation_Guide.pdf" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Documents</h2>
      <ul className="text-sm">
        {documents.map((doc, idx) => (
          <li key={idx}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              📂 {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentLinks;