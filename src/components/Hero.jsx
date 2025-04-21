import React from "react";
import SocialIcon from "./SocialIcon";
import Typewriter from "./Typewriter";
import RecentlyPlayed from "./RecentlyPlayed";

export default function Hero() {
  return (
    <div className="bg-black text-white tracking-widest font-roboto p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-3">Emmanuel Jaimes</h1>
          <Typewriter size="text-3xl" 
          words={['Software Engineer', 'University of Iowa Graduate', 'Dallas Native', 'Craft Bartender','Music Enthusiast', 'Intramural Futsal Champion']}/>
        </div>
        

        <div className="flex gap-12">
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