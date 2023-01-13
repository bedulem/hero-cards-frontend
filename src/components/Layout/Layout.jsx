import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <div className="bg-[url('./images/woods.jpg')] bg-no-repeat bg-cover ">
      <Header />
      <main>
        <h1>main</h1>
      </main>
      <Footer />
    </div>
  );
};
