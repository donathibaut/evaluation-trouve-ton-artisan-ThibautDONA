import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Accueil from './pages/Accueil/Accueil';

function App() {
  return (
    <div className="App">
      <Nav />
      <Accueil />
      <Footer />
    </div>
  );
}

export default App;