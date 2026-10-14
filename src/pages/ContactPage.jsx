import React from 'react';
import { 
  MapPin, Mail, Phone, Clock, Building2, ShieldCheck, 
  ArrowRight, ExternalLink, Navigation, Compass, PhoneCall,
  Plane, Train, Factory, Landmark, Car
} from 'lucide-react';
import SEOHead from '@/components/shared/SEOHead';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/features/contact/components/ContactForm';
import CTAButton from '@/components/shared/CTAButton';
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
        title="Contact"
        subtitle="We invite developers, corporate occupiers, and infrastructure project owners to initiate confidential discussions on their upcoming capital developments."
        badge="Direct Consultation"
      />

      {/* 1. MAIN CONTACT SECTION */}
      <section className="py-20 lg:py-24 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Verified Office Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase block mb-1">
                  OFFICIAL REGISTERED ADDRESS
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

      {/* 2. VERIFIED LOCATION & BANGALORE TRANSIT ACCESSIBILITY */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E0CE] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-[#E5E0CE] gap-6">
            <div className="max-w-3xl space-y-2">
              <div className="flex items-center space-x-2 text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase">
                <span>STRATEGIC CONNECTIVITY & REGISTERED OFFICE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#064A32] tracking-tight">
                Location & Accessibility
              </h2>
              <p className="text-base text-[#4C5D56] leading-relaxed">
                Centrally located in Mathikere, North-West Bangalore. Strategically situated between the city’s primary industrial belts, major multimodal transit stations, and the Kempegowda International Airport transit corridor.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <CTAButton
                href="https://maps.google.com/?q=543+14th+A+Main+Rd+HMT+Layout+Gokula+1st+Stage+Mathikere+Bengaluru+560054"
                target="_blank"
                icon={Navigation}
              >
                Get Driving Directions
              </CTAButton>
            </div>
          </div>

          {/* Split Layout: Transit Matrix (Left) & Interactive Map (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-stretch">
            
            {/* Left Column: Bangalore Transit & Connectivity Matrix (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Registered Address Highlight Card */}
              <div className="bg-[#F8F6ED] border border-[#E5E0CE] border-l-4 border-l-[#C69A36] p-6 space-y-3 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E0CE]">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#064A32]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#064A32]">
                      Registered Head Office
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#C69A36] bg-[#FFFFFF] px-2 py-0.5 border border-[#E5E0CE]">
                    PIN 560054
                  </span>
                </div>
                <div className="text-sm font-bold text-[#14251E]">
                  #543, 14th ‘A’ Main, HMT Layout, Gokula 1st Stage
                </div>
                <div className="text-xs text-[#5C6E66]">
                  1st Phase, Mathikere, Bangalore, Karnataka, India
                </div>
              </div>

              {/* Transit & Strategic Arteries Matrix */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#064A32] flex items-center justify-between">
                  <span>Bangalore Connectivity & Transit Corridors</span>
                  <span className="text-[10px] text-[#A3B8B0] font-mono-tech">[ 4 HUBS ]</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Hub 1: Airport */}
                  <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] hover:border-[#C69A36] transition-colors space-y-2 group shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 bg-[#F8F6ED] border border-[#E5E0CE] group-hover:bg-[#064A32] flex items-center justify-center transition-colors">
                        <Plane className="w-4 h-4 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                      </div>
                      <span className="text-[11px] font-bold text-[#C69A36] font-mono-tech">
                        ~35 MINS
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                      Kempegowda Int'l Airport (BLR)
                    </div>
                    <p className="text-[11px] text-[#5C6E66] leading-relaxed">
                      Direct expressway transit via Bellary Road & Hebbal flyover corridor.
                    </p>
                  </div>

                  {/* Hub 2: Yeshwanthpur Metro & Rail */}
                  <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] hover:border-[#C69A36] transition-colors space-y-2 group shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 bg-[#F8F6ED] border border-[#E5E0CE] group-hover:bg-[#064A32] flex items-center justify-center transition-colors">
                        <Train className="w-4 h-4 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                      </div>
                      <span className="text-[11px] font-bold text-[#C69A36] font-mono-tech">
                        ~8 MINS (2.5 km)
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                      Yeshwanthpur Metro & Junction
                    </div>
                    <p className="text-[11px] text-[#5C6E66] leading-relaxed">
                      Namma Metro Green Line interchange and major intercity rail terminus.
                    </p>
                  </div>

                  {/* Hub 3: Peenya Industrial & ORR */}
                  <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] hover:border-[#C69A36] transition-colors space-y-2 group shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 bg-[#F8F6ED] border border-[#E5E0CE] group-hover:bg-[#064A32] flex items-center justify-center transition-colors">
                        <Factory className="w-4 h-4 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                      </div>
                      <span className="text-[11px] font-bold text-[#C69A36] font-mono-tech">
                        ~10 MINS (4 km)
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                      Peenya Industrial Area & ORR
                    </div>
                    <p className="text-[11px] text-[#5C6E66] leading-relaxed">
                      Rapid connectivity to manufacturing belt and Outer Ring Road interchange.
                    </p>
                  </div>

                  {/* Hub 4: Central Business District */}
                  <div className="p-4 bg-[#FFFFFF] border border-[#E5E0CE] hover:border-[#C69A36] transition-colors space-y-2 group shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 bg-[#F8F6ED] border border-[#E5E0CE] group-hover:bg-[#064A32] flex items-center justify-center transition-colors">
                        <Landmark className="w-4 h-4 text-[#064A32] group-hover:text-[#DFBE65] transition-colors" />
                      </div>
                      <span className="text-[11px] font-bold text-[#C69A36] font-mono-tech">
                        ~25 MINS
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#14251E] group-hover:text-[#064A32] transition-colors">
                      Central Business District (CBD)
                    </div>
                    <p className="text-[11px] text-[#5C6E66] leading-relaxed">
                      Direct access via Malleshwaram & Sankey Road to corporate towers.
                    </p>
                  </div>
                </div>
              </div>

              {/* On-Site Advisory & Visitor Facilities */}
              <div className="bg-[#14251E] text-[#F8F6ED] p-4.5 border border-[#284439] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#DFBE65]">
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-[#DFBE65]" />
                    <span>On-Site Visitor Parking & Client Reception</span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#A3B8B0]">RESERVED</span>
                </div>
                <p className="text-xs text-[#CBD8D2] leading-relaxed">
                  Dedicated meeting rooms and digital drawing review setups available for technical consultations. Advance appointment recommended.
                </p>
              </div>
            </div>

            {/* Right Column: Full-Height Interactive Google Map (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between border border-[#E5E0CE] bg-[#F8F6ED] overflow-hidden shadow-md">
              
              {/* Map Floating Header Banner */}
              <div className="p-4 bg-[#064A32] text-[#F8F6ED] flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#C69A36]/30">
                <div className="flex items-center space-x-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DFBE65] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
                    Interactive Map & Location View
                  </span>
                </div>
                <span className="text-[11px] font-mono-tech text-[#DFBE65]">
                  GPS: 13.0328° N, 77.5550° E
                </span>
              </div>

              {/* The Live Interactive Google Map Frame */}
              <div className="relative w-full h-[400px] lg:h-[480px] bg-[#EAE6D6]">
                <iframe
                  title="Pavana Projects Office Location - Mathikere, Bangalore"
                  src="https://maps.google.com/maps?q=13.032778,77.555000&z=16&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Map Action Footer */}
              <div className="p-4 bg-[#FFFFFF] border-t border-[#E5E0CE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-[#5C6E66]">
                  <strong className="text-[#064A32]">Destination:</strong> Gokula 1st Stage, Mathikere, Bangalore 560054
                </div>

                <a
                  href="https://maps.google.com/?q=543+14th+A+Main+Rd+HMT+Layout+Gokula+1st+Stage+Mathikere+Bengaluru+560054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#064A32] hover:text-[#C69A36] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C69A36]" />
                  <span>Open Full Screen in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C69A36]" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Footnote Bar */}
          <div className="mt-8 pt-4 border-t border-[#E5E0CE] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5C6E66] gap-2">
            <span>Official Registered Office: #543, 14th ‘A’ Main, HMT Layout, Gokula 1st Stage, Mathikere, Bangalore – 560054</span>
            <span className="text-[#C69A36] font-semibold">Pavana Projects • Project Management Consultancy</span>
          </div>

        </div>
      </section>
    </>
  );
}
