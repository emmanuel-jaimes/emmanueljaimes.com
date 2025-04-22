import React from 'react';

function Card({ title, children }) {
  return (
    <div className="flex justify-center items-center w-screen min-h-fit pt-8">
      <div className="bg-black rounded-2xl shadow-xl p-6 max-w-xl w-full">
        {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
        <div className="text-white text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
