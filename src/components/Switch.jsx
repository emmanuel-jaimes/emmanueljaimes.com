import React, { useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

const sections = {
  Welcome: (
    <p>
      I’m Emmanuel Jaimes, a software engineer passionate about building performant and user-friendly applications.
    </p>
  ),
  Projects: (
    <ul className="list-disc pl-4">
      <li>Digital Smart Thermometer</li>
      <li>Typing Speed App</li>
    </ul>
  ),
  Contact: (
    <p>Email me at <a href="mailto:emnl.jms@gmail.com" className="text-blue-500 underline">emnl.jms@gmail.com</a></p>
  ),
};

function Switch() {
  const [activeTab, setActiveTab] = useState('Welcome'); //landing

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 transition-all duration-500">
      {/* Navigation Menu */}
      <div className="flex gap-4 mb-6">
        {Object.keys(sections).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
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
