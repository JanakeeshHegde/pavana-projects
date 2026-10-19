import React from 'react';
import { MapPin, Mail, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
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
        title="Contact"
        subtitle="We invite developers, corporate occupiers, and infrastructure project owners to initiate confidential discussions on their upcoming capital developments."
        badge="Direct Consultation"
        technicalNote="REGISTERED OFFICE & INQUIRIES"
      />


      <section className="py-12 lg:py-16 bg-[#F8F6ED] border-b border-[#E5E0CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">


            <div className="lg:col-span-5 space-y-6">


              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#064A32] tracking-tight">
                  Pavana Projects
                </h2>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C69A36] mt-0.5">
                  Project Management Consultancy
                </div>
              </div>


              <div className="bg-[#FFFFFF] p-6 border border-[#E5E0CE] border-t-2 border-t-[#C69A36] space-y-4 shadow-sm hover:shadow-md transition-shadow">

                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#F8F6ED] border border-[#E5E0CE] text-[#064A32] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#064A32]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#5C6E66] block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-semibold text-[#064A32] hover:text-[#C69A36] transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>


                {contact.phone && (
                  <div className="flex items-center space-x-3.5 pt-3 border-t border-[#E5E0CE]">
                    <div className="w-8 h-8 rounded-full bg-[#F8F6ED] border border-[#E5E0CE] text-[#064A32] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#064A32]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#5C6E66] block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-[#064A32] hover:text-[#C69A36] transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}


                <div className="flex items-center space-x-3.5 pt-3 border-t border-[#E5E0CE]">
                  <div className="w-8 h-8 rounded-full bg-[#F8F6ED] border border-[#E5E0CE] text-[#064A32] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#064A32]" />
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


              <div className="bg-[#FFFFFF] p-6 border-l-4 border-l-[#064A32] border-t-2 border-t-[#C69A36] border-r border-b border-[#E5E0CE] space-y-4 shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#064A32] text-[#DFBE65] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#14251E]">
                        Registered Office
                      </span>
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
                    href="https://maps.app.goo.gl/6N4Qh6SpR6SiXqb16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#C69A36] hover:text-[#064A32] font-bold group-hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>


              <div className="bg-[#FFFFFF] border border-[#E5E0CE] border-t-2 border-t-[#064A32] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="px-4 py-2.5 bg-[#F8F6ED] border-b border-[#E5E0CE] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#064A32]">
                      Location & Access Map
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#C69A36] font-semibold">
                    GPS: 13.0314° N, 77.5569° E
                  </span>
                </div>

                <div className="relative w-full h-[280px] sm:h-[320px] bg-[#EAE6D6]">
                  <iframe
                    title="Pavana Projects Office Location - 543, 14th ‘A’ Main, HMT Layout, Gokula 1st Stage, 1st Phase, Mathikere, Bangalore – 560054"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.978450169674!2d77.5524326!3d13.0313987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d60cf514f89%3A0x24b497344ffd115b!2sPavana%20Powers%20Technologies!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="px-4 py-2.5 bg-[#FFFFFF] border-t border-[#E5E0CE] flex items-center justify-between text-xs">
                  <span className="text-[#5C6E66] font-medium text-[11px] truncate">
                    #543, 14th ‘A’ Main, Gokula 1st Stage, Mathikere – 560054
                  </span>
                  <a
                    href="https://maps.app.goo.gl/6N4Qh6SpR6SiXqb16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 font-bold text-[#064A32] hover:text-[#C69A36] transition-colors shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#C69A36]" />
                    <span>Get Driving Directions</span>
                    <ExternalLink className="w-3 h-3 text-[#C69A36]" />
                  </a>
                </div>
              </div>

            </div>


            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
