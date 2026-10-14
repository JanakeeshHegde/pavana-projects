import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14251E] text-[#F8F6ED] border-t border-[#284439] cad-grid-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#284439]">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" aria-label="Pavana Projects Homepage" className="inline-block group">
              <img
                src="/logo-white.png"
                alt="Pavana Projects — Creating Landmarks, Shaping Futures"
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-[#CBD8D2] leading-relaxed max-w-sm">
              Integrated Project Management Consultancy (PMC) for ambitious commercial, IT/ITES and infrastructure developments.
            </p>
          </div>

          {/* Three Principal Navigation Columns (PROJECTS, SERVICES, PROCESS & ABOUT) */}
          <div className="lg:col-span-3 space-y-3 font-mono-tech text-xs">
            <Link
              to="/projects"
              className="text-[10px] text-[#DFBE65] hover:text-[#FFFFFF] uppercase tracking-widest pb-1 border-b border-[#284439] block transition-colors"
            >
              PROJECTS
            </Link>
            <ul className="space-y-2 text-[#CBD8D2]">
              <li>
                <Link to="/projects#it-software-park" className="hover:text-[#DFBE65] transition-colors block">
                  15,00,000 Sq. Ft. IT Software Park
                </Link>
              </li>
              <li>
                <Link to="/projects#commercial-towers" className="hover:text-[#DFBE65] transition-colors block">
                  Commercial Office Towers
                </Link>
              </li>
              <li>
                <Link to="/projects#it-campuses" className="hover:text-[#DFBE65] transition-colors block">
                  IT / ITES Campuses
                </Link>
              </li>
              <li>
                <Link to="/projects#infrastructure-campuses" className="hover:text-[#DFBE65] transition-colors block">
                  Infrastructure & Industrial Campuses
                </Link>
              </li>
              <li>
                <Link to="/projects#nine-packages" className="hover:text-[#DFBE65] transition-colors block text-[#DFBE65]/90">
                  9-Package Proposed Framework ↗
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3 font-mono-tech text-xs">
            <Link
              to="/services"
              className="text-[10px] text-[#DFBE65] hover:text-[#FFFFFF] uppercase tracking-widest pb-1 border-b border-[#284439] block transition-colors"
            >
              SERVICES
            </Link>
            <ul className="space-y-2 text-[#CBD8D2]">
              <li>
                <Link to="/services" className="hover:text-[#DFBE65] transition-colors block">
                  Nine Disciplines
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#DFBE65] transition-colors block">
                  Responsibility Matrix
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#DFBE65] transition-colors block">
                  14 Key Deliverables
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#DFBE65] transition-colors block">
                  Commercial Controls
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3 font-mono-tech text-xs">
            <div className="text-[10px] text-[#DFBE65] uppercase tracking-widest pb-1 border-b border-[#284439]">
              PROCESS & ABOUT
            </div>
            <div className="space-y-2 text-[#CBD8D2]">
              <div>
                <Link to="/process" className="hover:text-[#DFBE65] transition-colors block">
                  8-Stage Lifecycle
                </Link>
              </div>
              <div>
                <Link to="/process" className="hover:text-[#DFBE65] transition-colors block">
                  Project Controls Console
                </Link>
              </div>
              <div>
                <Link to="/about" className="hover:text-[#DFBE65] transition-colors block">
                  Foundation & 6 Values
                </Link>
              </div>
              <div>
                <Link to="/contact" className="hover:text-[#DFBE65] transition-colors font-semibold text-[#DFBE65] block">
                  Discuss a Project ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Note */}
        {/* <div className="my-6 p-4 bg-[#0C1A14] border border-[#213A30] text-[11px] font-mono-tech text-[#8EA49A] leading-relaxed">
          <strong className="text-[#DFBE65] uppercase">GOVERNANCE NOTE:</strong> Pavana Projects operates strictly as a professional Project Management Consultancy (PMC). Project references, including the 15,00,000 Sq. Ft. IT Software Park, represent capability profiles and proposed PMC frameworks based on technical specifications.
        </div> */}

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#6F867C] gap-3">
          <div>
            © {new Date().getFullYear()} Pavana Projects. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>PMC BANGALORE</span>
            <span>•</span>
            <span className="text-[#DFBE65]">“WE BRING ORDER TO COMPLEXITY.”</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
