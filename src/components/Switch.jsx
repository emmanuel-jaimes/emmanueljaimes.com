import React, { useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';

const sections = {
  Howdy: (
    <About/>
  ),
  Projects: (
    <Projects/>
  ),
  Experience: (
    <Experience/>
  ),
};

function Switch() {
  const [activeTab, setActiveTab] = useState('Howdy'); //landing

  return (
    <div className="min-h-screen overflow flex flex-col items-center pt-8 transition-all duration-500">
      {/* nav menu */}
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
