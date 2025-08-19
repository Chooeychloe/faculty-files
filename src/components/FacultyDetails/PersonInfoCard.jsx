import { toFormalCase } from "../utils/formatTitleCase";
import DisplayListWithModal from "./DisplayListWithModal";

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
  eligibility,
  membership,
  portfolio,
}) {
  return (
    // Main card container
    <div className="w-full p-6 lg:p-8 bg-amber-50 rounded-2xl shadow font-funnel">
      {/* Flex container for the two-column layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* === LEFT COLUMN === */}
        <div className="flex-shrink-0 lg:w-1/3 flex flex-col items-center text-center">
          <div className="w-48 h-48 bg-red-900 mb-6 rounded-xl overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-2">{name}</h2>

          {designation && (
            <div className="text-center mb-4">
              <p className="text-xl font-semibold text-red-900 mb-1">
                {designation}
              </p>
            </div>
          )}

          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-900"
            >
             <i className="text-blue-600">{portfolio}</i> 
            </a>
          )}

          {/* {designation &&
            Array.isArray(designation) &&
            designation > 0 && (
              <div className="mb-6 border-t pt-4 border-gray-300">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Designations
                </h3>
                <ul className="list-disc list-inside space-y-1 text-red-900 text-start">
                  {designations.last_designation.map((item, index) => (
                    <li key={index} className="text-sm">
                      <span className="font-medium">{item.designation}</span>(
                      {item.year})
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="flex-grow lg:w-2/3">
          {/* This is a nested two-column layout for the lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Sub-Column 1 */}
            <div>
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
                          {toFormalCase(doc.name) || `Diploma ${index + 1}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {Array.isArray(masters_diploma) && masters_diploma.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Master's Diploma:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {masters_diploma.map((doc, index) => (
                      <li key={index}>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-red-900"
                        >
                          {toFormalCase(doc.name) ||
                            `Master's Diploma ${index + 1}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
                          {toFormalCase(doc.name) || `TOR ${index + 1}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {Array.isArray(eligibility) && eligibility.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Eligibility:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {eligibility.map((doc, index) => (
                      <li key={index}>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-red-900"
                        >
                          {toFormalCase(doc.name) || `TOR ${index + 1}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {resume && (
                <div className="mt-4">
                  <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-gray-800 hover:underline hover:text-red-900"
                  >
                    View Resume
                  </a>
                </div>
              )}
            </div>

            {/* Sub-Column 2 */}
            <div>
              <DisplayListWithModal title="Certificates" items={certificates} />
              <DisplayListWithModal
                title="Speaking Engagements"
                items={speaking_engagements}
              />

              {Array.isArray(membership) && membership.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Memberships & Affiliations:
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
                          {toFormalCase(doc.name) || `Membership ${index + 1}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonInfoCard;
