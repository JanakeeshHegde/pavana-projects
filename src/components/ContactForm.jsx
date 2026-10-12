import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, MapPin, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyProfile } from '../data/companyData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    category: 'IT / Software Park',
    scale: '10,00,000 – 20,00,000 Sq. Ft.',
    stage: 'Design & Planning',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.organization.trim()) errs.organization = 'Company / Developer name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid contact number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your development requirements';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate enterprise submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#064A32', '#C69A36', '#DFBE65']
          });
        } catch (e) {
          // ignore confetti if blocked
        }
      }, 800);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      category: 'IT / Software Park',
      scale: '10,00,000 – 20,00,000 Sq. Ft.',
      stage: 'Design & Planning',
      message: ''
    });
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-[#FFFFFF] border border-[#C69A36] p-8 sm:p-12 text-center shadow-lg animate-fadeIn">
        <div className="w-16 h-16 bg-[#064A32] text-[#DFBE65] mx-auto flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase mb-1">
          CONSULTATION REQUEST REGISTERED
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#064A32] mb-3">
          Thank You, {formData.name}
        </h3>
        <p className="text-sm text-[#4C5D56] max-w-lg mx-auto leading-relaxed mb-6">
          Your project inquiry for <strong className="text-[#14251E]">{formData.organization}</strong> ({formData.category}, {formData.scale}) has been routed to our Project Management leadership. Our team will review your project brief and connect with you shortly.
        </p>

        <div className="bg-[#F8F6ED] p-4 max-w-md mx-auto text-left text-xs border border-[#E5E0CE] mb-6 space-y-1.5 text-[#2C3E36]">
          <div><strong className="text-[#064A32]">Registered Contact:</strong> {formData.email} | {formData.phone}</div>
          <div><strong className="text-[#064A32]">Current Stage:</strong> {formData.stage}</div>
          <div><strong className="text-[#064A32]">Location of Office:</strong> Mathikere, Bangalore – 560054</div>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center px-6 py-2.5 bg-[#064A32] text-[#F8F6ED] text-xs font-semibold uppercase tracking-wider hover:bg-[#043624] transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-[#FFFFFF] border border-[#E5E0CE] p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="border-b border-[#E5E0CE] pb-4">
        <span className="text-xs font-serif-arch text-[#C69A36] tracking-widest uppercase block mb-1">
          CONFIDENTIAL PMC ENQUIRY
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#064A32]">
          Discuss Your Development With Our PMC Directors
        </h3>
        <p className="text-xs text-[#5C6E66] mt-1">
          Please provide details about your commercial, IT/ITES, or infrastructure project to initiate consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rajesh Sharma"
              className={`w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border rounded-none transition-colors focus:bg-[#FFFFFF] ${
                errors.name ? 'border-red-500' : 'border-[#E5E0CE] focus:border-[#064A32]'
              }`}
            />
          </div>
          {errors.name && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
        </div>

        {/* Organization / Developer */}
        <div>
          <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Developer / Entity Name <span className="text-red-600">*</span>
          </label>
          <input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="e.g. Apex Tech Parks Pvt Ltd"
            className={`w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border rounded-none transition-colors focus:bg-[#FFFFFF] ${
              errors.organization ? 'border-red-500' : 'border-[#E5E0CE] focus:border-[#064A32]'
            }`}
          />
          {errors.organization && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.organization}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Official Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className={`w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border rounded-none transition-colors focus:bg-[#FFFFFF] ${
              errors.email ? 'border-red-500' : 'border-[#E5E0CE] focus:border-[#064A32]'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Phone / Mobile <span className="text-red-600">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border rounded-none transition-colors focus:bg-[#FFFFFF] ${
              errors.phone ? 'border-red-500' : 'border-[#E5E0CE] focus:border-[#064A32]'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
        </div>

        {/* Project Category */}
        <div>
          <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Project Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border border-[#E5E0CE] rounded-none focus:border-[#064A32] focus:bg-[#FFFFFF]"
          >
            <option>IT / Software Park</option>
            <option>Commercial Office Building</option>
            <option>Mixed-Use Commercial & Retail</option>
            <option>Industrial & Logistics Campus</option>
            <option>Infrastructure Development</option>
          </select>
        </div>

        {/* Estimated Scale */}
        <div>
          <label htmlFor="scale" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Estimated Scale (Built-Up Area)
          </label>
          <select
            id="scale"
            value={formData.scale}
            onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border border-[#E5E0CE] rounded-none focus:border-[#064A32] focus:bg-[#FFFFFF]"
          >
            <option>Up to 5,00,000 Sq. Ft.</option>
            <option>5,00,000 – 10,00,000 Sq. Ft.</option>
            <option>10,00,000 – 20,00,000 Sq. Ft. (e.g. 15 Lakh Sq. Ft.)</option>
            <option>Above 20,00,000 Sq. Ft.</option>
          </select>
        </div>
      </div>

      {/* Project Stage */}
      <div>
        <label htmlFor="stage" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
          Current Project Phase
        </label>
        <select
          id="stage"
          value={formData.stage}
          onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border border-[#E5E0CE] rounded-none focus:border-[#064A32] focus:bg-[#FFFFFF]"
        >
          <option>Initiation & Brief Development (Phase 01)</option>
          <option>Planning & Scheduling (Phase 02)</option>
          <option>Design Coordination & Constructability (Phase 03)</option>
          <option>Tender Packaging & Procurement (Phases 04-05)</option>
          <option>Construction Execution Management (Phase 06)</option>
          <option>Testing, Commissioning & Handover (Phases 07-08)</option>
        </select>
      </div>

      {/* Message / Scope */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
          Project Requirements & Brief Details <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe the development location, expected timelines, key PMC scopes required (Civil, MEP, Controls, QA/QC, HSE), and consultant setup."
          className={`w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border rounded-none transition-colors focus:bg-[#FFFFFF] ${
            errors.message ? 'border-red-500' : 'border-[#E5E0CE] focus:border-[#064A32]'
          }`}
        />
        {errors.message && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#064A32] text-[#F8F6ED] hover:bg-[#043624] px-8 py-3.5 text-xs font-bold uppercase tracking-widest border border-[#C69A36]/40 hover:border-[#C69A36] transition-all disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Processing Consultation Request...</span>
          ) : (
            <>
              <span>Transmit Project Inquiry</span>
              <Send className="w-3.5 h-3.5 text-[#DFBE65]" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
