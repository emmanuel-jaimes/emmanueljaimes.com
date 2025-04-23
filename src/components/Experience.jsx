import { title } from 'framer-motion/client';
import React from 'react';

const experiences = [
{
    year: "Present",
    company: "Northwestern Medicine",
    location: "Chicago, IL",
    title: "Technology Support Analyst",
    logo: "/imgs/NMLogo.png",
},
{   
    year: "20' - 24'",
    company: "University of Iowa",
    location: "Iowa City, IA",
    title: "B.S.E Computer Science & Engineering",
    logo: "/imgs/iowaGold.png",
},
{
    year: "22' - 24'",
    company: "College of Public Health",
    location: "Iowa City, IA",
    title: "IT Support Specialist",
    logo: "/imgs/iowaGold.png",
},
{
    year: "22'",
    company: "John Deere",
    location: "Dubuque, IA",
    title: "Product Engineer",
    logo: "/imgs/JohnDeere.svg",
},
{
    year: "19' - 24'",
    company: "Various Locations",
    location: "Dallas, TX",
    title: "Craft Cocktail Bartender",
    logo: null,
},
];

function Experience() {
  return (
    <div className="flex flex-col px-4 py-4 relative">
      {/* timeline full */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-5 bottom-32 w-1 rounded-full bg-white z-0" />

      {experiences.map((exp, idx) => {
        const isLeft = idx === 1;

        return (
          <div
            key={idx}
            className="grid grid-cols-[1fr_40px_1fr] items-start gap-4 relative mb-12"
          >
            {/* left uiowa card */}
            {isLeft ? (
              <div className="bg-gray-50 text-black rounded-xl shadow-md p-4 w-full justify-self-end z-10">
                <div className="flex items-center gap-2 mb-2">
                  {exp.logo && (
                    <img src={exp.logo} alt="" className="w-14 h-14 object-contain rounded" />
                  )}
                  <h3 className="text-lg font-medium">{exp.company}</h3>
                </div>
                <p className="italic mb-1">{exp.location}</p>
                <p className="text-lg font-bold">{exp.title}</p>
              </div>
            ) : (
              <div className="text-sm text-gray-50 pt-7 justify-self-end z-10">{exp.year}</div>
            )}

            {/* timeline marker */}
            <div className="relative flex flex-col items-center z-10">
              <div className="w-3 h-3 bg-blue-500 rounded-full z-10" />
            </div>

            {/* right jobx */}
            {!isLeft ? (
              <div className="bg-gray-50 text-black rounded-xl shadow-md p-4 w-full justify-self-start z-10">
                <div className="flex items-center gap-2 mb-2">
                  {exp.logo && (
                    <img src={exp.logo} alt="" className="w-14 h-14 object-contain rounded" />
                  )}
                  <h3 className="text-lg font-medium">{exp.company}</h3>
                </div>
                <p className="italic mb-1">{exp.location}</p>
                <p className="text-lg font-bold">{exp.title}</p>
              </div>
            ) : (
              <div className="text-sm text-gray-50 pt-7 justify-self-start z-10">{exp.year}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
  

export default Experience;
