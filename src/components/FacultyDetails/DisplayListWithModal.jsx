import React, { useState } from 'react';
import Modal from './Modal';
import { toFormalCase } from '../utils/formatTitleCase';

function DisplayListWithModal({ title, items }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!Array.isArray(items) || items.length === 0) {
    return null; // Don't render anything if there are no items
  }

  const visibleItems = items.slice(0, 3);
  const hasMoreItems = items.length > 3;

  return (
    <div className="mt-4">
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}:</h3>
      {/* Initial view remains a list */}
      <ul className="list-disc list-inside space-y-1">
        {visibleItems.map((doc, index) => (
          <li key={index}>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-900"
            >
              {toFormalCase(doc.name) || `${title} ${index + 1}`}
            </a>
          </li>
        ))}
      </ul>
      {hasMoreItems && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm text-red-800 hover:underline font-semibold mt-2"
        >
          VIEW ALL
        </button>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`All ${title}`}
      >
        {/* Modal content is now a table with hoverable rows */}
        <div className="max-h-96 overflow-y-auto max-w-3xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((doc, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-red-900 block w-full"
                      >
                        {toFormalCase(doc.name) || `${title} ${index + 1}`}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DisplayListWithModal;