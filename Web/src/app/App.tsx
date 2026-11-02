import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import DoodleLayer from './components/site/DoodleLayer';
import SiteNav from './components/site/SiteNav';
import SiteFooter from './components/site/SiteFooter';
import HomePage from './pages/HomePage';
import KitsPage from './pages/KitsPage';
import LabsPage from './pages/LabsPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-[#1E1B1C] text-white overflow-x-hidden relative">
        <DoodleLayer />
        <div className="relative z-10">
          <SiteNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kits" element={<KitsPage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <SiteFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}
