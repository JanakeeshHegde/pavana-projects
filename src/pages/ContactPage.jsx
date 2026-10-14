import React from 'react';
import { 
  MapPin, Mail, Phone, Clock, Building2, ShieldCheck, 
  ArrowRight, ExternalLink, Navigation, Compass, PhoneCall 
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/features/contact/components/ContactForm';
import { companyProfile } from '@/data/company-profile';

export default function ContactPage() {
  const { contact } = companyProfile;

  return (
    <>
      <SEOHead
        title="Contact"
        description="Connect with Pavana Projects Project Management Consultancy (PMC) at our registered office: #543, 14th ‘A’ Main, HMT Layout, Gokula 1st Stage, Mathikere, Bangalore – 560054."
      />

      <PageHero
        sectionNumber="14"
        sectionTitle="ENGAGEMENT & CONSULTATION"
        title="Contact"
        subtitle="We invite developers, corporate occupiers, and infrastructure project owners to initiate confidential discussions on their upcoming capital developments."
        badge="Direct Consultation"
        image="/images/project-controls-room.jpg"
        imageTag="BANGALORE HEADQUARTERS"
        imageCaption="Executive Project Controls & Client Advisory Suite"
      />

      {/* 1. MAIN CONTACT SECTION */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Verified Office Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase block mb-1">
                  OFFICIAL REGISTERED ADDRESS (PDF PAGE 14)
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#064A32] tracking-tight">
                  Pavana Projects
                </h2>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C69A36] mt-0.5">
                  Project Management Consultancy
                </div>
              </div>

              {/* Exact Address Card */}
              <div className="bg-[#FFFFFF] p-6 border-l-4 border-l-[#064A32] border-t-2 border-t-[#C69A36] border-r border-b border-[#E5E0CE] space-y-4 shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 bg-[#064A32] text-[#DFBE65] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#14251E]">
                        Registered Office
                      </span>
                      <span className="text-[10px] font-mono-tech text-[#C69A36]">[ BLR-HQ ]</span>
                    </div>
                    <address className="not-italic text-sm text-[#3C4E46] leading-relaxed">
                      #543, 14th ‘A’ Main, <br />
                      HMT Layout, Gokula 1st Stage, <br />
                      1st Phase, Mathikere, <br />
                      Bangalore – 560054, Karnataka, India
                    </address>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E0CE] flex items-center justify-between text-xs text-[#064A32] font-semibold">
                  <span className="font-mono-tech">PIN: 560054</span>
                  <a
                    href="https://maps.google.com/?q=543+14th+A+Main+Rd+HMT+Layout+Gokula+1st+Stage+Mathikere+Bengaluru+560054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#C69A36] hover:text-[#064A32] font-bold group-hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="bg-[#FFFFFF] p-6 border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 bg-[#F8F6ED] text-[#064A32] border border-[#E5E0CE] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#C69A36]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#5C6E66] block">
                      Official Inquiries
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-semibold text-[#064A32] hover:text-[#C69A36] transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 pt-3 border-t border-[#E5E0CE]">
                  <div className="w-8 h-8 bg-[#F8F6ED] text-[#064A32] border border-[#E5E0CE] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#C69A36]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#5C6E66] block">
                      Consultation Hours
                    </span>
                    <span className="text-xs text-[#3C4E46] font-medium">
                      {contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Engagement Protocol */}
              <div className="bg-gradient-to-br from-[#1A2E26] to-[#14251E] text-[#F8F6ED] p-6 border border-[#284439] border-t-2 border-t-[#C69A36] space-y-4 shadow-lg">
                <div className="flex items-center justify-between pb-2 border-b border-[#284439]">
                  <div className="text-xs font-mono-tech text-[#DFBE65] uppercase tracking-wider font-bold">
                    PMC APPOINTMENT PROTOCOL
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#A3B8B0]">[ 4 STAGES ]</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">
                  Structured Engagement Process
                </h4>
                <ol className="text-xs text-[#CBD8D2] space-y-2.5 list-decimal list-inside leading-relaxed">
                  <li><strong className="text-[#DFBE65]">Brief:</strong> Submission of Preliminary Development Brief</li>
                  <li><strong className="text-[#DFBE65]">Consultation:</strong> Initial Technical Consultation with PMC Director</li>
                  <li><strong className="text-[#DFBE65]">Strategy:</strong> Formulation of Customized Packaging Strategy & WBS</li>
                  <li><strong className="text-[#DFBE65]">Commercials:</strong> Commercial & Milestone Fee Proposal Transmittal</li>
                </ol>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form (7 Cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED LOCATION MAP & DIRECTIONS CARD */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
            <div>
              <span className="text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase block mb-1">
                LOCATION & ACCESSIBILITY
              </span>
              <h3 className="text-2xl font-bold text-[#064A32]">
                Registered Office in Mathikere, Bangalore
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=543+14th+A+Main+Rd+HMT+Layout+Gokula+1st+Stage+Mathikere+Bengaluru+560054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#064A32] bg-[#F8F6ED] border border-[#E5E0CE] hover:border-[#C69A36] px-4 py-2.5 transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#C69A36]" />
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C69A36]" />
            </a>
          </div>

          {/* Architectural Map & Coordinates Card */}
          <div className="border border-[#E5E0CE] bg-[#14251E] text-[#F8F6ED] p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 arch-grid-dark opacity-40 pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#064A32] border border-[#C69A36]/40 text-[#DFBE65] text-xs font-serif-arch uppercase">
                  <span>BANGALORE URBAN PMC OFFICE</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">
                  #543, 14th ‘A’ Main, HMT Layout, Gokula 1st Stage, Mathikere
                </h4>
                <p className="text-xs text-[#CBD8D2] leading-relaxed max-w-xl">
                  Centrally located in North-West Bangalore with strategic accessibility to Yeshwanthpur Industrial Corridor, Peenya Industrial Area, Outer Ring Road, and the Kempegowda International Airport transit corridor.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="bg-[#1A2E26] p-3 border border-[#254135]">
                    <span className="text-[10px] text-[#A3B8B0] uppercase block">Zone</span>
                    <span className="text-[#FFFFFF] font-bold">Bangalore North-West</span>
                  </div>
                  <div className="bg-[#1A2E26] p-3 border border-[#254135]">
                    <span className="text-[10px] text-[#A3B8B0] uppercase block">Pin Code</span>
                    <span className="text-[#DFBE65] font-bold font-serif-arch">560054</span>
                  </div>
                  <div className="bg-[#1A2E26] p-3 border border-[#254135]">
                    <span className="text-[10px] text-[#A3B8B0] uppercase block">Jurisdiction</span>
                    <span className="text-[#FFFFFF] font-bold">Karnataka, India</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center space-y-4 bg-[#0C1A14] p-6 border border-[#213A30] text-center">
                <div className="p-3 bg-[#064A32] text-[#DFBE65] rounded-full">
                  <Compass className="w-8 h-8 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
                    Coordinates & Navigation
                  </div>
                  <div className="text-[11px] text-[#A3B8B0] mt-1">
                    Gokula 1st Stage, 1st Phase, Mathikere
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=543+14th+A+Main+Rd+HMT+Layout+Gokula+1st+Stage+Mathikere+Bengaluru+560054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#C69A36] text-[#064A32] hover:bg-[#DFBE65] py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Launch Google Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <iframe
                  title="Pavana Projects office location in Google Maps satellite view"
                  src="https://maps.google.com/maps?q=13.032778,77.555&z=17&t=k&output=embed"
                  className="w-full h-56 border border-[#254135]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mt-4 text-[11.5px] text-[#5C6E66] flex items-center justify-between">
            <span>#543, 14th ‘A’ Main, HMT Layout, Gokula 1st Stage, Mathikere, Bangalore – 560054</span>
            <span className="text-[#C69A36] font-semibold">Pavana Projects PMC</span>
          </div>
        </div>
      </section>
    </>
  );
}
