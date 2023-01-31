import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/*<Route path="view/:idHeroCard" element={<Details />} /> */}
          <Route
            path="*"
            element={<h1 className="text-3xl font-bold underline">Error!!</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
