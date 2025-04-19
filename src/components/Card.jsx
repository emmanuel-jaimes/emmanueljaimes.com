import React from 'react';

function Card({ title, children }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-300 rounded-2xl shadow-xl p-6 max-w-md w-full">
        {title && <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>}
        <div className="text-gray-700 text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
