import React from "react";
import SocialIcon from "./SocialIcon";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <div className="bg-black text-white tracking-widest font-roboto p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Left: Name + Typewriter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Emmanuel Jaimes</h1>
          <Typewriter
            size="text-2xl md:text-3xl"
            words={[
              "Software Engineer",
              "University of Iowa Graduate",
              "Dallas Native",
              "Craft Bartender",
              "Music Enthusiast",
              "Intramural Futsal Champion",
            ]}
          />
        </div>

        {/* Right: Social Icons */}
        <div className="grid grid-cols-2 md:flex justify-center md:justify-end gap-6">
          <SocialIcon
            href="https://www.linkedin.com/in/jaimes-emmanuel"
            src="/imgs/Linkedin.svg"
            alt="LinkedIn"
            hoverColor="hover:bg-blue-800"
          />
          <SocialIcon
            href="https://github.com/emmanuel-jaimes"
            src="/imgs/Github.svg"
            alt="GitHub"
            hoverColor="hover:bg-purple-800"
          />
          <SocialIcon
            href="mailto:emnl.jms@gmail.com"
            src="/imgs/Mail.svg"
            alt="Email"
            hoverColor="hover:bg-green-800"
          />
          <SocialIcon
            href="/info/emmanuelJaimes_Resume.pdf"
            src="/imgs/File_text.svg"
            alt="Resume"
            hoverColor="hover:bg-yellow-800"
            download
          />
        </div>
      </div>
    </div>
  );
}
