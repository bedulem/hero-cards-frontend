import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Card } from "../Card/Card";

export const Layout = () => {
  return (
    <div className="bg-[url('./images/woods.jpg')] bg-no-repeat bg-cover h-screen">
      <Header />
      <main>
        <Card />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
