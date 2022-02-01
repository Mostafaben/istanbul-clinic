import React from "react";
import { INFOS } from "../data/data";

const LINKS = [
  {
    link: "https://www.facebook.com/BEST-CLINIC-ISTANBUL-103955202008777",
    icon: "fab fa-facebook-square",
    name: "Facebook",
  },
  {
    link: `https://api.whatsapp.com/send?phone=${INFOS.phoneNumber}`,
    icon: "fab fa-whatsapp",
    name: "Whatsapp",
  },
  {
    link: "https://www.instagram.com/bestclinicistanbul/?hl=en",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
  {
    link: `mailto:${INFOS.clinicEmail}`,
    icon: "far fa-envelope-open",
    name: "Mail",
  },
];

const FloatingLinks = () => {
  const openLink = (url) => {
    window.open(url, "_blank").focus();
  };
  return (
    <div className="links">
      {LINKS.map((value, index) => (
        <i
          className={value.icon}
          key={`link-${index}`}
          onClick={() => openLink(value.link)}
        >
          <span>{value.name}</span>
        </i>
      ))}
    </div>
  );
};

export default FloatingLinks;
