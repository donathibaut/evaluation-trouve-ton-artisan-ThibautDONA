import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Accueil from "./pages/Accueil/Accueil";
import Artisan from "./pages/Artisan/Artisan";
import Results from "./pages/Results/Results";
import MentionsLegales from "./pages/Legal/Mentions-legales/Mentions-legales";
import DonneesPersonnelles from "./pages/Legal/Donnees-personnelles/Donnees-personnelles";
import Accessibilite from "./pages/Legal/Accessibilite/Accessibilite";
import Cookies from "./pages/Legal/Cookies/Cookies";
import Error404 from "./pages/Error/404/Error404";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/artisan" element={<Artisan />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/mentions-legales" element={<MentionsLegales />}></Route>
        <Route
          path="/donnees-personnelles"
          element={<DonneesPersonnelles />}
        ></Route>
        <Route path="/accessibilite" element={<Accessibilite />}></Route>
        <Route path="/cookies" element={<Cookies />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
