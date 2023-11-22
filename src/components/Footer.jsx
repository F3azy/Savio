import React from "react";
import { SavioLogo } from "../assets";
import { footerSocialIcons } from "../constans";

const Footer = () => {
  return (
    <footer
      className="
    mt-20 pt-8 pb-3 
    flex flex-row justify-between items-center 
    border-t-2 border-brand-primary/20
    relative
    "
    >
      <img className="w-[100px]" src={SavioLogo} alt="logo" />
      <p className="font-semibold text-[16px]">
        Copyright © {new Date().getFullYear()} Savio. Wszelkie prawa
        zastrzeżone.
      </p>
      <div className="footer-gradient" />
      <div className="flex flex-row gap-x-4">
        {footerSocialIcons.map((Icon, idx) => 
        <a key={idx} href={Icon.url} target="_blank">
            <Icon.icon 
            className="hover:opacity-60"
            size={30} 
            />
        </a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
