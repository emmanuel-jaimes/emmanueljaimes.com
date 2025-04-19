import React from "react";

export default function SocialIcon({ href, src, alt, hoverColor, download = false }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      download={download}
      className={`p-2 rounded-xl transition duration-300 ${hoverColor}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-10 h-10"
      />
    </a>
  );
}
