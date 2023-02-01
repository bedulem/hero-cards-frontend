import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-black/50 h-full w-full">
      <div className="flex flex-col gap-5 justify-center h-full items-center ">
        <img
          className="w-80"
          src="./logos/HeroRealmsLogo.png"
          alt="logo Hero Realms"
        />
        <Link to="search">
          <Button type="button" value="Find your Hero Card" />
        </Link>
      </div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
    </div>
  );
};

export default Home;
