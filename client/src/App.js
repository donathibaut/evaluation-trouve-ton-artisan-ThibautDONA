import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Accueil from "./pages/Accueil/Accueil";
import Error404 from "./pages/Error/Error404";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
