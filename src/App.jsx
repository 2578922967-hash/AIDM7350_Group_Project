import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OverviewSection from './components/OverviewSection';
import FactsSection from './components/FactsSection';
import DebunksSection from './components/DebunksSection';
import ReviewsSection from './components/ReviewsSection';
import ReferencesSection from './components/ReferencesSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-pink-500/30">
          <Navbar />
          <main>
            <Hero />
            <OverviewSection />
            <FactsSection />
            <DebunksSection />
            <ReviewsSection />
            <ReferencesSection />
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;