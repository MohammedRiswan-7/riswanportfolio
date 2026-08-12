import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
} from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import GlassCard from "../components/common/GlassCard";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: null,
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: null,
      message: "",
    });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ff315d2b-d023-4345-87eb-6bbfa8025e78",
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: `
Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            result.message || "Failed to send the message.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your message. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Initiate Dialogue"
          title="Get In"
          highlightTitle="Touch"
          subtitle="Have an opportunity, project collaboration, or question? Send a message directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <GlassCard
              glowColor="cyan"
              className="p-8 border-cyan-500/20"
            >
              <div className="space-y-6">

                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">
                    Mohammed Riswan
                  </h3>

                  <p className="text-sm text-cyan-400 font-mono mt-1">
                    {personalInfo.identity}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Feel free to reach out for entry-level positions,
                  AI internships, full-stack web development projects,
                  or collaborative tech ventures.
                </p>

                <div className="space-y-4">

                  {/* EMAIL */}
                  <a
                    href="mailto:mohammedriswan872@gmail.com"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        Direct Email
                      </span>

                      <span className="text-sm font-semibold break-all">
                        mohammedriswan872@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* GITHUB */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 group-hover:scale-110 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        GitHub Profile
                      </span>

                      <span className="text-sm font-semibold">
                        MohammedRiswan-7
                      </span>
                    </div>
                  </a>

                  {/* LINKEDIN */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        LinkedIn Connection
                      </span>

                      <span className="text-sm font-semibold">
                        mohamed-riswan-140498301
                      </span>
                    </div>
                  </a>

                  {/* LOCATION */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                      <MapPin className="w-4 h-4" />
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        Location
                      </span>

                      <span className="text-xs font-medium">
                        Thirupoondi, Nagapattinam, Tamil Nadu
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard
              glowColor="violet"
              className="p-8 border-slate-800"
            >
              <h3 className="text-xl font-bold text-white font-mono mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-cyan-400" />
                Send a Direct Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-slate-300 mb-2"
                  >
                    YOUR NAME *
                  </label>

                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 text-sm transition-colors disabled:opacity-50"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-slate-300 mb-2"
                  >
                    YOUR EMAIL ADDRESS *
                  </label>

                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 text-sm transition-colors disabled:opacity-50"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-300 mb-2"
                  >
                    MESSAGE *
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Riswan, I would like to discuss an opportunity..."
                    disabled={submitting}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 text-sm transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {/* STATUS */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs font-mono flex items-start gap-2.5 ${
                      status.type === "error"
                        ? "bg-rose-950/60 border border-rose-500/40 text-rose-300"
                        : "bg-emerald-950/60 border border-emerald-500/40 text-emerald-300"
                    }`}
                  >
                    {status.type === "error" ? (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    )}

                    <span>{status.message}</span>
                  </motion.div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}