/** @format */
import heroImage from "./assets/hero-img.png";
import halalRide from "./assets/home.png";
import restaurant from "./assets/restaurant.png";
import spaceTourism from "./assets/space.jpg";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
export const links = [
  { id: 1, url: "#", text: "home" },
  { id: 2, url: "#about", text: "about" },
  { id: 3, url: "#projects", text: "projects" },
  { id: 4, url: "#skills", text: "skills" },
];

export const socials = [
  {
    id: 1,
    url: "https://web.facebook.com/habibuHarunaD",
    icon: <FaFacebook />,
  },
  { id: 2, url: "https://twitter.com/habibuHD", icon: <FaTwitter /> },
  { id: 3, url: "https://linkedin.com/in/habibuhd", icon: <FaLinkedin /> },
  { id: 4, url: "https://github.com/habibu-HD", icon: <FaGithub /> },
];

export const images = { heroImage };
export const projectImage = [
  {
    id: 1,
    image: halalRide,
    livePage: "https://halalrideng.com",
    githubLink: "https://github.com/habibu-HD/halalride-ng",
  },
  {
    id: 2,
    image: restaurant,
    livePage: "https://simple-restaurant-page.netlify.app/",
    githubLink: "https://github.com/habibu-HD/restaurant-landing-page",
  },
  {
    id: 3,
    image: spaceTourism,
    livePage: "https://space-tourisms.netlify.app/",
    githubLink: "https://github.com/habibu-HD/space-tourism",
  },
];
