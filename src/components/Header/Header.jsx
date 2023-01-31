import { Link } from "react-router-dom";

const menu = [
  {
    name: "Metaverse",
    href: "/example",
  },
  {
    name: "Search",
    href: "/search",
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
    <header className="w-screen h-12 bg-principal-white-100 bg-opacity-40 shadow-outline flex items-center pl-2 justify-around font-medium ">
      <Link
        to={"/"}
        className="hover:scale-110 hover:cursor-pointer transition"
      >
        <img
          className="w-20"
          src="./logos/HeroRealmsLogo.png"
          alt="logo Hero Realms"
        />
      </Link>
      <nav className="flex felx-row gap-6">
        <ul className="flex flex-row gap-4 text-xs ">
          {menu.map(({ name, href }) => (
            <li
              key={name}
              className="hover:underline hover:underline-offset-4 hover:decoration-principal-white-100 transition duration-75"
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
