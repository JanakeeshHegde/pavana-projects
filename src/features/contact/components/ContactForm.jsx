import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, MapPin, Layers, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import CTAButton from '@/components/shared/CTAButton';
import { companyProfile } from '@/data/company-profile';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    category: 'Real Estate Solutions',
    scale: '50,000 – 2,00,000 Sq. Ft.',
    stage: 'Initial Brief & Planning',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    // Keep validation local so errors can be shown beside their corresponding fields.
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.organization.trim()) errs.organization = 'Company / Landowner / Developer name is required';
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

      // Demo confirmation only; replace this timer with the inquiry API when available.
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
          // A blocked confetti effect should not prevent the confirmation state.
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
      category: 'Real Estate Solutions',
      scale: '50,000 – 2,00,000 Sq. Ft.',
      stage: 'Initial Brief & Planning',
      message: ''
    });
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-[#FFFFFF] border border-[#C69A36] p-8 sm:p-12 text-center shadow-lg">
        <div className="w-16 h-16 bg-[#064A32] text-[#DFBE65] mx-auto flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase mb-1">
          CONSULTATION REQUEST REGISTERED
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#064A32] mb-3">
          Thank You, {formData.name}
        </h3>
        <p className="text-sm text-[#4C5D56] max-w-lg mx-auto leading-relaxed mb-6">
          Your inquiry for <strong className="text-[#14251E]">{formData.organization}</strong> ({formData.category}, {formData.scale}) has been routed to our project leadership. Our team will review your brief and connect with you shortly.
        </p>

        <div className="bg-[#F8F6ED] p-4 max-w-md mx-auto text-left text-xs border border-[#E5E0CE] mb-6 space-y-1.5 text-[#2C3E36]">
          <div><strong className="text-[#064A32]">Registered Contact:</strong> {formData.email} | {formData.phone}</div>
          <div><strong className="text-[#064A32]">Current Stage:</strong> {formData.stage}</div>
          <div><strong className="text-[#064A32]">Office Location:</strong> Mathikere, Bangalore – 560054</div>
        </div>

        <CTAButton
          onClick={handleReset}
          icon={RefreshCw}
        >
          Submit Another Inquiry
        </CTAButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-[#FFFFFF] border border-[#E5E0CE] p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="border-b border-[#E5E0CE] pb-4">
        <span className="text-xs font-mono-tech text-[#C69A36] tracking-widest uppercase block mb-1">
          CONFIDENTIAL INQUIRY & CONSULTATION
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#064A32]">
          Discuss Your Project With Our Directors
        </h3>
        <p className="text-xs text-[#5C6E66] mt-1">
          Inquire about construction, real estate solutions, interior space planning, turnkey coordination, or Joint Venture opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

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


        <div>
          <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Entity / Developer / Landowner <span className="text-red-600">*</span>
          </label>
          <input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="e.g. Apex Realty / Individual Owner"
            className={`w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border rounded-none transition-colors focus:bg-[#FFFFFF] ${
              errors.organization ? 'border-red-500' : 'border-[#E5E0CE] focus:border-[#064A32]'
            }`}
          />
          {errors.organization && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.organization}</p>}
        </div>


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


        <div>
          <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Inquiry Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border border-[#E5E0CE] rounded-none focus:border-[#064A32] focus:bg-[#FFFFFF]"
          >
            <option>Real Estate Solutions</option>
            <option>Joint Venture & Development Partnerships</option>
            <option>Construction Solutions (Residential / Commercial / Civil)</option>
            <option>Interior Design & Space Planning</option>
            <option>Turnkey Projects</option>
            <option>Project Management Consultancy (PMC)</option>
            <option>General / Strategic Consultation</option>
          </select>
        </div>


        <div>
          <label htmlFor="scale" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
            Estimated Scale / Built-Up Area
          </label>
          <select
            id="scale"
            value={formData.scale}
            onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border border-[#E5E0CE] rounded-none focus:border-[#064A32] focus:bg-[#FFFFFF]"
          >
            <option>Under 50,000 Sq. Ft.</option>
            <option>50,000 – 2,00,000 Sq. Ft.</option>
            <option>2,00,000 – 5,00,000 Sq. Ft.</option>
            <option>5,00,000+ Sq. Ft.</option>
            <option>Land Parcel / Joint Venture Feasibility</option>
          </select>
        </div>
      </div>


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
          <option>Initial Brief & Planning</option>
          <option>Design & Architectural Coordination</option>
          <option>Tender Packaging & Procurement</option>
          <option>Active Construction Execution</option>
          <option>Testing, Commissioning & Handover</option>
          <option>Joint Venture Feasibility Discussion</option>
        </select>
      </div>


      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#14251E] mb-1.5">
          Project Requirements & Brief Details <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe the project location, property or land particulars, required services (Construction, Real Estate, JV, Interiors, PMC), and expected timelines."
          className={`w-full px-3.5 py-2.5 text-sm bg-[#F8F6ED] border rounded-none transition-colors focus:bg-[#FFFFFF] ${
            errors.message ? 'border-red-500' : 'border-[#E5E0CE] focus:border-[#064A32]'
          }`}
        />
        {errors.message && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>


      <div className="pt-2">
        <CTAButton
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
          icon={Send}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Processing Consultation Request...' : 'Transmit Project Inquiry'}
        </CTAButton>
      </div>
    </form>
  );
}
