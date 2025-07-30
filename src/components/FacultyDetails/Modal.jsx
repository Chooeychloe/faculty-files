
// --- ADD FILE FacultyDetails/Modal.jsx ---

import React from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (

    <div 
      className="fixed inset-0 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose} 
    >
      {/* Modal Content */}
      <div 
  className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-6 relative overflow-hidden"
  onClick={(e) => e.stopPropagation()}
>

        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        
        {/* Modal Body */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
