import { SavioLogo } from "../assets";
import { footerSocialIcons } from "../constans";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    variants={fadeIn("down", "", 0.5, 0.5, 50)}
    className="
    mt-10 md:mt-20 pt-5 md:pt-8 pb-3 
    flex flex-col gap-y-4 items-center 
    border-t-2 border-brand-primary/20
    relative
    ">
      <div
        className="
      w-full flex flex-row justify-center gap-x-10 md:gap-x-0 md:justify-between items-center 
      relative
      "
      >
        <img className="w-[100px]" src={SavioLogo} alt="logo" />
        <p className="font-semibold tracking-wider hidden md:block">
          Copyright © {new Date().getFullYear()} Savio. Wszelkie prawa
          zastrzeżone.
        </p>
        <div className="footer-gradient" />
        <div className="flex flex-row gap-x-6 md:gap-x-4">
          {footerSocialIcons.map((Icon, idx) => (
            <a key={idx} href={Icon.url} target="_blank">
              <Icon.icon className="hover:opacity-60" size={30} />
            </a>
          ))}
        </div>
      </div>
      <p className="font-semibold tracking-wider md:hidden text-center">
          Copyright © {new Date().getFullYear()} Savio. Wszelkie prawa
          zastrzeżone.
        </p>
    </motion.footer>
  );
};

export default Footer;
