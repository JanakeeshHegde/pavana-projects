import { BrowserRouter } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import AppRoutes from './AppRoutes.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#F8F6ED] text-[#14251E] selection:bg-[#064A32] selection:text-[#DFBE65]">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
