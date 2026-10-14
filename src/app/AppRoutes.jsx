import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import ProcessPage from '@/pages/ProcessPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ServicesPage from '@/pages/ServicesPage';
import ProjectControlsPage from '@/pages/ProjectControlsPage';
import QualitySafetyPage from '@/pages/QualitySafetyPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/project-controls" element={<ProjectControlsPage />} />
      <Route path="/quality-safety" element={<QualitySafetyPage />} />

      {/* Keep the previous URLs working for existing links and search results. */}
      <Route path="/work" element={<Navigate to="/projects" replace />} />
      <Route path="/expertise" element={<Navigate to="/services" replace />} />
      <Route path="/studio" element={<Navigate to="/about" replace />} />
      <Route path="/methodology" element={<Navigate to="/process" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
