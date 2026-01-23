import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, ChevronDown, Sparkles, Shield, Gem, Crown, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import logoImage from "@assets/vineeth_logo_1768976897053.png";
import srinivasImage from "@assets/Koshetty_Srinivas_1768976904631.png";
import venkatnarayanaImage from "@assets/Koshetty_Venkatnarayana_1768976910813.png";
import krishnaImage from "@assets/Koshetty_Krishna_1769067024409.png";
import heroImage1 from "@assets/stock_images/elegant_gold_jewelle_a129e18d.jpg";
import heroImage2 from "@assets/stock_images/elegant_gold_jewelle_3d5117ac.jpg";
import heroImage3 from "@assets/stock_images/elegant_gold_jewelle_f6c1fccc.jpg";
import weddingImage from "@assets/stock_images/traditional_indian_g_79e97d19.jpg";
import bridalImage from "@assets/stock_images/traditional_indian_g_38770cb3.jpg";
import modernImage from "@assets/stock_images/modern_minimalist_go_9194da39.jpg";
import banglesImage from "@assets/stock_images/luxury_gold_bangles__797059ff.jpg";
import ringHandImage from "@assets/stock_images/elegant_hand_holding_d1529f3a.jpg";
import goldRingImage from "@assets/stock_images/woman_wearing_gold_r_ad36c8b2.jpg";
import hoopEarringsImage from "@assets/stock_images/gold_hoop_earrings_l_eb720eaa.jpg";
import necklaceImage from "@assets/stock_images/woman_wearing_gold_c_36155047.jpg";
import heroVideo from "@assets/hero-jewelry.mp4";

const createFadeInUp = (shouldReduceMotion: boolean | null) => ({
  initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
});

const createStaggerContainer = (shouldReduceMotion: boolean | null) => ({
  animate: {
    transition: shouldReduceMotion ? {} : {
      staggerChildren: 0.15
    }
  }
});

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#visionaries", label: "Our Legacy" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#collections", label: "Collections" },
    { href: "#visit", label: "Visit Us" }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg border-b border-neutral-100/50"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-2 sm:py-4 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 flex-shrink-0" data-testid="link-logo" aria-label="Vineeth Jewellers - Home">
          <img src={logoImage} alt="Vineeth Jewellers Logo" className="h-[100px] sm:h-14 md:h-20 object-contain" />
        </a>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" role="navigation" aria-label="Main navigation">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors" 
              style={{ fontFamily: 'Poppins, sans-serif' }} 
              data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/vineethjewellers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors"
            data-testid="link-instagram"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={18} aria-hidden="true" className="sm:w-5 sm:h-5" />
          </a>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-neutral-800 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.nav
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white absolute left-0 right-0 top-full shadow-xl border-t border-neutral-100"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-6 space-y-0">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.href}
                href={link.href} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="block py-4 text-lg font-light text-neutral-800 hover:text-primary transition-colors border-b border-neutral-100 last:border-0" 
                style={{ fontFamily: "'Playfair Display', serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Since 1965 • 60 Years of Trust
              </span>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-neutral-900 pt-[116px] sm:pt-[88px] overflow-hidden" aria-label="Hero section - Vineeth Jewellers">
      {/* Video Background */}
      <div className="absolute inset-0 pt-[116px] sm:pt-[88px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Elegant dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/70 to-neutral-900/90 md:bg-gradient-to-r md:from-neutral-900 md:via-neutral-900/80 md:to-neutral-900/40" aria-hidden="true" />
      </div>

      {/* Content - Centered on mobile, left-aligned on desktop */}
      <div className="relative z-10 h-[calc(100vh-116px)] sm:h-[calc(100vh-88px)] flex items-center justify-center md:justify-start">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.3 }}
            className="max-w-2xl text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6 sm:mb-8"
            >
              <span className="text-primary text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase px-4 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Since 1965
              </span>
            </motion.div>
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-2 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trends Change.
            </h1>
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gold mb-6 sm:mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trust Doesn't.
            </h1>
            <p className="text-neutral-300/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-md mx-auto md:mx-0 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Where relationships matter more than revenue.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-neutral-900 px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base font-medium tracking-wide border-0 shadow-2xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="button-explore-collections"
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE COLLECTIONS
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile for cleaner look */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>Scroll</span>
          <ChevronDown className="text-white/40" size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="about" className="relative" aria-labelledby="about-heading">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-screen">
        {/* Dark section with 60 Years badge */}
        <div className="bg-neutral-900 relative py-16 sm:py-20 lg:py-0 order-1 lg:order-1">
          <div className="lg:absolute lg:inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 1 }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Elegant decorative lines */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border border-primary/20 rotate-45" />
              </div>
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.3 }}
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 bg-primary flex items-center justify-center relative z-10"
              >
                <div className="text-center">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>60</span>
                  <span className="text-xs sm:text-sm block text-white/90 uppercase tracking-[0.2em] mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Years</span>
                  <span className="text-[10px] sm:text-xs block text-white/70 uppercase tracking-[0.15em]" style={{ fontFamily: 'Poppins, sans-serif' }}>of Trust</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Light section with text */}
        <div className="bg-white flex items-center py-14 sm:py-20 lg:py-24 order-2 lg:order-2">
          <div className="px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
              className="text-center sm:text-left"
            >
              <span className="inline-block text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-5 sm:mb-6 pb-3 border-b border-primary/20" style={{ fontFamily: 'Poppins, sans-serif' }}>
                About Us
              </span>
              <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-5 sm:mb-6 leading-[1.2]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Celebrate Your <br className="hidden sm:block" />
                <span className="font-medium text-primary">Moments</span> With Us
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4 sm:mb-5 text-[15px] sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                At Vineeth Jewellers, we believe every piece tells a story. For 60 years, we have been crafting not just jewellery, but memories that last generations.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8 sm:mb-10 text-[15px] sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our commitment to transparency, quality craftsmanship, and building lasting relationships has made us a trusted name across Hyderabad.
              </p>
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 sm:px-10 py-6 text-sm tracking-wide w-full sm:w-auto"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                data-testid="button-visit-store"
                onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}
              >
                VISIT OUR STORE
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionariesSection() {
  const shouldReduceMotion = useReducedMotion();
  const fadeInUp = createFadeInUp(shouldReduceMotion);
  const staggerContainer = createStaggerContainer(shouldReduceMotion);
  
  const visionaries = [
    {
      name: "Koshetty Venkatnarayana",
      role: "The Foundation",
      years: "60 Years Ago",
      description: "Started with a simple belief: relationships matter more than revenue. His vision laid the foundation for a legacy built on trust.",
      image: venkatnarayanaImage,
      imageAlt: "Portrait of Koshetty Venkatnarayana, founder of Vineeth Jewellers",
      quote: "Build relationships, not just businesses."
    },
    {
      name: "Koshetty Srinivas",
      role: "The Expansion",
      years: "Second Generation",
      description: "Expanded the family legacy by establishing in-house manufacturing and introduced new collections while maintaining the core values.",
      image: srinivasImage,
      imageAlt: "Portrait of Koshetty Srinivas, second generation leader of Vineeth Jewellers",
      quote: "Quality is the best business plan."
    },
    {
      name: "Koshetty Krishna",
      role: "The Innovation",
      years: "Present Day",
      description: "Bridging tradition with modernity, bringing contemporary designs while preserving the craftsmanship that defines us.",
      image: krishnaImage,
      imageAlt: "Koshetty Krishna, third generation leader continuing the family legacy",
      quote: "Honor the past, embrace the future."
    }
  ];

  return (
    <section id="visionaries" className="py-16 sm:py-24 md:py-28 lg:py-32 bg-neutral-50" aria-labelledby="visionaries-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-5 pb-3 border-b border-primary/20"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            The Visionaries
          </motion.span>
          <motion.h2
            id="visionaries-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Guardians of the <span className="text-primary font-medium">Promise</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8">
          {visionaries.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 60, rotateY: shouldReduceMotion ? 0 : -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={shouldReduceMotion ? {} : { 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className="group relative bg-white overflow-hidden shadow-sm sm:shadow-lg hover:shadow-2xl transition-shadow duration-500"
              style={{ perspective: "1000px" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {person.image ? (
                  <>
                    <motion.img
                      src={person.image}
                      alt={person.imageAlt}
                      className="w-full h-full object-cover object-top"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" aria-hidden="true" />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-neutral-100 flex items-center justify-center" role="img" aria-label={person.imageAlt}>
                    <motion.div
                      animate={shouldReduceMotion ? {} : { 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Crown className="w-24 h-24 sm:w-32 sm:h-32 text-primary/30" aria-hidden="true" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" aria-hidden="true" />
                  </div>
                )}
                
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="inline-block bg-primary text-white px-3 py-1.5 text-xs tracking-wider uppercase font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {person.years}
                  </span>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <p className="text-primary/80 text-xs tracking-wider uppercase mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {person.role}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-medium text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {person.name}
                    </h3>
                  </motion.div>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-white">
                <p className="text-neutral-600 leading-relaxed mb-4 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {person.description}
                </p>
                
                {person.quote && (
                  <motion.blockquote 
                    className="relative pl-4 border-l-2 border-primary"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Sparkles className="absolute -left-3 -top-1 w-4 h-4 text-primary" aria-hidden="true" />
                    <p className="italic text-neutral-700 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                      "{person.quote}"
                    </p>
                  </motion.blockquote>
                )}
              </div>

              <motion.div 
                className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg pointer-events-none transition-colors duration-500"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const shouldReduceMotion = useReducedMotion();
  const fadeInUp = createFadeInUp(shouldReduceMotion);
  const staggerContainer = createStaggerContainer(shouldReduceMotion);
  
  const philosophies = [
    {
      icon: Shield,
      title: "Transparency is Our Biggest Luxury",
      subtitle: "Total Control Over Quality",
      description: "With an in-house manufacturing facility, we control every step from raw gold to the finished masterpiece."
    },
    {
      icon: Gem,
      title: "Craftsmanship Over Mass Production",
      subtitle: "15-20 Days Per Piece",
      description: "Every piece undergoes meticulous handcrafting by our 80+ skilled artisans."
    },
    {
      icon: Sparkles,
      title: "The P-Q-D Standard",
      subtitle: "Price • Quality • Design",
      description: "Our promise: fair pricing, uncompromising quality, and designs that tell your story."
    }
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-24 md:py-28 lg:py-32 bg-white" aria-labelledby="philosophy-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-5 pb-3 border-b border-primary/20"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            id="philosophy-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why <span className="text-primary font-medium">Vineeth Jewellers?</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8">
          {philosophies.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.15 }}
              className="group p-6 sm:p-8 bg-neutral-50 sm:bg-white border-0 sm:border border-neutral-100 hover:border-primary/20 hover:shadow-lg transition-all duration-500"
            >
              <div className="flex items-start gap-4 sm:block">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center flex-shrink-0 sm:mb-6 group-hover:bg-primary/15 transition-colors" aria-hidden="true">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 sm:block">
                  <span className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-primary/80 mb-1 sm:mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4 text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-[13px] sm:text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionsSection() {
  const shouldReduceMotion = useReducedMotion();
  const fadeInUp = createFadeInUp(shouldReduceMotion);
  const staggerContainer = createStaggerContainer(shouldReduceMotion);
  
  const collections = [
    {
      title: "THE ROSELEEN RING",
      category: "Rings",
      image: goldRingImage,
      imageAlt: "Elegant gold ring worn on hand"
    },
    {
      title: "THE ZOE EARRINGS",
      category: "Earrings",
      image: hoopEarringsImage,
      imageAlt: "Luxurious gold hoop earrings"
    },
    {
      title: "THE CHUBBY HOOPS",
      category: "Hoops",
      image: banglesImage,
      imageAlt: "Gold chunky hoop earrings"
    },
    {
      title: "THE HIBISCUS RING II",
      category: "New",
      image: modernImage,
      imageAlt: "Modern designer gold ring"
    },
    {
      title: "THE ELEGANCE CHAIN",
      category: "Necklaces",
      image: necklaceImage,
      imageAlt: "Woman wearing elegant gold chain necklace"
    }
  ];

  return (
    <section id="collections" className="py-16 sm:py-24 md:py-28 lg:py-32 bg-neutral-900 overflow-hidden" aria-labelledby="collections-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Elegant header - centered on mobile */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-primary/80 text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-5 pb-3 border-b border-primary/20"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Collections
          </motion.span>
          <motion.h2
            id="collections-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Our <span className="text-primary font-medium">Premium</span> Collections
          </motion.h2>
        </motion.div>

        {/* Cards container with elegant background */}
        <div className="relative bg-neutral-800/30 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-10">
          {/* Scrolling cards - staggered layout */}
          <div className="flex items-end gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-6 pt-4 scrollbar-hide -mx-1 px-1">
            {collections.map((item, index) => {
              // Staggered heights and rotations like the reference
              const rotations = [-2, 1.5, -1, 2, -1.5];
              const heights = ['h-44 sm:h-52 md:h-56', 'h-48 sm:h-56 md:h-64', 'h-52 sm:h-60 md:h-72', 'h-48 sm:h-56 md:h-64', 'h-44 sm:h-52 md:h-56'];
              const marginTops = ['mt-4 sm:mt-6', 'mt-2 sm:mt-3', 'mt-0', 'mt-2 sm:mt-3', 'mt-4 sm:mt-6'];
              
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.1 }}
                  className={`group flex-shrink-0 w-28 sm:w-36 md:w-44 lg:w-48 ${marginTops[index] || 'mt-4'}`}
                  style={{ transform: `rotate(${rotations[index] || 0}deg)` }}
                >
                  <div className={`relative ${heights[index] || 'h-52 sm:h-64'} w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-white/5`}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" aria-hidden="true" />
                    
                    {/* New badge */}
                    {item.category === "New" && (
                      <span className="absolute top-3 left-3 bg-primary text-white text-[9px] sm:text-[10px] px-2 py-1 font-medium tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        NEW
                      </span>
                    )}
                    
                    {/* Title at bottom of card */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <span className="text-primary/70 text-[9px] uppercase tracking-wider block mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.category}
                      </span>
                      <h3 className="text-white text-[11px] sm:text-xs font-medium uppercase tracking-wide leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Elegant scroll indicator */}
          <div className="flex justify-center items-center gap-3 mt-6 sm:mt-8">
            <div className="w-8 h-0.5 bg-white/10 rounded-full" aria-hidden="true" />
            <div className="w-8 h-0.5 bg-primary rounded-full" aria-hidden="true" />
            <div className="w-8 h-0.5 bg-white/10 rounded-full" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  const shouldReduceMotion = useReducedMotion();
  const fadeInUp = createFadeInUp(shouldReduceMotion);
  const staggerContainer = createStaggerContainer(shouldReduceMotion);
  
  const locations = [
    {
      name: "Somajiguda",
      subtitle: "Flagship Store",
      description: "Experience our flagship hospitality where relationships are built.",
      mapLink: "https://maps.app.goo.gl/tHhDAWHSymi4EfJ36"
    },
    {
      name: "Habits Store",
      subtitle: "Heritage Collection",
      description: "A curated experience for discerning collectors.",
      mapLink: "https://maps.app.goo.gl/zTrCEqaRUW5DPRj47"
    }
  ];

  return (
    <section id="visit" className="py-16 sm:py-24 md:py-28 lg:py-32 bg-neutral-50" aria-labelledby="visit-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-5 pb-3 border-b border-primary/20"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Visit Us
          </motion.span>
          <motion.h2
            id="visit-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience the <span className="text-primary font-medium">Difference</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-neutral-500 max-w-md mx-auto text-[13px] sm:text-sm md:text-base"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Walk into our store to witness designs that are government-approved and BIS Hallmarked.
          </motion.p>
        </motion.div>

        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {locations.map((location, index) => (
            <motion.article
              key={location.name}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.2 }}
              className="group p-6 sm:p-8 bg-white border-0 sm:border border-neutral-100 hover:border-primary/20 hover:shadow-lg transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-primary/80 mb-0.5 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {location.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {location.name}
                  </h3>
                </div>
              </div>

              <p className="text-neutral-500 mb-5 sm:mb-6 text-[13px] sm:text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {location.description}
              </p>

              <a
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                data-testid={`link-directions-${location.name.toLowerCase().replace(' ', '-')}`}
                aria-label={`Get directions to ${location.name} store on Google Maps (opens in new tab)`}
              >
                Get Directions
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center py-12 px-6 sm:p-14 bg-neutral-900"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 mx-auto mb-5 sm:mb-6 flex items-center justify-center" aria-hidden="true">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Experience Our Legacy?
          </h3>
          <p className="text-neutral-400 mb-8 sm:mb-10 max-w-sm mx-auto text-[13px] sm:text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Visit our store and discover why families trust us generation after generation.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-neutral-900 px-10 sm:px-12 py-6 text-sm sm:text-base tracking-wide w-full sm:w-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="button-contact"
            aria-label="Contact us to schedule a visit"
          >
            CONTACT US TODAY
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 py-14 sm:py-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Logo and tagline - centered on mobile */}
        <div className="text-center sm:text-left mb-10 sm:mb-0 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div className="mb-8 sm:mb-12">
            <img src={logoImage} alt="Vineeth Jewellers" className="h-10 sm:h-12 mb-4 sm:mb-5 brightness-110 mx-auto sm:mx-0" />
            <p className="text-neutral-500 text-[13px] sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Where relationships matter more than revenue. A 60-year legacy of trust and craftsmanship.
            </p>
          </div>

          <div className="hidden sm:block">
            <h4 className="text-white/90 font-medium mb-5 text-sm tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h4>
            <nav className="space-y-3" aria-label="Footer navigation">
              <a href="#about" className="block text-neutral-500 hover:text-white transition-colors text-[13px]" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</a>
              <a href="#visionaries" className="block text-neutral-500 hover:text-white transition-colors text-[13px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Legacy</a>
              <a href="#philosophy" className="block text-neutral-500 hover:text-white transition-colors text-[13px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Philosophy</a>
              <a href="#collections" className="block text-neutral-500 hover:text-white transition-colors text-[13px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Collections</a>
              <a href="#visit" className="block text-neutral-500 hover:text-white transition-colors text-[13px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Visit Us</a>
            </nav>
          </div>

          <div className="hidden sm:block">
            <h4 className="text-white/90 font-medium mb-5 text-sm tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Connect</h4>
            <a
              href="https://www.instagram.com/vineethjewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-neutral-500 hover:text-primary transition-colors"
              data-testid="link-instagram-footer"
              aria-label="Follow Vineeth Jewellers on Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
              <span className="text-[13px]" style={{ fontFamily: 'Poppins, sans-serif' }}>@vineethjewellers</span>
            </a>
          </div>
        </div>

        {/* Mobile-only social link */}
        <div className="sm:hidden text-center mb-8">
          <a
            href="https://www.instagram.com/vineethjewellers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors"
            aria-label="Follow Vineeth Jewellers on Instagram"
          >
            <Instagram size={18} aria-hidden="true" />
            <span className="text-[13px]" style={{ fontFamily: 'Poppins, sans-serif' }}>@vineethjewellers</span>
          </a>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-neutral-800/50 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-neutral-600 text-[11px] sm:text-xs text-center sm:text-left tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
            &copy; {new Date().getFullYear()} Vineeth Jewellers. All rights reserved.
          </p>
          <p className="text-neutral-700 text-[10px] sm:text-xs tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BIS Hallmarked • Government Approved
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917331116771"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      data-testid="button-whatsapp-floating"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <VisionariesSection />
        <PhilosophySection />
        <CollectionsSection />
        <VisitSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
