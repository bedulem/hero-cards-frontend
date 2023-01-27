import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Card } from "../Card/Card";
import SearchCard from "../SearchCard/SearchCard";

export const Layout = () => {
  return (
    <div className="bg-[url('./images/woods.jpg')] bg-no-repeat bg-cover h-screen">
      <Header />
      <main className="flex flex-col  items-center">
        <SearchCard />
        <Card />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
