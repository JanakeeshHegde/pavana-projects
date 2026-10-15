import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 4 Public Core Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Backward-compatible redirects for consolidated routes */}
      <Route path="/projects" element={<Navigate to="/services" replace />} />
      <Route path="/work" element={<Navigate to="/services" replace />} />
      <Route path="/process" element={<Navigate to="/about#lifecycle" replace />} />
      <Route path="/project-controls" element={<Navigate to="/services#project-controls" replace />} />
      <Route path="/quality-safety" element={<Navigate to="/services#quality-safety" replace />} />
      <Route path="/commercial" element={<Navigate to="/services#procurement-commercial" replace />} />
      <Route path="/real-estate" element={<Navigate to="/services#real-estate-solutions" replace />} />
      <Route path="/real-estate-solutions" element={<Navigate to="/services#real-estate-solutions" replace />} />
      <Route path="/joint-venture" element={<Navigate to="/services#joint-venture" replace />} />
      <Route path="/jv" element={<Navigate to="/services#joint-venture" replace />} />
      <Route path="/expertise" element={<Navigate to="/services" replace />} />
      <Route path="/studio" element={<Navigate to="/about" replace />} />
      <Route path="/methodology" element={<Navigate to="/about#lifecycle" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
