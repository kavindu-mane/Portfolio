import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const iconClass =
  "relative h-5 w-5 text-primary-green group-hover:text-white group-hover:dark:text-gray-800";

const icons = {
  facebook: <FiFacebook className={iconClass} />,
  instagram: <FiInstagram className={iconClass} />,
  twitter: <FiTwitter className={iconClass} />,
  github: <FiGithub className={iconClass} />,
  linkedin: <FiLinkedin className={iconClass} />,
};

const SocialIcons = ({ link, icon }) => {
  return (
    <React.Fragment>
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={icon}>
        <div className="group me-4 rounded-md bg-transparent p-1 duration-200 ease-in hover:bg-primary-green border-2 border-primary-green">
          {icons[icon]}
        </div>
      </a>
    </React.Fragment>
  );
};

export default SocialIcons;
