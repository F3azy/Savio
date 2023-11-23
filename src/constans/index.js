//gallery const
const YTVideos = [
  "https://www.youtube.com/embed/u1kDmE2Ou3I",
  "https://www.youtube.com/embed/PfqsHIITt8c",
  "https://www.youtube.com/embed/KxVqCoKfujU",
  "https://www.youtube.com/embed/yCWpOTJIXzM",
  "https://www.youtube.com/embed/ToFWx29MZzs",
  "https://www.youtube.com/embed/K9CWddpjq1E",
  "https://www.youtube.com/embed/ZUTLz8hPYJs",
  "https://www.youtube.com/embed/BiVdV2tFOZw",
  "https://www.youtube.com/embed/heF1N3B9SPM",
  "https://www.youtube.com/embed/ksWY6Kfa7qE",
  "https://www.youtube.com/embed/ChuwrrY0gtk",
  "https://www.youtube.com/embed/GfAKAqbyVXc",
  "https://www.youtube.com/embed/RCmoQ80J6m4",
  "https://www.youtube.com/embed/b3qisotgfmc",
  "https://www.youtube.com/embed/LRoq10n8DOo",
];

const YTThumbnail = [
  "http://img.youtube.com/vi/u1kDmE2Ou3I/0.jpg",
  "http://img.youtube.com/vi/PfqsHIITt8c/0.jpg",
  "http://img.youtube.com/vi/KxVqCoKfujU/0.jpg",
  "http://img.youtube.com/vi/yCWpOTJIXzM/0.jpg",
  "http://img.youtube.com/vi/ToFWx29MZzs/0.jpg",
  "http://img.youtube.com/vi/K9CWddpjq1E/0.jpg",
  "http://img.youtube.com/vi/ZUTLz8hPYJs/0.jpg",
  "http://img.youtube.com/vi/BiVdV2tFOZw/0.jpg",
  "http://img.youtube.com/vi/heF1N3B9SPM/0.jpg",
  "http://img.youtube.com/vi/ksWY6Kfa7qE/0.jpg",
  "http://img.youtube.com/vi/ChuwrrY0gtk/0.jpg",
  "http://img.youtube.com/vi/GfAKAqbyVXc/0.jpg",
  "http://img.youtube.com/vi/RCmoQ80J6m4/0.jpg",
  "http://img.youtube.com/vi/b3qisotgfmc/0.jpg",
  "http://img.youtube.com/vi/LRoq10n8DOo/0.jpg",
];

export { YTThumbnail, YTVideos };

// footer const
import { FaFacebook, FaYoutube } from "react-icons/fa";
export const footerSocialIcons = [
  {
    name: "facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/zespolsavio/?locale=pl_PL",
  },
  {
    name: "youtube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@zespomuzycznyszczecinsavio6379",
  },
];

// contact const
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const contacts = [
  {
    name: "phone",
    icon: FaPhone,
    value: "+48 123 456 789",
  },
  {
    name: "mail",
    icon: IoIosMail,
    value: "przyklad@mail.com",
  },
  {
    name: "location",
    icon: FaLocationDot,
    value:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d180800.9017067485!2d14.554698902963679!3d53.458733290241554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093800d3a759%3A0xa95adc4e5f8ac4f3!2sSzczecin%2C%20Polska!5e0!3m2!1spl!2sus!4v1700777620050!5m2!1spl!2sus"
    },
];
