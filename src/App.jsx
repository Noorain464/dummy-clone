import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alumni from './pages/Alumni';
import Masterclass from './pages/Masterclass';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/masterclass" element={<Masterclass />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
