import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl rounded-full px-6 py-3 border-[0.5px] border-primary/30 bg-surface/10 backdrop-blur-xl z-[150] flex justify-between items-center shadow-[0_0_20px_rgba(0,227,128,0.15)]">
    <div className="font-display-lg text-body-lg font-bold text-primary z-10">
      <a href="/">PV.</a>
    </div>
    <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
      <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors hover:scale-[1.02]" href="#services">SERVICES</a>
      <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors hover:scale-[1.02]" href="#work">WORK</a>
      <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors hover:scale-[1.02]" href="#process">PROCESS</a>
      <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors hover:scale-[1.02]" href="#about">ABOUT</a>
    </div>
    <button className="bg-primary-fixed text-on-primary-fixed px-5 py-1.5 rounded-full font-label-mono text-[10px] tracking-widest hover:shadow-[0_0_25px_rgba(0,227,128,0.4)] transition-all active:scale-95 duration-200 z-10">LET'S TALK</button>
  </nav>
);

const HeroSection = ({ mousePosition }) => (
  <header className="relative min-h-[884px] md:min-h-screen flex flex-col items-center justify-center text-center px-grid-margin overflow-hidden" id="hero-section">
    {/* Reactive Oval Background Glow */}
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(43,245,142,0.15), transparent 80%)`,
        transition: 'background 0.2s ease-out'
      }}
    />

    {/* Concentric Circles and Shapes */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0">
      {/* Circles */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white rounded-full"></div>
      <div className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] border border-white rounded-full"></div>
      <div className="absolute w-[700px] h-[700px] md:w-[1100px] md:h-[1100px] border border-white rounded-full"></div>

      {/* Scattered Shapes */}
      <div className="absolute top-[10%] left-[30%] w-4 h-4 border border-white rotate-45"></div>
      <div className="absolute top-[20%] left-[15%] w-5 h-5 border border-white rounded-full"></div>
      <div className="absolute top-[15%] right-[10%] w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-white rotate-12"></div>
      <div className="absolute top-[30%] right-[20%] w-5 h-5 border border-white rotate-45"></div>
      <div className="absolute top-[40%] left-[5%] w-6 h-6 border border-white rounded-full opacity-50"></div>
      <div className="absolute top-[50%] right-[5%] w-4 h-4 border border-white rotate-12"></div>
      <div className="absolute bottom-[40%] left-[10%] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-white -rotate-12 opacity-70"></div>
      <div className="absolute bottom-[30%] right-[25%] w-5 h-5 border border-white rounded-full opacity-60"></div>
      <div className="absolute bottom-[25%] left-[25%] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-white"></div>
      <div className="absolute bottom-[15%] left-[40%] w-3 h-3 border border-white rotate-45"></div>
      <div className="absolute bottom-[20%] right-[15%] w-6 h-6 border border-white rounded-full"></div>
      <div className="absolute bottom-[10%] right-[35%] w-4 h-4 border border-white rotate-12 opacity-40"></div>
    </div>

    {/* Faded Background Name */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none z-10">
      <span className="font-display-xl text-[120px] md:text-[350px] lg:text-[450px] leading-none text-primary whitespace-nowrap">PUNIT</span>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 max-w-5xl flex flex-col items-center"
    >
      <div className="inline-flex items-center gap-3 border-[0.5px] border-primary/40 px-5 py-2 rounded-full mb-8 bg-primary/5 backdrop-blur-sm">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow shadow-[0_0_8px_rgba(43,245,142,0.8)]"></span>
        <span className="font-label-mono text-[11px] text-primary uppercase tracking-[0.3em]">FREELANCE VIDEO EDITOR</span>
      </div>
      <h1 className="font-display-xl text-display-xl md:text-[140px] lg:text-[160px] leading-[0.8] mb-6 text-primary text-glow tracking-tighter">
        PUNIT VACHHANI
      </h1>
      <p className="font-label-mono text-label-mono text-on-surface-variant mb-4 tracking-[0.2em] uppercase">
        VIDEO EDITOR &amp; MOTION DESIGNER
      </p>
      <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-12 text-on-surface/80">
        Cinematic cuts, motion design, and reels that hit. Crafting stories frame by frame from <span className="text-primary">Ahmedabad, Gujarat</span>.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono px-10 py-4 rounded-full flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,227,128,0.5)] transition-all transform hover:-translate-y-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          WATCH MY WORK
        </button>
        <button className="border border-primary/40 text-primary font-label-mono text-label-mono px-10 py-4 rounded-full flex items-center gap-2 hover:bg-primary/10 transition-all transform hover:-translate-y-1">
          START A PROJECT ↗
        </button>
      </div>
    </motion.div>

    {/* Scroll Down Area - Bottom Right */}
    <div className="absolute bottom-12 right-8 md:right-16 flex gap-2 items-start z-10 opacity-80 hover:opacity-100 transition-opacity">
      <div className="h-16 w-[1px] bg-transparent relative overflow-hidden rounded-full mt-0.5">
        <motion.div
          className="absolute inset-0 w-full bg-primary"
          animate={{ y: ['-100%', '100%'], opacity: [0, 1, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: [0.34, 1, 0.65, 1],
            times: [0, 0.2, 0.8, 1]
          }}
        />
      </div>
      <div className="flex gap-1 text-left pt-0.5">
        <div className="font-label-mono text-[9px] text-on-surface-variant font-bold tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          DOWN
        </div>
        <div className="font-label-mono text-[9px] text-on-surface-variant font-bold tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          SCROLL
        </div>
      </div>
    </div>
  </header>
);

const MarqueeSection = () => (
  <section className="py-12 bg-[#0a0a0a] border-y border-outline-variant overflow-hidden">
    <div className="marquee-content whitespace-nowrap flex gap-12 items-center">
      {[1, 2].map((i) => (
        <div key={i} className="flex items-center gap-12 font-display-lg text-display-lg-mobile text-white">
          <span>MOTION DESIGN</span> <span className="text-primary text-3xl">◆</span>
          <span>COLOR GRADING</span> <span className="text-primary text-3xl">◆</span>
          <span>VFX</span> <span className="text-primary text-3xl">◆</span>
          <span>REELS &amp; SHORTS</span> <span className="text-primary text-3xl">◆</span>
          <span>BRAND CONTENT</span> <span className="text-primary text-3xl">◆</span>
        </div>
      ))}
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    { tag: "Pr", title: "Video Editing", desc: "Precision cuts, multi-cam workflows, and frame-perfect storytelling for long & short-form content." },
    { tag: "Ae", title: "Motion Design", desc: "Kinetic typography, animated graphics, and motion elements that give your content a premium edge." },
    { tag: "Da", title: "Color Grading", desc: "Cinematic color correction and grading that builds mood and makes every frame intentional." },
    { tag: "9:16", title: "Short-Form Content", desc: "Punchy reels and shorts optimized for Instagram, YouTube Shorts, and TikTok engagement." },
    { tag: "16:9", title: "Long-Form Edits", desc: "Podcast clips, documentary cuts, and brand films with tight pacing and narrative clarity." },
    { tag: "Br", title: "Brand Storytelling", desc: "Turning raw footage into brand narratives that connect, convert, and leave an impression." }
  ];

  return (
    <section className="py-section-gap px-grid-margin max-w-7xl mx-auto" id="services">
      <div className="mb-16 flex flex-col items-start text-left">
        <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
          WHAT I DO
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg"
        >
          THE <span className="font-headline-accent italic text-primary">ARSENAL</span> BEHIND EVERY CUT
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 bg-[#0d0d0d] border border-outline-variant hover:border-primary/40 transition-all duration-500 rounded-2xl relative overflow-hidden flex flex-col items-start gap-6 cursor-pointer shadow-lg"
          >
            {/* Top Hover Glow Effect */}
            <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-12 h-12 rounded-[10px] bg-primary/5 border border-primary/20 flex items-center justify-center font-label-mono text-[13px] font-bold text-primary">
              {svc.tag}
            </div>

            <div>
              <h3 className="font-display-lg text-2xl text-on-surface mb-3 tracking-wide uppercase">{svc.title}</h3>
              <p className="text-on-surface-variant text-[13px] leading-relaxed">{svc.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ShortFormDeck = () => {
  const cards = [
    { tag: "JOSEPH", title: "EDITORIAL CUT", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHuLCufbfPeJfXHeXXBcA9VhU9wB9VEZ3MImn-Zl3bgCvVNMvfPMZg2OiaxIW3UUedVGQ9O5sjNBWxBbgmpKJCo1FlyhMIgb13w5nKKAYQ5hmbPALd9J7AkWrAjIhwUZFOCgNQh5jYvYfKVGlVmtQnMlEEuYptNI4H7pQm-7gD-_J0IR8IRkDAoNhqGHGBSEBIEMkq_UJhkR2MWqylUXAwfYYFo8HPNk7YMptOD-dGDHUsZyd3ihoXMEBWYKaYC3jXmfwwK3PUXdU", z: 10, initialClasses: "rotate-[-4deg] translate-x-[-12px] translate-y-[5px] group-hover/deck:rotate-[-16deg] group-hover/deck:-translate-x-[110%] group-hover/deck:-translate-y-[10%]" },
    { tag: "COMEBACK", title: "STORYTELLING REEL", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsdnTOw0CJ-i18_cfpJIEugw-DfUrYmdz53L9D6k5c3__VeuvrvYKjU76LvNd4LEY6urxUfgOQTkIY2MHG-1qL5vndex1PDjvADX_z71VEkMYlK00Z4pMoU8lD0zJ5yQ12MPN9V3G46uJmrXnReiNHwXAbH7p1W0a3PcRfUVbignvSrHhtmBsKhw4x7lKLdZWOAZznOdxDpfzjhNt_ycar9XuvlA_evKz2CWw_Ws7C8KHZ8L161-ScSoL-4ha007AK-yAGKRcYcU", z: 20, initialClasses: "rotate-[-2deg] translate-x-[-6px] translate-y-[2px] group-hover/deck:rotate-[-8deg] group-hover/deck:-translate-x-[55%] group-hover/deck:-translate-y-[20%]" },
    { tag: "HARDWORK", title: "EDITORIAL CUT", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHuLCufbfPeJfXHeXXBcA9VhU9wB9VEZ3MImn-Zl3bgCvVNMvfPMZg2OiaxIW3UUedVGQ9O5sjNBWxBbgmpKJCo1FlyhMIgb13w5nKKAYQ5hmbPALd9J7AkWrAjIhwUZFOCgNQh5jYvYfKVGlVmtQnMlEEuYptNI4H7pQm-7gD-_J0IR8IRkDAoNhqGHGBSEBIEMkq_UJhkR2MWqylUXAwfYYFo8HPNk7YMptOD-dGDHUsZyd3ihoXMEBWYKaYC3jXmfwwK3PUXdU", z: 30, initialClasses: "rotate-[0deg] translate-x-[0px] translate-y-[0px] group-hover/deck:rotate-[0deg] group-hover/deck:translate-x-[0%] group-hover/deck:-translate-y-[25%]" },
    { tag: "JOURNEY", title: "TRAVEL VLOG", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHuLCufbfPeJfXHeXXBcA9VhU9wB9VEZ3MImn-Zl3bgCvVNMvfPMZg2OiaxIW3UUedVGQ9O5sjNBWxBbgmpKJCo1FlyhMIgb13w5nKKAYQ5hmbPALd9J7AkWrAjIhwUZFOCgNQh5jYvYfKVGlVmtQnMlEEuYptNI4H7pQm-7gD-_J0IR8IRkDAoNhqGHGBSEBIEMkq_UJhkR2MWqylUXAwfYYFo8HPNk7YMptOD-dGDHUsZyd3ihoXMEBWYKaYC3jXmfwwK3PUXdU", z: 40, initialClasses: "rotate-[2deg] translate-x-[6px] translate-y-[2px] group-hover/deck:rotate-[8deg] group-hover/deck:translate-x-[55%] group-hover/deck:-translate-y-[20%]" },
    { tag: "TECH SPEC", title: "PRODUCT AD", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsdnTOw0CJ-i18_cfpJIEugw-DfUrYmdz53L9D6k5c3__VeuvrvYKjU76LvNd4LEY6urxUfgOQTkIY2MHG-1qL5vndex1PDjvADX_z71VEkMYlK00Z4pMoU8lD0zJ5yQ12MPN9V3G46uJmrXnReiNHwXAbH7p1W0a3PcRfUVbignvSrHhtmBsKhw4x7lKLdZWOAZznOdxDpfzjhNt_ycar9XuvlA_evKz2CWw_Ws7C8KHZ8L161-ScSoL-4ha007AK-yAGKRcYcU", z: 50, initialClasses: "rotate-[4deg] translate-x-[12px] translate-y-[5px] group-hover/deck:rotate-[16deg] group-hover/deck:translate-x-[110%] group-hover/deck:-translate-y-[10%]" }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest overflow-hidden" id="work">
      <div className="px-grid-margin max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-start text-left">
          <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
            WORK
          </div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4"
          >
            SHORT FORM <span className="font-headline-accent italic text-primary">CONTENT</span>
          </motion.h2>
          <p className="font-label-mono text-label-mono text-on-surface-variant tracking-widest uppercase">
            [ HOVER TO PREVIEW DECK ]
          </p>
        </div>
        <div className="group/deck relative h-[600px] flex items-center justify-center w-full max-w-3xl mx-auto cursor-pointer mt-24">
          {cards.map((c, idx) => (
            <div key={idx} className={`card-deck-item absolute w-72 aspect-[9/16] bg-surface-container border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-${c.z} hover:z-[100] hover:scale-105 hover:shadow-[0_0_50px_rgba(0,0,0,0.9)] ${c.initialClasses}`}>
              <img src={c.img} className="absolute inset-0 w-full h-full object-cover opacity-80" alt={c.title} />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-surface to-transparent pointer-events-none">
                <span className="font-label-mono text-[10px] text-primary mb-2 block tracking-widest uppercase">{c.tag}</span>
                <h4 className="font-display-lg text-body-md text-on-surface">{c.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  const projects = [
    { id: 1, title: "COCA-COLA EDIT", meta: "BRAND COMMERCIAL • PREMIERE PRO • 2024", tag: "COMMERCIAL", url: "vimeo.com/umar_faruq/coca_cola", top: 100, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHuLCufbfPeJfXHeXXBcA9VhU9wB9VEZ3MImn-Zl3bgCvVNMvfPMZg2OiaxIW3UUedVGQ9O5sjNBWxBbgmpKJCo1FlyhMIgb13w5nKKAYQ5hmbPALd9J7AkWrAjIhwUZFOCgNQh5jYvYfKVGlVmtQnMlEEuYptNI4H7pQm-7gD-_J0IR8IRkDAoNhqGHGBSEBIEMkq_UJhkR2MWqylUXAwfYYFo8HPNk7YMptOD-dGDHUsZyd3ihoXMEBWYKaYC3jXmfwwK3PUXdU" },
    { id: 2, title: "SEBASTIAN: SPEED NARRATIVE", meta: "FAN DOCUMENTARY • AFTER EFFECTS • 2023", tag: "DOCUMENTARY", url: "yt.com/watch?v=sebastian_f1", top: 120, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsdnTOw0CJ-i18_cfpJIEugw-DfUrYmdz53L9D6k5c3__VeuvrvYKjU76LvNd4LEY6urxUfgOQTkIY2MHG-1qL5vndex1PDjvADX_z71VEkMYlK00Z4pMoU8lD0zJ5yQ12MPN9V3G46uJmrXnReiNHwXAbH7p1W0a3PcRfUVbignvSrHhtmBsKhw4x7lKLdZWOAZznOdxDpfzjhNt_ycar9XuvlA_evKz2CWw_Ws7C8KHZ8L161-ScSoL-4ha007AK-yAGKRcYcU" },
    { id: 3, title: "UBISOFT: UNSEEN WORLD", meta: "GAME TRAILER • PREMIERE PRO • 2024", tag: "GAME TRAILER", url: "vimeo.com/umar_faruq/ubisoft_promo", top: 140, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHuLCufbfPeJfXHeXXBcA9VhU9wB9VEZ3MImn-Zl3bgCvVNMvfPMZg2OiaxIW3UUedVGQ9O5sjNBWxBbgmpKJCo1FlyhMIgb13w5nKKAYQ5hmbPALd9J7AkWrAjIhwUZFOCgNQh5jYvYfKVGlVmtQnMlEEuYptNI4H7pQm-7gD-_J0IR8IRkDAoNhqGHGBSEBIEMkq_UJhkR2MWqylUXAwfYYFo8HPNk7YMptOD-dGDHUsZyd3ihoXMEBWYKaYC3jXmfwwK3PUXdU" },
    { id: 4, title: "PV. PERSONAL BRAND FILM", meta: "IDENTITY PIECE • DAVINCI RESOLVE • 2024", tag: "BRAND FILM", url: "portfolio.uf/personal_brand_film", top: 160, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsdnTOw0CJ-i18_cfpJIEugw-DfUrYmdz53L9D6k5c3__VeuvrvYKjU76LvNd4LEY6urxUfgOQTkIY2MHG-1qL5vndex1PDjvADX_z71VEkMYlK00Z4pMoU8lD0zJ5yQ12MPN9V3G46uJmrXnReiNHwXAbH7p1W0a3PcRfUVbignvSrHhtmBsKhw4x7lKLdZWOAZznOdxDpfzjhNt_ycar9XuvlA_evKz2CWw_Ws7C8KHZ8L161-ScSoL-4ha007AK-yAGKRcYcU" }
  ];

  const maxTop = Math.max(...projects.map(p => p.top));

  return (
    <section className="py-section-gap px-grid-margin max-w-5xl mx-auto">
      <div className="mb-20 flex flex-col items-start text-left">
        <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
          FEATURED PROJECTS
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg"
        >
          FEATURED <span className="font-headline-accent italic text-primary">PROJECTS</span>
        </motion.h2>
      </div>
      <div className="flex flex-col gap-8 relative pb-24">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className={`group sticky shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-[#111111] rounded-2xl transition-all duration-500 border border-outline-variant hover:border-primary/50 overflow-hidden cursor-pointer`}
            style={{ top: `${p.top}px`, zIndex: p.id * 10, marginBottom: `${maxTop - p.top}px` }}
          >
            <div className="bg-surface-container-high p-3.5 flex items-center gap-2 border-b border-outline-variant group-hover:border-primary/30 transition-colors">
              <div className="flex gap-2 pl-1">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-[10px] font-label-mono text-on-surface-variant bg-surface-variant/50 px-6 py-1 rounded-full">{p.url}</div>
            </div>
            <div className="aspect-video max-h-[45vh] lg:max-h-[55vh] relative bg-surface overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors duration-500">
                <div className="w-[72px] h-[72px] rounded-full bg-primary flex items-center justify-center text-background shadow-[0_0_30px_rgba(43,245,142,0.4)] group-hover:shadow-[0_0_60px_rgba(43,245,142,0.6)] group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
            </div>
            <div className="p-6 md:px-8 md:py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#111111]">
              <div>
                <h3 className="font-display-lg text-3xl md:text-4xl text-on-surface mb-2 leading-none uppercase">{p.title}</h3>
                <p className="font-label-mono text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">{p.meta}</p>
              </div>
              <div className="border border-primary/40 text-primary font-label-mono text-[10px] tracking-widest px-5 py-2 rounded-full whitespace-nowrap group-hover:border-primary transition-colors">
                {p.tag}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "DISCOVERY", desc: "Understanding your vision, goals, and what the final cut needs to achieve." },
    { num: "02", title: "PLANNING", desc: "Storyboarding, asset review, and edit strategy before a single cut is made." },
    { num: "03", title: "PRODUCTION", desc: "Precision editing, motion design, and sound — built frame by frame." },
    { num: "04", title: "REFINEMENT", desc: "Color grading, feedback rounds, and final polish until it's exactly right." },
    { num: "05", title: "DELIVERY", desc: "Optimized exports for every platform — on time, every time." }
  ];

  return (
    <section className="py-section-gap bg-surface-container-lowest" id="process">
      <div className="px-grid-margin max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-start text-left">
          <div className="border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
            HOW IT WORKS
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-display-lg text-display-lg-mobile md:text-[100px] leading-[0.9] text-on-surface mb-6 uppercase"
          >
            FROM BRIEF TO <span className="font-headline-accent italic text-primary text-glow uppercase">FINAL CUT</span>
          </motion.h2>
          <p className="text-on-surface-variant text-body-lg max-w-xl">
            A clean, collaborative workflow — so you always know where your project stands.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-outline-variant/50"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-background border border-outline-variant mb-8 flex items-center justify-center relative z-10 group-hover:border-primary/50 transition-colors">
                  <span className="font-label-mono text-[10px] tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">{s.num}</span>
                </div>
                <h4 className="font-display-lg text-2xl tracking-wide text-on-surface mb-3">{s.title}</h4>
                <p className="text-[13px] text-on-surface-variant leading-relaxed px-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-section-gap px-grid-margin max-w-7xl mx-auto" id="about">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div
          className="aspect-square rounded-2xl border border-primary/30 overflow-hidden relative shadow-[0_0_40px_rgba(43,245,142,0.15)]"
          style={{ background: 'radial-gradient(circle at top left, rgba(43,245,142,0.3), transparent 75%), #0a0a0a' }}
        >
          <div className="absolute inset-0 flex items-center justify-center font-display-xl text-[160px] md:text-[220px] text-primary/15 select-none">PV</div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-6 right-6 inline-flex items-center gap-2 bg-background border border-outline-variant px-4 py-2 rounded-full font-label-mono text-[10px] uppercase tracking-widest text-on-surface"
          >
            <span className="text-primary font-bold">20+</span> PROJECTS
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 left-6 inline-flex items-center gap-2 bg-background border border-outline-variant px-4 py-2 rounded-full font-label-mono text-[10px] uppercase tracking-widest text-on-surface"
          >
            <span className="text-primary font-bold">2+</span> YRS EXPERIENCE
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="flex flex-col justify-between h-full py-4 lg:py-0"
      >
        <div className="flex flex-col items-start text-left">
          <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-4">
            ABOUT
          </div>
          <h2 className="font-display-lg text-display-lg-mobile md:text-5xl lg:text-6xl leading-none">
            THE <span className="font-headline-accent italic text-primary">EDITOR</span> BEHIND THE CUT
          </h2>
        </div>

        <div className="text-sm md:text-base text-on-surface-variant leading-relaxed">
          <p>Based in the heart of Gujarat, I translate complex visions into high-retention visual stories. With a deep mastery of the Adobe Suite and DaVinci Resolve, I bridge the gap between technical precision and creative expression.</p>
        </div>

        <div className="text-sm md:text-base text-on-surface-variant leading-relaxed">
          <p>My work isn't just about cutting footage—it's about finding the rhythmic pulse of a story and amplifying it through motion design and cinematic grading. Whether it's a 15-second hook for social or a 15-minute documentary, I treat every frame with the same level of intensity.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a href="#" className="inline-flex items-center justify-center bg-primary-fixed text-on-primary-fixed font-label-mono text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,227,128,0.6)] transition-all shadow-[0_0_15px_rgba(0,227,128,0.3)]">
            INSTAGRAM <span className="ml-2 text-sm leading-none">→</span>
          </a>
          <a href="#" className="inline-flex items-center justify-center bg-transparent border border-outline-variant text-on-surface font-label-mono text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:border-primary/50 transition-colors">
            WHATSAPP <span className="ml-2 text-sm leading-none">↗</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="py-section-gap relative overflow-hidden bg-[#0a0a0a]">
    <div className="px-grid-margin max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
      <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-8">
        LET'S WORK TOGETHER
      </div>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="font-display-xl text-display-lg md:text-[120px] mb-8 text-white leading-[0.9]"
      >
        LET'S CREATE <br />
        <span className="font-headline-accent italic text-primary">SOMETHING<br />EPIC</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Whether it's a brand film, a viral reel, or a full content series — let's build something your audience won't scroll past.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <button className="bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono px-12 py-5 rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_rgba(0,227,128,0.6)] transition-all transform hover:-translate-y-1">
          START A PROJECT ↗
        </button>
        <button className="border border-outline-variant text-on-surface font-label-mono text-label-mono px-12 py-5 rounded-full hover:bg-surface-variant transition-all transform hover:-translate-y-1">
          FOLLOW MY WORK
        </button>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-6 px-grid-margin border-t border-outline-variant bg-surface-container-low grid grid-cols-1 md:grid-cols-3 items-center gap-6 font-body-md text-body-md">
    <div className="flex flex-col items-center md:items-start gap-1">
      <div className="font-display-lg text-2xl text-primary leading-none">PV.</div>
      <p className="font-label-mono text-[10px] text-on-surface-variant tracking-widest uppercase">CUTS THAT MOVE PEOPLE — AHMEDABAD, GJ</p>
    </div>
    <div className="flex justify-center gap-8">
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono" href="#services">SERVICES</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono" href="#work">WORK</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono" href="#process">PROCESS</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono" href="#about">ABOUT</a>
    </div>
    <div className="text-on-surface-variant font-label-mono text-[10px] text-center md:text-right">
      © 2026 PUNIT VACHHANI <br />
      FREELANCE VIDEO EDITOR
    </div>
  </footer>
);

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="dark">
      {/* Background Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-noise"></div>

      {/* Custom Cursor Effect (Desktop only) */}
      <motion.div
        className="hidden md:block fixed w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[200]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      />
      <motion.div
        className="hidden md:block fixed w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[200]"
        animate={{ x: mousePosition.x - 3, y: mousePosition.y - 3 }}
        transition={{ type: "spring", stiffness: 1000, damping: 30, mass: 0.1 }}
      />

      <Navbar />
      <HeroSection mousePosition={mousePosition} />
      <MarqueeSection />
      <ServicesSection />
      <ShortFormDeck />
      <FeaturedProjects />
      <ProcessSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
