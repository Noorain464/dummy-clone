import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alumni from './pages/Alumni';
import Auth from './pages/Auth';
import './App.css';

function App() {
  useEffect(() => {
    // 1. Hide elements
    const style = document.createElement("style");
    style.innerHTML =
      "#dyn_headline,#dyn_subheadline,#dyn_cta{opacity:0;transition:opacity 0.25s ease}";
    document.head.appendChild(style);

    function reveal() {
      ["dyn_headline", "dyn_subheadline", "dyn_cta"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.style.opacity = "1";
      });
    }

    // 2. Collect signals
    const p = new URLSearchParams(window.location.search);
    const signals = {
      customer_id: "69c95ed5e4aa79c8d8b5cd29",
      utm_campaign: p.get("utm_campaign"),
      utm_source: p.get("utm_source"),
      utm_medium: p.get("utm_medium"),
      referrer: document.referrer,
    };

    // 3. Fetch
    fetch("http://localhost:5001/api/variants/resolve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signals),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.slots) {
          if (data.slots.headline)
            document.getElementById("dyn_headline").textContent =
              data.slots.headline;

          if (data.slots.subheadline)
            document.getElementById("dyn_subheadline").textContent =
              data.slots.subheadline;

          if (data.slots.cta_text)
            document.getElementById("dyn_cta").textContent =
              data.slots.cta_text;
        }
        reveal();
      })
      .catch(reveal);
  }, []);
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
