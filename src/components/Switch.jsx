import React, { useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import RecentlyPlayed from './RecentlyPlayed';
import Experience from './Experience';
import Projects from './Projects';

const sampleSongs = [
    {
      title: "BAILE INoLVIDABLE",
      artist: "Bad Bunny",
      albumArt: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411"
    },
    {
        title: "Mirada",
        artist: "Ivan Cornejo",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2738f5be6be73a2742bbf0e4fef"
    },
    {
        title: "rookie of the year",
        artist: "Young Miko",
        albumArt: "https://i.scdn.co/image/ab67616d0000b27310dfb6ef442ace580aa5a2bf"
    },
    {
        //twitter image
        title: "Funny Papers",
        artist: "Mac Miller",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2739a9c4cd69a6f514dfbb7305a"
    },
    {
        title: "FUEGO",
        artist: "GANGGY",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273ce508549a22c5fd5c16e9322"
    },
  ];

const sections = {
  Welcome: (
    <>
        <p>
            Glad you're here. <br />Check out what I have been listening to.
        </p>
        <RecentlyPlayed songs={sampleSongs} />
    </>
  ),
  Projects: (
    <Projects/>
  ),
  Experience: (
    <Experience/>
  ),
};

function Switch() {
  const [activeTab, setActiveTab] = useState('Welcome'); //landing

  return (
    <div className="min-h-screen overflow flex flex-col items-center pt-8 transition-all duration-500">
      {/* Navigation Menu */}
      <div className="flex gap-4 mb-6">
        {Object.keys(sections).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab ? 'bg-blue-800 text-white' :'bg-black text-white border-b border-1'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* animation card content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Card title={activeTab}>
            {sections[activeTab]}
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Switch;
