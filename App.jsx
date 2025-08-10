import { useState } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, ArrowRight, Mail, Image as ImageIcon } from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");

  const features = [
    { title: "Reduce shrink fast", desc: "AI flags suspicious gestures in real time so staff can intervene before checkout." },
    { title: "No new cameras needed", desc: "Connect to your existing CCTV. Rollout in days, not months." },
    { title: "Measurable ROI", desc: "Dashboards show prevented losses and staff response metrics." },
  ];

  const galleries = [
    { src: "https://images.unsplash.com/photo-1558980394-0c0c4e86c5d6?q=80&w=1600&auto=format&fit=crop", alt: "Showcase 1" },
    { src: "https://images.unsplash.com/photo-1600962815730-2c61d3c6b4b8?q=80&w=1600&auto=format&fit=crop", alt: "Showcase 2" },
    { src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop", alt: "Showcase 3" },
  ];

  function onSubmit(e) {
    e.preventDefault();
    alert(`Thanks! We'll reach out to ${email}. (Wire this to your form backend or CRM.)`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-sentinela-gradient-light.png" alt="Sentinela" className="h-9 w-9 rounded-xl shadow" />
            <span className="font-semibold tracking-tight">SENTINELA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#proof" className="hover:text-slate-900">Proof</a>
            <a href="#gallery" className="hover:text-slate-900">Gallery</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#cta" className="btn-gradient"><span>Get Started</span><ArrowRight size={16}/></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container grid md:grid-cols-2 gap-10 pt-16 pb-12">
          <div className="flex flex-col justify-center">
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Computer-vision theft detection for retailers in Uruguay.
            </motion.h1>
            <p className="mt-4 lead">
              We bring Veesion’s proven AI to your store: real‑time detection, fewer losses, quick ROI. Local onboarding and support.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a id="cta" href="#contact" className="btn-gradient">Request a demo <ArrowRight size={18}/></a>
              <a href="#video" className="btn-outline"><Play size={18}/> Watch how it works</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span>✅ Works with existing cameras</span>
              <span>✅ No hardware lock‑in</span>
              <span>✅ Local support in Uruguay</span>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden ring-1 ring-slate-200/80 shadow-sm" id="video">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-3" />
                <p className="text-sm text-slate-500">Replace with your hero image or video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why retailers choose Sentinela + Veesion</h2>
          <p className="mt-2 text-slate-600">Three crisp benefits. Keep it outcome‑oriented and concrete.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="card">
                <CheckCircle2 className="mb-3" />
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="proof" className="section bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Trusted worldwide</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <div key={i} className="p-6 rounded-2xl ring-1 ring-slate-200 bg-slate-50">
                <p className="text-sm">“Short testimonial showing a specific result or outcome achieved.”</p>
                <div className="mt-4 text-xs text-slate-500">— Name, Company</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-6 opacity-70">
            <img src="https://dummyimage.com/120x40/ddd/fff&text=Logo+1" alt="logo1"/>
            <img src="https://dummyimage.com/120x40/ddd/fff&text=Logo+2" alt="logo2"/>
            <img src="https://dummyimage.com/120x40/ddd/fff&text=Logo+3" alt="logo3"/>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">See it in action</h2>
          <p className="mt-2 text-slate-600">Swap these with your product shots, demo GIFs, or short clips.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {galleries.map((g, i)=> (
              <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}} key={i} src={g.src} alt={g.alt} className="rounded-2xl ring-1 ring-slate-200 shadow-sm object-cover w-full h-56"/>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Capture */}
      <section id="contact" className="section bg-slate-900 text-white">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Request a live demo</h2>
            <p className="mt-2 text-slate-300">Tell us where to send the next steps and a short questionnaire.</p>
            <form onSubmit={onSubmit} className="mt-6 flex gap-3">
              <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-2xl px-4">
                <Mail size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-transparent py-3 outline-none placeholder:text-slate-400"
                />
              </div>
              <button type="submit" className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-medium hover:opacity-90 transition">Send</button>
            </form>
            <p className="mt-3 text-xs text-slate-400">We'll never share your email. Unsubscribe anytime.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 ring-1 ring-white/10">
            <h3 className="font-semibold mb-3">What you get</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Conversion‑focused hero layout</li>
              <li>• Feature highlights & trust signals</li>
              <li>• Gallery with media placeholders</li>
              <li>• Lead capture (connect to your CRM or form backend)</li>
              <li>• Responsive Tailwind styles, subtle motion</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sentinela — All rights reserved.
      </footer>
    </div>
  );
}
