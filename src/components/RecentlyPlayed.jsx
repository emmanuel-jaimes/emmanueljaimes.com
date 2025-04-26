import React from 'react'

function RecentlyPlayed({ songs }) {
  return (
    <div className="overflow-x-auto py-4 mt-6">
      <div className="flex gap-8">
        {songs.map((song, index) => (
          <div
            key={index}
            className="w-24 flex-shrink-0 text-center"
          >
            <img
              src={song.albumArt}
            //   alt={song.title}
              className="w-24 h-24 rounded-lg mb-2"
            />
            <p className="text-white text-sm break-words leading-tighty">
              {song.title}
            </p>
            <p className="text-gray-500 text-xs break-words leading-tight">
              {song.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyPlayed;
