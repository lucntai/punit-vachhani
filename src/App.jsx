import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import signLogo from './assets/sign.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-max rounded-full px-6 md:pr-3 py-2 border-[0.5px] border-primary/30 bg-surface/10 backdrop-blur-xl z-[150] flex justify-between items-center md:gap-12 lg:gap-20 shadow-[0_0_20px_rgba(138,180,248,0.15)] transition-all duration-300">
        <div className="z-10 flex items-center justify-center">
          <a href="/" className="flex items-center justify-center" onClick={() => setIsOpen(false)}>
            <img src={signLogo} alt="PV Logo" className="h-8 sm:h-10 w-auto drop-shadow-md hover:scale-105 transition-transform origin-left -ml-2" />
          </a>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors hover:scale-[1.02]" href="#services">SERVICES</a>
          <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors hover:scale-[1.02]" href="#work">WORK</a>
          <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors hover:scale-[1.02]" href="#process">PROCESS</a>
          <a className="text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors hover:scale-[1.02]" href="#about">ABOUT</a>
        </div>
        <div className="flex items-center gap-4 z-10">
          <a href="https://calendly.com/punitvachhani/30min" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-primary-fixed text-on-primary-fixed px-6 py-2 rounded-full font-label-mono text-[10px] tracking-widest hover:shadow-[0_0_25px_rgba(138,180,248,0.4)] transition-all active:scale-95 duration-200">LET'S TALK</a>
          <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[140] md:hidden flex flex-col items-center justify-center pt-20">
          <div className="flex flex-col items-center gap-8 font-display-lg text-4xl">
            <a className="text-on-surface hover:text-primary transition-colors" href="#services" onClick={() => setIsOpen(false)}>SERVICES</a>
            <a className="text-on-surface hover:text-primary transition-colors" href="#work" onClick={() => setIsOpen(false)}>WORK</a>
            <a className="text-on-surface hover:text-primary transition-colors" href="#process" onClick={() => setIsOpen(false)}>PROCESS</a>
            <a className="text-on-surface hover:text-primary transition-colors" href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
            <a href="https://calendly.com/punitvachhani/30min" target="_blank" rel="noopener noreferrer" className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-label-mono text-sm tracking-widest mt-4" onClick={() => setIsOpen(false)}>LET'S TALK</a>
          </div>
        </div>
      )}
    </>
  );
};

const HeroSection = ({ mousePosition }) => (
  <header className="relative min-h-[884px] md:min-h-screen flex flex-col items-center justify-center text-center px-grid-margin overflow-hidden" id="hero-section">
    {/* Reactive Oval Background Glow */}
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(138,180,248,0.15), transparent 80%)`,
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
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none z-10 overflow-hidden">
      <span className="font-display-xl text-[90px] sm:text-[150px] md:text-[350px] lg:text-[450px] leading-none text-primary whitespace-nowrap">PUNIT</span>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 max-w-5xl flex flex-col items-center"
    >
      <div className="inline-flex items-center gap-3 border-[0.5px] border-primary/40 px-5 py-2 rounded-full mb-8 bg-primary/5 backdrop-blur-sm">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow shadow-[0_0_8px_rgba(138,180,248,0.8)]"></span>
        <span className="font-label-mono font-black text-[11px] text-primary uppercase tracking-[0.3em]">BUILD YOUR PODCAST ON SCALE</span>
      </div>
      <h1 className="font-display-xl text-[50px] sm:text-[60px] md:text-[72px] lg:text-[90px] leading-[1.1] mb-6 text-on-surface tracking-tighter">
        YOU <span className="font-headline-accent italic text-primary-fixed">RECORD</span>.<br />I HANDLE THE REST.
      </h1>
      {/* <p className="font-label-mono text-label-mono text-on-surface-variant mb-4 tracking-[0.2em] uppercase">
        VIDEO EDITOR &amp; MOTION DESIGNER
      </p> */}
      <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-12 text-on-surface/80">
        I help creators, founders, and brands turn conversations into content people actually share.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href='#work'>
          <button className="bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono px-10 py-4 rounded-full flex items-center gap-2 hover:shadow-[0_0_30px_rgba(138,180,248,0.5)] transition-all transform hover:-translate-y-1">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            WATCH MY WORK
          </button>
        </a>
        <a href="https://calendly.com/punitvachhani/30min" target="_blank" rel="noopener noreferrer" className="border border-primary/40 text-primary font-label-mono text-label-mono px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary/10 transition-all transform hover:-translate-y-1">
          LET'S TALK ↗
        </a>
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
  <section className="py-6 md:py-12 bg-[#0a0a0a] border-y border-outline-variant overflow-hidden">
    <div className="marquee-content whitespace-nowrap flex items-center">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-6 md:gap-12 font-display-lg text-xl md:text-display-lg-mobile text-white pr-6 md:pr-12">
          <span>CINEMATIC TRAILERS</span> <span className="text-primary-fixed text-base md:text-3xl">◆</span>
          <span>PODCAST EDITING</span> <span className="text-primary-fixed text-base md:text-3xl">◆</span>
          <span>VIRAL REELS &amp; SHORTS</span> <span className="text-primary-fixed text-base md:text-3xl">◆</span>
          <span>MOTION DESIGN</span> <span className="text-primary-fixed text-base md:text-3xl">◆</span>
          <span>BOLD THUMBNAILS</span> <span className="text-primary-fixed text-base md:text-3xl">◆</span>
          <span>CLIP EXTRACTION</span> <span className="text-primary-fixed text-base md:text-3xl">◆</span>
        </div>
      ))}
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    { tag: "Tr", title: "Cinematic Trailers", desc: "Launch trailers, season openers, and episode teasers that make your podcast look as good as it sounds. First impressions that pull people to watch the whole conversation." },
    { tag: "Pe", title: "Podcast Editing", desc: "From raw recordings to polished, publish-ready episodes. I handle the cuts and the cleanup so every conversation sounds seamless." },
    { tag: "9:16", title: "Viral Reels & Shorts", desc: "The best moments from your episodes, cut into scroll-stopping clips for Instagram, YouTube Shorts, and TikTok. More reach, zero extra recording." },
    { tag: "Md", title: "Motion Design", desc: "Animated intros, lower thirds, and episode graphics that give your podcast a visual identity worth remembering. Because great audio deserves great visuals too." },
    { tag: "Bt", title: "Bold Thumbnails", desc: "Episode thumbnails that stand out in a crowded feed and actually get clicked. Because even the best conversation needs a great cover." },
    { tag: "Ce", title: "Clip Extraction", desc: "I go through your full episodes and pull out the moments worth sharing the laughs, the insights, the quotables ready to post across every platform." }
  ];

  return (
    <section className="py-section-gap px-grid-margin max-w-7xl mx-auto" id="services">
      <div className="mb-16 flex flex-col items-start text-left">
        <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
          WHAT I DO
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase"
        >
          THE <span className="font-headline-accent italic text-primary-fixed">ARSENAL</span> BEHIND EVERY CUT
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

const ShortFormCard = ({ card }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMuted(!isMuted);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card-deck-item relative md:absolute flex-shrink-0 w-64 md:w-72 aspect-[9/16] bg-surface-container border-2 border-primary/20 hover:border-primary/50 rounded-2xl overflow-hidden shadow-2xl z-${card.z} hover:z-[100] md:hover:scale-105 md:hover:shadow-[0_0_50px_rgba(0,0,0,0.9)] snap-center md:snap-align-none ${card.initialClasses}`}
    >
      <video
        ref={videoRef}
        src={card.video}
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity rounded-[14px]"
      />
      <div className="absolute inset-0 bg-black/10 group-hover/deck:bg-transparent transition-colors pointer-events-none rounded-[14px]"></div>
      {/* <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-surface/90 via-surface/60 to-transparent pointer-events-none z-10 flex flex-col justify-end">
        <span className="font-label-mono text-[10px] text-primary mb-2 block tracking-widest uppercase">{card.tag}</span>
        <h4 className="font-display-lg text-body-md md:text-xl text-on-surface leading-tight">{card.title}</h4>
      </div> */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-outline-variant flex items-center justify-center text-white hover:bg-primary hover:text-background transition-colors z-20 shadow-lg"
      >
        <span className="material-symbols-outlined text-[20px]">{isMuted ? 'volume_off' : 'volume_up'}</span>
      </button>
    </div>
  );
};

const ShortFormDeck = () => {
  const cards = [
    { tag: "COMEBACK", title: "STORYTELLING REEL", video: "/short-form-video-1.mp4", z: 10, initialClasses: "md:rotate-[-4deg] md:translate-x-[-15px] md:translate-y-[5px] group-hover/deck:md:rotate-[-4deg] group-hover/deck:md:-translate-x-[115%] group-hover/deck:md:translate-y-[4%]" },
    { tag: "HARDWORK", title: "EDITORIAL CUT", video: "/short-form-video-2.mp4", z: 20, initialClasses: "md:rotate-[2deg] md:translate-x-[-5px] md:translate-y-[-2px] group-hover/deck:md:rotate-[2deg] group-hover/deck:md:-translate-x-[38%] group-hover/deck:md:-translate-y-[2%]" },
    { tag: "JOURNEY", title: "TRAVEL VLOG", video: "/short-form-video-3.mp4", z: 30, initialClasses: "md:rotate-[-2deg] md:translate-x-[5px] md:translate-y-[4px] group-hover/deck:md:rotate-[-1deg] group-hover/deck:md:translate-x-[38%] group-hover/deck:md:translate-y-[3%]" },
    { tag: "TECH SPEC", title: "PRODUCT AD", video: "/short-form-video-4.mp4", z: 40, initialClasses: "md:rotate-[3deg] md:translate-x-[15px] md:translate-y-[-3px] group-hover/deck:md:rotate-[3deg] group-hover/deck:md:translate-x-[115%] group-hover/deck:md:-translate-y-[1%]" }
  ];

  return (
    <section className="py-section-gap bg-background overflow-hidden" id="work">
      <div className="px-grid-margin max-w-7xl mx-auto">
        <div className="mb-6 md:mb-8 flex flex-col items-start text-left">
          <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
            WORK
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-4"
          >
            SHORT FORM <span className="font-headline-accent italic text-primary-fixed">CONTENT</span>
          </motion.h2>
          <p className="hidden md:block font-label-mono text-label-mono text-on-surface-variant tracking-widest uppercase">
            [ HOVER TO PLAY ]
          </p>
          <p className="md:hidden font-label-mono text-label-mono text-on-surface-variant tracking-widest uppercase">
            [ SWIPE TO VIEW • TAP TO PLAY ]
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Snap | Desktop: Hover Deck */}
        <div className="group/deck relative md:h-[520px] flex overflow-x-auto snap-x snap-mandatory md:overflow-visible gap-4 md:gap-0 pb-8 md:pb-0 hide-scrollbar md:items-center md:justify-center w-[calc(100vw-2rem)] md:w-full max-w-3xl mx-auto cursor-pointer mt-8 md:mt-12 -ml-4 pl-4 md:ml-auto md:pl-0">
          {cards.map((c, idx) => (
            <ShortFormCard key={idx} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedVideoCard = ({ p, maxTop }) => {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
      className="group sticky shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-[#000000] rounded-2xl transition-all duration-500 overflow-hidden border-2 border-primary/20 hover:border-primary/50 max-w-4xl mx-auto w-full"
      style={{ top: `var(--top-offset, ${p.top}px)`, zIndex: p.id * 10 }}
    >
      <style>{`
        @media (max-width: 768px) {
          div[style*="zIndex: ${p.id * 10}"] {
            --top-offset: ${p.topMobile}px;
          }
        }
      `}</style>
      <div className="relative bg-surface overflow-hidden transition-all duration-500 aspect-video">
        <iframe
          src={p.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
      {/* <div className="p-4 md:px-6 md:py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#000000] transition-all duration-500 relative z-10">
        <div>
          <h3 className="font-display-lg text-xl md:text-2xl text-on-surface mb-1.5 leading-none uppercase transition-colors">{p.title}</h3>
          <p className="font-label-mono text-[9px] text-on-surface-variant tracking-[0.15em] uppercase">{p.meta}</p>
        </div>
        <div className="border border-primary/40 text-primary font-label-mono text-[9px] tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap group-hover:border-primary transition-colors">
          {p.tag}
        </div>
      </div> */}
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const projects = [
    { id: 1, title: "COCA-COLA EDIT", meta: "BRAND COMMERCIAL • PREMIERE PRO • 2024", tag: "COMMERCIAL", url: "https://www.youtube.com/embed/AU2debSMciU?si=Q3pBpbLztgpP1TxD", top: 100, topMobile: 80 },
    { id: 2, title: "SEBASTIAN: SPEED NARRATIVE", meta: "FAN DOCUMENTARY • AFTER EFFECTS • 2023", tag: "DOCUMENTARY", url: "https://www.youtube.com/embed/YqBBDChtaKU?si=3j-FaDY19nbMc00n", top: 112, topMobile: 88 },
    { id: 3, title: "UBISOFT: UNSEEN WORLD", meta: "GAME TRAILER • PREMIERE PRO • 2024", tag: "GAME TRAILER", url: "https://www.youtube.com/embed/swyl_ZoF0uQ?start=92", top: 124, topMobile: 96 },
    { id: 4, title: "PV. PERSONAL BRAND FILM", meta: "IDENTITY PIECE • DAVINCI RESOLVE • 2024", tag: "BRAND FILM", url: "https://www.youtube.com/embed/PYX47o71G4o", top: 136, topMobile: 104 }
  ];

  const maxTop = Math.max(...projects.map(p => p.top));

  return (
    <section className="py-section-gap px-grid-margin max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col items-start text-left">
        <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
          FEATURED EPISODES
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase"
        >
          FEATURED <span className="font-headline-accent italic text-primary-fixed">EPISODES</span>
        </motion.h2>
      </div>
      <div className="flex flex-col gap-8 relative">
        {projects.map((p) => (
          <FeaturedVideoCard key={p.id} p={p} maxTop={maxTop} />
        ))}
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "ONBOARDING", desc: "We get aligned on your show's tone, audience, and editing style. One conversation, and I know exactly what your podcast needs." },
    { num: "02", title: "YOU RECORD, I RECEIVE", desc: "Drop your raw files in our shared folder. No chasing, no confusion just a smooth handoff every episode." },
    { num: "03", title: "EDITING", desc: "I clean up the audio, cut the fluff, fix the pacing, and make every conversation sound natural and engaging." },
    { num: "04", title: "REVIEW", desc: "You get the episode to review. One round of feedback, quick changes, done. No back and forth forever." },
    { num: "05", title: "DELIVERY", desc: "Publish-ready episode delivered — with clips, audiograms, and thumbnails. On time, every time." }
  ];

  return (
    <section className="py-section-gap bg-background" id="process">
      <div className="px-grid-margin max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-start text-left">
          <div className="border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
            HOW IT WORKS
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-6"
          >
            FROM RECORDING TO <span className="font-headline-accent italic text-primary-fixed">FINAL EPISODE</span>
          </motion.h2>
          <p className="text-on-surface-variant text-body-lg max-w-xl">
            A simple, stress-free process so you always know what's happening and when.
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
                <h4 className="font-display-lg text-base md:text-[18px] tracking-wider text-on-surface mb-3 uppercase">{s.title}</h4>
                <p className="text-[12px] md:text-[13px] text-on-surface-variant/80 leading-relaxed px-1 md:px-3">{s.desc}</p>
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
          className="aspect-square rounded-2xl border border-primary/30 overflow-hidden relative shadow-[0_0_40px_rgba(138,180,248,0.15)]"
          style={{ background: 'radial-gradient(circle at top left, rgba(138,180,248,0.3), transparent 75%), #0a0a0a' }}
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
        className="flex flex-col h-full py-4 lg:py-0"
      >
        <div className="flex flex-col items-start text-left mb-4 md:mb-8">
          <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-6">
            ABOUT
          </div>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-[0.9]">
            THE <span className="font-headline-accent italic text-primary-fixed">EDITOR</span> BEHIND THAT CUT
          </h2>
        </div>

        <div className="text-base lg:text-lg text-on-surface-variant leading-relaxed md:leading-loose">
          <p>I started my podcasting journey as a creator, learning firsthand what it takes to build and grow a podcast. Over the years, I’ve worked with creators, founders, and brands on their podcasting journeys, giving me a broader perspective on storytelling, production, audience engagement, and content strategy. This combination of creator and operator experience allows me to help podcasts create meaningful conversations that resonate with their audience.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-8 mt-auto">
          <a href="mailto:vachhanipunit@yahoo.in" className="inline-flex items-center justify-center bg-primary-fixed text-on-primary-fixed font-label-mono text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,227,128,0.6)] transition-all shadow-[0_0_15px_rgba(0,227,128,0.3)]">
            EMAIL <span className="ml-2 text-sm leading-none">→</span>
          </a>
          <a href="https://calendly.com/punitvachhani/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-transparent border border-outline-variant text-on-surface font-label-mono text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:border-primary/50 transition-colors">
            BOOK A CALL <span className="ml-2 text-sm leading-none">↗</span>
          </a>
        </div>
      </motion.div >
    </div >
  </section >
);

const CtaSection = () => (
  <section className="py-section-gap relative overflow-hidden bg-[#0a0a0a]">
    <div className="px-grid-margin max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
      <div className="inline-block border border-primary/30 text-primary font-label-mono text-[10px] tracking-widest px-4 py-1.5 rounded-full mb-8">
        LET'S WORK TOGETHER
      </div>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="font-display-xl text-5xl md:text-[120px] mb-8 text-white leading-[0.9]"
      >
        LET'S CREATE <br />
        <span className="font-headline-accent italic text-primary-fixed">SOMETHING<br />EPIC</span>
      </motion.h2>
      {/* <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Whether it's a brand film, a viral reel, or a full content series — let's build something your audience won't scroll past.
      </motion.p> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a href="https://calendly.com/punitvachhani/30min" target="_blank" rel="noopener noreferrer" className="bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono px-12 py-5 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(138,180,248,0.6)] transition-all transform hover:-translate-y-1">
          LET'S TALK ↗
        </a>
        <button className="border border-outline-variant text-on-surface font-label-mono text-label-mono px-12 py-5 rounded-full hover:bg-surface-variant transition-all transform hover:-translate-y-1">
          FOLLOW MY WORK
        </button>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-4 md:py-5 px-grid-margin border-t border-outline-variant bg-surface-container-low grid grid-cols-1 md:grid-cols-3 items-center gap-5 font-body-md text-body-md">
    <div className="flex flex-col items-center md:items-start gap-1">
      <img src={signLogo} alt="PV Logo" className="h-5 md:h-7 w-auto mb-1" />
      <p className="font-label-mono text-[10px] text-on-surface-variant tracking-widest uppercase">CUTS THAT MOVE PEOPLE</p>
    </div>
    <div className="flex justify-center gap-6">
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono" href="#services">SERVICES</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono" href="#work">WORK</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono" href="#process">PROCESS</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-label-mono text-label-mono" href="#about">ABOUT</a>
    </div>
    <div className="text-on-surface-variant font-label-mono text-[12px] text-center md:text-right">
      © 2026. All rights reserved
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
