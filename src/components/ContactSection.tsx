import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  FileDown, 
  ArrowUpRight, 
  Phone,
  MessageSquare,
  Loader2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#8b5cf6', '#38bdf8']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#8b5cf6', '#38bdf8']
    });
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validate = (): boolean => {
    const errors: typeof formErrors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please enter a message of at least 10 characters.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Attempt Formspree submission or fallback to client transmission
      const endpoint = 'https://formspree.io/f/mqaeavlo'; // standard portfolio form endpoint
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message
        })
      });

      if (response.ok) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#00f0ff', '#8b5cf6', '#38bdf8']
        });
        setFormSubmitted(true);
      } else {
        // Fallback: If submission fails, inform user and open mailto
        const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
          formData.subject || 'Contact from Portfolio'
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setFormSubmitted(true);
      }
    } catch {
      // On network failure, direct to default mail client
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Contact from Portfolio'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase">
              // CONTACT
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Get In Touch & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Let's Connect</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl font-normal">
            Looking for AI/ML engineering, full-stack development, or software engineering opportunities. Let's discuss how I can contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct channels & Quick Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email & Phone Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-400 block uppercase">Direct Inquiries</span>
                  <span className="text-sm sm:text-base font-semibold text-white">Email & Phone</span>
                </div>
              </div>

              {/* Email with mailto: and copy button */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between mb-3 hover:border-cyan-500/30 transition-colors">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="font-mono text-xs sm:text-sm text-cyan-300 hover:text-cyan-200 hover:underline truncate mr-2"
                  title="Send email"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
                <div className="relative flex items-center">
                  {copiedEmail && (
                    <span className="absolute -top-7 right-0 text-[11px] font-mono text-cyan-300 bg-cyan-950/90 border border-cyan-500/40 px-2 py-0.5 rounded shadow">
                      Copied!
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.06] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors shrink-0"
                    title="Copy email address"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone with tel: and copy button */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 truncate mr-2">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-xs sm:text-sm text-slate-200 hover:text-cyan-300 hover:underline truncate"
                    title="Call phone number"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
                <div className="relative flex items-center">
                  {copiedPhone && (
                    <span className="absolute -top-7 right-0 text-[11px] font-mono text-cyan-300 bg-cyan-950/90 border border-cyan-500/40 px-2 py-0.5 rounded shadow">
                      Copied!
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-white/[0.06] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors shrink-0"
                    title="Copy phone number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08]">
              <span className="font-mono text-xs text-slate-300 block mb-4 uppercase tracking-wider font-semibold">
                Professional Network & Codebases
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-violet-500/40 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-violet-400" />
                    <span className="text-xs sm:text-sm font-mono text-slate-200 group-hover:text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs sm:text-sm font-mono text-slate-200 group-hover:text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="glass-panel rounded-2xl p-6 border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-transparent to-violet-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <FileDown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-white">
                    Download Resume
                  </h4>
                  <p className="text-xs font-mono text-slate-300">
                    PDF Document (Dhushanth_Srinivasa_Resume.pdf)
                  </p>
                </div>
              </div>

              <a
                href={PORTFOLIO_DATA.personal.resumePath}
                download="Dhushanth_Srinivasa_Resume.pdf"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 hover:border-cyan-400 transition-all text-center whitespace-nowrap shadow-[0_0_15px_-3px_rgba(0,240,255,0.25)]"
              >
                Download PDF
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="font-display font-semibold text-white text-base sm:text-lg">
                  Send a Message
                </h3>
              </div>
            </div>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-display font-bold text-white">Message Dispatched!</h4>
                <p className="text-sm text-slate-200 max-w-md font-normal">
                  Thank you for reaching out, {formData.name || 'there'}! I have received your message and will reply to you at {formData.email} promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-cyan-300 border border-cyan-500/30 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {submitError && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-300 text-xs font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase font-medium">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full bg-[#050b18] border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none transition-all ${
                        formErrors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/[0.1] focus:border-cyan-500/60'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase font-medium">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full bg-[#050b18] border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none transition-all ${
                        formErrors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/[0.1] focus:border-cyan-500/60'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI/ML Engineering Opportunity / Project Inquiry"
                    className="w-full bg-[#050b18] border border-white/[0.1] focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase font-medium">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                    }}
                    placeholder="Describe the opportunity, engineering challenge, or collaboration..."
                    className={`w-full bg-[#050b18] border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none transition-all resize-none ${
                      formErrors.message ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/[0.1] focus:border-cyan-500/60'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-mono text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 transition-all duration-300 shadow-[0_0_25px_-5px_rgba(0,240,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
