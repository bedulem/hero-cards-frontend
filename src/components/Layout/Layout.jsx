import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Card } from "../Card/Card";
import SearchCard from "../SearchCard/SearchCard";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-[url('./images/woods.jpg')] bg-no-repeat bg-cover h-screen">
      <Header />
      <main className="flex flex-col items-center h-[92vh]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
