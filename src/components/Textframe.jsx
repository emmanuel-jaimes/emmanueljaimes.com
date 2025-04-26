import React from 'react';

function Textframe({ imgsrc, title, description, timeframe, link, size, description2 }) {
  const colors = [
    'red', 'blue', 'green', 'yellow', 'purple'
  ];

  return (
    <div className="py-5 p-2">
      <div className="bg-gray-200 rounded-2xl p-4">
        <div className="inline-flex text-black gap-2 text-2xl items-center">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className='bg-gray-700 p-2 rounded-2xl'>
              <img src={imgsrc} alt="" className={size} />
            </a>
          ) : (
            <img src={imgsrc} alt="" className={size} />
          )}
          <h1 className="font-semibold">{title}</h1>
        </div>

        <div className="flex gap-4 text-black">
          <p>{description}</p>
          <span className="text-black italic">{timeframe}</span>
        </div>

        <div className="text-black mt-2">
          <div className="flex flex-wrap gap-2 mt-1">
            {description2?.map((word, i) => (
              <span
                key={i}
                className={`rounded-full px-3 py-2 text-sm bg-${colors[i % colors.length]}-200 `}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textframe;
