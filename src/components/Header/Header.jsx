import { Link } from "react-router-dom";

const menu = [
  {
    name: "Metaverse",
    href: "/example",
  },
  {
    name: "Clans",
    href: "/example",
  },
  {
    name: "Roadmap",
    href: "/example",
  },
  {
    name: "Team",
    href: "/example",
  },
];

const networks = [
  {
    name: "tiktok",
    href: "https://www.tiktok.com/",
    icon: "./logos/tiktok.svg",
  },
  {
    name: "twitter",
    href: "https://twitter.com/",
    icon: "./logos/twitter.svg",
  },
];

export const Header = () => {
  return (
    <header className="w-screen h-12 bg-yellow-50 bg-opacity-30 shadow-outline flex items-center pl-2 justify-around">
      <img
        className="h-2/3 hover:scale-110"
        src="./logos/HeroRealmsLogo.png"
        alt="logo Hero Realms"
      />
      <nav className="flex felx-row gap-6">
        <ul className="flex flex-row gap-4 text-xs ">
          {menu.map(({ name, href }) => (
            <li
              key={name}
              className="hover:underline hover:underline-offset-4 hover:decoration-[#C37B2A] transition duration-75"
            >
              <Link to={href}>{name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-row gap-4 ">
          {networks.map(({ name, href, icon }) => (
            <li key={name}>
              <a href={href}>
                <img
                  className="h-4 w-4 hover:scale-110"
                  src={icon}
                  alt={name}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
