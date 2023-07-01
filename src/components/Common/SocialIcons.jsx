import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const icons = {
  facebook: <FaFacebook className="relative h-5 w-5 invert sm:h-6 sm:w-6" />,
  instagram: <FaInstagram className="relative h-5 w-5 invert sm:h-6 sm:w-6" />,
  twitter: <FaTwitter className="relative h-5 w-5 invert sm:h-6 sm:w-6" />,
  github: <FaGithub className="relative h-5 w-5 invert sm:h-6 sm:w-6" />,
  linkedin: <FaLinkedin className="relative h-5 w-5 invert sm:h-6 sm:w-6" />,
};

const SocialIcons = ({ link, icon }) => {
  return (
    <React.Fragment>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="group mx-2 rounded-md bg-slate-900 p-2 duration-200 ease-in hover:-translate-y-2 
          hover:scale-125 hover:bg-emerald-600 dark:bg-slate-50 dark:hover:bg-emerald-600"
        >
          {icons[icon]}
        </div>
      </a>
    </React.Fragment>
  );
};

export default SocialIcons;
