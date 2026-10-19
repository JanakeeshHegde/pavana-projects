import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowUpRight, ArrowUp } from 'lucide-react';
import { companyProfile } from '@/data/company-profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact } = companyProfile;

  return (
    <footer className="bg-[#14251E] text-[#F8F6ED] border-t border-[#284439] cad-grid-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#284439]">


          <div className="lg:col-span-4 space-y-5">
            <Link to="/" aria-label="Pavana Projects Homepage" className="inline-block group">
              <img
                src="/logo-white.png"
                alt="Pavana Projects logo"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-[#CBD8D2] leading-relaxed max-w-sm">
              Integrated real estate solutions, construction coordination, Joint Venture partnerships, and Project Management Consultancy (PMC) for built-environment developments.
            </p>

            <div className="pt-2 text-xs text-[#A3B8B0] space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#DFBE65] shrink-0 mt-0.5" />
                <span className="leading-snug">{contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#DFBE65] shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-[#DFBE65] transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>


          <div className="lg:col-span-3 space-y-3 font-mono-tech text-xs">
            <Link
              to="/services"
              className="text-[10px] text-[#DFBE65] hover:text-[#FFFFFF] uppercase tracking-widest pb-1 border-b border-[#284439] block transition-colors"
            >
              SERVICES & SOLUTIONS
            </Link>
            <ul className="space-y-2 text-[#CBD8D2]">
              <li>
                <Link to="/services#construction-solutions" className="hover:text-[#DFBE65] transition-colors block">
                  Construction Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#interior-solutions" className="hover:text-[#DFBE65] transition-colors block">
                  Interior Design & Space Planning
                </Link>
              </li>
              <li>
                <Link to="/services#turnkey-projects" className="hover:text-[#DFBE65] transition-colors block">
                  Turnkey Projects
                </Link>
              </li>
              <li>
                <Link to="/services#pmc-services" className="hover:text-[#DFBE65] transition-colors block">
                  Project Management Consultancy (PMC)
                </Link>
              </li>
              <li>
                <Link to="/services#procurement-commercial" className="hover:text-[#DFBE65] transition-colors block">
                  Procurement & Commercial Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services#quality-safety" className="hover:text-[#DFBE65] transition-colors block">
                  Quality Assurance & Site Safety
                </Link>
              </li>
              <li>
                <Link to="/services#real-estate-solutions" className="hover:text-[#DFBE65] transition-colors block">
                  Real Estate Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#joint-venture" className="hover:text-[#DFBE65] transition-colors block text-[#DFBE65] font-semibold">
                  Joint Venture & Partnerships ↗
                </Link>
              </li>
            </ul>
          </div>


          <div className="lg:col-span-3 space-y-3 font-mono-tech text-xs">
            <Link
              to="/about"
              className="text-[10px] text-[#DFBE65] hover:text-[#FFFFFF] uppercase tracking-widest pb-1 border-b border-[#284439] block transition-colors"
            >
              ABOUT & METHODOLOGY
            </Link>
            <div className="space-y-2 text-[#CBD8D2]">
              <div>
                <Link to="/about#overview" className="hover:text-[#DFBE65] transition-colors block">
                  Company Overview
                </Link>
              </div>
              <div>
                <Link to="/about#values" className="hover:text-[#DFBE65] transition-colors block">
                  Vision, Mission & 6 Values
                </Link>
              </div>
              <div>
                <Link to="/about#lifecycle" className="hover:text-[#DFBE65] transition-colors block">
                  8-Stage Delivery Lifecycle
                </Link>
              </div>
              <div>
                <Link to="/about#governance" className="hover:text-[#DFBE65] transition-colors block">
                  Stakeholder Governance
                </Link>
              </div>
              <div>
                <Link to="/about#organisation" className="hover:text-[#DFBE65] transition-colors block">
                  Proposed PMC Structure
                </Link>
              </div>
              <div>
                <Link to="/about#value-propositions" className="hover:text-[#DFBE65] transition-colors block">
                  Value Propositions
                </Link>
              </div>
            </div>
          </div>


          <div className="lg:col-span-2 space-y-3 font-mono-tech text-xs">
            <Link
              to="/contact"
              className="text-[10px] text-[#DFBE65] hover:text-[#FFFFFF] uppercase tracking-widest pb-1 border-b border-[#284439] block transition-colors"
            >
              ENGAGEMENT
            </Link>
            <div className="space-y-3 text-[#CBD8D2]">
              <p className="text-[11px] leading-relaxed text-[#A3B8B0]">
                Initiate a discussion on construction, real estate solutions, PMC, or Joint Venture opportunities.
              </p>
              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-1.5 px-3 py-2 bg-[#064A32] hover:bg-[#0B3B28] text-[#FFFFFF] text-[11px] font-bold uppercase tracking-wider rounded border border-[#064A32] hover:border-[#C69A36]/60 transition-colors"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#DFBE65]" />
                </Link>
              </div>
            </div>
          </div>

        </div>


        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#6F867C] gap-3">
          <div>
            © {currentYear} Pavana Projects. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#DFBE65]">“CREATING LANDMARKS, SHAPING FUTURES.”</span>
            <span className="text-[#284439]">•</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center space-x-1.5 text-[#A3B8B0] hover:text-[#DFBE65] transition-colors cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C69A36] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
