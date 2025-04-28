import React from 'react';

function Card({ title, children }) {
  return (
    <div className="flex justify-center items-center lg:w-full w-sm p-4">
      <div className="bg-black rounded-2xl shadow-xl p-6 w-full max-w-[600px] overflow-hidden">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center md:text-left break-words">
            {title}
          </h2>
        )}
        <div className="text-white text-base md:text-lg leading-relaxed break-words">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
