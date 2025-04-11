import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Skills from './pages/Skills';
import UIUXOverview from './pages/UIUXOverview';
import WebOverview from './pages/WebOverview';
import KupuKupu from './pages/KupuKupu';
import TeKemuArapu from './pages/TeKemuArapu';
import SolarEnergyDashboard from './pages/SolarEnergyDashboard';
import ABlog from './pages/ABlog';
import ConnectIt from './pages/ConnectIt';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-light">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects/uiux-overview" element={<UIUXOverview />} />
            <Route path="/projects/web-overview" element={<WebOverview />} />
            <Route path="/projects/kupu-kupu" element={<KupuKupu />} />
            <Route path="/projects/te-kemu-arapu" element={<TeKemuArapu />} />
            <Route path="/projects/solar-energy-dashboard" element={<SolarEnergyDashboard />} />
            <Route path="/projects/a-blog" element={<ABlog />} />
            <Route path="/projects/connect-it" element={<ConnectIt />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
