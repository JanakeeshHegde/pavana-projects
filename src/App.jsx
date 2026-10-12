import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Primary Architectural Page Routes
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F8F6ED] text-[#14251E] selection:bg-[#064A32] selection:text-[#DFBE65]">
        {/* Architectural Navigation Header */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            {/* Primary Routes matching Navbar: Home | About | Services | Projects | Process | Contact */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Backwards-Compatible Aliases / Redirects */}
            <Route path="/work" element={<Navigate to="/projects" replace />} />
            <Route path="/expertise" element={<Navigate to="/services" replace />} />
            <Route path="/studio" element={<Navigate to="/about" replace />} />
            <Route path="/methodology" element={<Navigate to="/process" replace />} />
            <Route path="/project-controls" element={<Navigate to="/process" replace />} />
            <Route path="/quality-safety" element={<Navigate to="/about" replace />} />

            {/* Catch-all Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Redesigned Architectural Footer */}
        <Footer />
      </div>
    </Router>
  );
}
