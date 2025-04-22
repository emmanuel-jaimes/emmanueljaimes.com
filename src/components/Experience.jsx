import { title } from 'framer-motion/client';
import React from 'react';

const experiences = [
{
    year: "Present",
    company: "Northwestern Medicine",
    title: "Technology Support Analyst",
    logo: "/imgs/NMLogo.png",
},
{   
    year: "20' - 24'",
    company: "University of Iowa",
    title: "Computer Science & Engineering",
    logo: "/imgs/iowaGold.png",
},
{
    year: "22' - 24'",
    company: "College of Public Health",
    title: "IT Support Specialist",
    logo: "/imgs/iowaGold.png",
},
{
    year: "22'",
    company: "John Deere",
    title: "Product Engineer",
    logo: null,
},
{
    year: "19' - 24'",
    company: "Various Locations",
    title: "Craft Cocktail Bartender",
    logo: null,
},
];

function Experience() {
    return (
      <div className="flex flex-col px-4 py-8 relative">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_20px_20px_1fr] items-start gap-4 relative"
          >
            {/* left side */}
            {idx == 1 ? (
              <div className="bg-gray-50 text-black rounded-xl shadow-md p-4 max-w-xl justify-self-end">
                <div className="flex items-center gap-2 mb-2">
                  {exp.logo && (
                    <img src={exp.logo} alt="" className="w-10 h-10 rounded" />
                  )}
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                </div>
                <p className="text-sm">{exp.title}</p>
              </div>
            ) : (
                <div className="text-sm text-gray-50 pt-1 left-0 justify-self-end">{exp.year}</div>
            )}
  
            {/* Timeline Line + Dot */}
            <div className="relative flex flex-col items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full z-10" />
              {idx !== experiences.length - 1 && (
                <div className="w-1 bg-white h-36" />
              )}
            </div>
  
            {/* Year */}
            {/* <div className="text-sm text-gray-50 pt-1">{exp.year}</div> */}
            <div></div>

            {/* right side */}
            {idx !== 1 ? (
              <div className="bg-gray-50 text-black rounded-xl shadow-md p-4 max-w-xl justify-self-start">
                <div className="flex items-center gap-2 mb-2">
                  {exp.logo && (
                    <img src={exp.logo} alt="" className="w-10 h-10 rounded" />
                  )}
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                </div>
                <p className="text-sm">{exp.title}</p>
              </div>
            ) : (
                <div className="text-sm text-gray-50 pt-1 justify-self-start">{exp.year}</div>
            )}
          </div>
        ))}
      </div>
    );
  }
  

export default Experience;
