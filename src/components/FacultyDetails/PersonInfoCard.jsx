import React from "react";
// import { toFormalCase } from '../utils/formatTitleCase'


function PersonInfoCard({
 
  name,
  designation,
  image,
  diploma,
  masters_diploma,
  tor,
  resume,
  certificates,
  speaking_engagements,
  membership
}) {
 return (
    <div className="w-1/2 mt-12 p-6 bg-amber-50 rounded shadow font-funnel mx-6 ">
      <div className="w-48 h-48 bg-red-900 mb-6 rounded-xl overflow-hidden mx-auto">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
      <h2 className="text-3xl font-bold text-center mb-2">{name}</h2>
      <p className="text-center text-red-900 mb-4">{designation}</p>

      <div className="flex flex-col justify-center gap-4 mb-6">
        {Array.isArray(diploma) && diploma.length > 0 && (
          <div className="mt-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Diploma:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {diploma.map((doc, index) => (
                <li key={index}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-red-900"
                  >
                    {/* {doc.name || `Diploma ${index + 1}`} */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {masters_diploma && (
          <a
            href={masters_diploma.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-red-900"
          >
            {/* {masters_diploma}  */}
          </a>
        )}
        {Array.isArray(tor) && tor.length > 0 && (
          <div className="mt-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Transcript of Records:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {tor.map((doc, index) => (
                <li key={index}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-red-900"
                  >
                    {doc.name || `TOR ${index + 1}`}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {resume && (
          <a
            href={resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-red-900"
          >
            View Resume
          </a>
        )}
        {Array.isArray(certificates) && certificates.length > 0 && (
          <div className="mt-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Certificates:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {certificates.map((doc, index) => (
                <li key={index}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-red-900"
                  >
                    {doc.name || `Certificate ${index + 1}`}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {Array.isArray(speaking_engagements) &&
          speaking_engagements.length > 0 && (
            <div className="mt-4">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Speaking Engagements:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {speaking_engagements.map((doc, index) => (
                  <li key={index}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-red-900"
                    >
                      View {doc.name || `Engagement ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
            {Array.isArray(membership) &&
          membership.length > 0 && (
            <div className="mt-4">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                Memberships and Affiliations:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {membership.map((doc, index) => (
                  <li key={index}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-red-900"
                    >
                       {doc.name || `Engagement ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
}

export default PersonInfoCard;