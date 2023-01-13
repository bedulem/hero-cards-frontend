import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
//import { Layout } from "./components/Layout/Layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Layout />} />
        {/*<Route path="view/:idHeroCard" element={<Details />} /> */}
        <Route path="*" element={<h1>Error!!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
