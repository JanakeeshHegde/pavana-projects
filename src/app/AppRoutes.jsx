import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/ProjectsPage';
import ServicesPage from '@/pages/ServicesPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 5 Core Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Backward-compatible redirects for consolidated routes */}
      <Route path="/process" element={<Navigate to="/about#lifecycle" replace />} />
      <Route path="/project-controls" element={<Navigate to="/services#project-controls" replace />} />
      <Route path="/quality-safety" element={<Navigate to="/services#quality-safety" replace />} />

      {/* Legacy and alias redirects */}
      <Route path="/work" element={<Navigate to="/projects" replace />} />
      <Route path="/expertise" element={<Navigate to="/services" replace />} />
      <Route path="/studio" element={<Navigate to="/about" replace />} />
      <Route path="/methodology" element={<Navigate to="/about#lifecycle" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
