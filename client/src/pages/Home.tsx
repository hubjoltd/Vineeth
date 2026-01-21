import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, ChevronDown, Sparkles, Shield, Gem, Crown, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import logoImage from "@assets/vineeth_logo_1768976897053.png";
import srinivasImage from "@assets/Koshetty_Srinivas_1768976904631.png";
import venkatnarayanaImage from "@assets/Koshetty_Venkatnarayana_1768976910813.png";
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 flex-shrink-0" data-testid="link-logo" aria-label="Vineeth Jewellers - Home">
          <img src={logoImage} alt="Vineeth Jewellers Logo" className="h-10 sm:h-12 object-contain" />
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

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/vineethjewellers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors"
            data-testid="link-instagram"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={20} aria-hidden="true" />
          </a>

          <button
            className="md:hidden p-2 text-neutral-600 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.nav
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-neutral-100"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="block py-3 px-4 text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-colors rounded-md" 
                style={{ fontFamily: 'Poppins, sans-serif' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      image: heroImage1,
      title: "MAKE A",
      highlight: "STATEMENT",
      subtitle: "Where relationships matter more than revenue",
      gridImages: [heroImage2, heroImage3, banglesImage, modernImage]
    },
    {
      image: heroImage2,
      title: "CRAFTED WITH",
      highlight: "PASSION",
      subtitle: "60 years of legacy in every piece",
      gridImages: [heroImage1, bridalImage, weddingImage, heroImage3]
    },
    {
      image: heroImage3,
      title: "TRENDS CHANGE",
      highlight: "TRUST DOESN'T",
      subtitle: "An investment. A memory. A gift.",
      gridImages: [weddingImage, modernImage, heroImage1, heroImage2]
    }
  ];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative min-h-screen bg-neutral-900 pt-16 overflow-hidden" aria-label="Hero section - Vineeth Jewellers">
      <div ref={emblaRef} className="overflow-hidden h-[calc(100vh-4rem)]">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="absolute inset-0 flex">
                <div className="w-full lg:w-1/2 relative flex flex-col justify-center px-6 sm:px-12 lg:px-16">
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80 lg:to-transparent z-0" aria-hidden="true" />
                  <div className="absolute inset-0 lg:hidden">
                    <img src={slide.image} alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -50 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0, x: selectedIndex === index ? 0 : -50 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
                    className="relative z-10"
                  >
                    <span className="text-primary/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Since 1965 • 60 Years of Legacy
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {slide.title}
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {slide.highlight}
                    </h1>
                    <p className="text-neutral-400 text-base sm:text-lg mb-8 max-w-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {slide.subtitle}
                    </p>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-medium rounded-none"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      data-testid="button-explore-legacy"
                      onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      EXPLORE OUR LEGACY
                    </Button>
                  </motion.div>
                </div>

                <div className="hidden lg:grid w-1/2 grid-cols-2 grid-rows-2 gap-1 p-1">
                  {slide.gridImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, scale: selectedIndex === index ? 1 : 0.9 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3 + i * 0.1 }}
                      className="relative overflow-hidden group"
                    >
                      <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" aria-hidden="true" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
          aria-label="Previous slide"
          data-testid="button-prev-slide"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${selectedIndex === i ? 'bg-primary w-6' : 'bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
              data-testid={`button-slide-${i}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
          aria-label="Next slide"
          data-testid="button-next-slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-8 right-8 text-white/30 text-6xl font-light hidden lg:block" style={{ fontFamily: "'Playfair Display', serif" }}>
        0{selectedIndex + 1}
      </div>
    </section>
  );
}

function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="about" className="relative" aria-labelledby="about-heading">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="bg-neutral-900 relative py-16 lg:py-0">
          <div className="lg:absolute lg:inset-0 flex items-center justify-center p-8 lg:p-16">
            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 1 }}
              className="relative"
            >
              <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px] overflow-hidden">
                <img
                  src={ringHandImage}
                  alt="Elegant hand holding a diamond ring showcasing fine craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-2 border-primary/30 -translate-x-4 -translate-y-4" aria-hidden="true" />
              </div>
              
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 bg-primary flex items-center justify-center"
              >
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>60</span>
                  <span className="text-xs block text-white/80 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>Years</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="bg-neutral-50 flex items-center py-16 lg:py-0">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20 max-w-xl">
            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <span className="text-primary text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                About Us
              </span>
              <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                CELEBRATE YOUR <br />
                <span className="font-medium text-primary">MOMENTS</span> WITH US
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                At Vineeth Jewellers, we believe every piece tells a story. For 60 years, we have been crafting not just jewellery, but memories that last generations.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our commitment to transparency, quality craftsmanship, and building lasting relationships has made us a trusted name across Hyderabad. Where relationships matter more than revenue.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-none"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                data-testid="button-explore-more"
                onClick={() => document.getElementById('visionaries')?.scrollIntoView({ behavior: 'smooth' })}
              >
                EXPLORE OUR LEGACY
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
      image: null,
      imageAlt: "Koshetty Krishna, third generation leader continuing the family legacy",
      quote: "Honor the past, embrace the future."
    }
  ];

  return (
    <section id="visionaries" className="py-16 sm:py-24 md:py-32 bg-neutral-50" aria-labelledby="visionaries-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            The Visionaries
          </motion.span>
          <motion.h2
            id="visionaries-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Guardians of the <span className="text-primary font-medium">Promise</span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
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
    <section id="philosophy" className="py-16 sm:py-24 md:py-32 bg-neutral-50" aria-labelledby="philosophy-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            id="philosophy-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why <span className="text-primary font-medium">Vineeth Jewellers?</span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {philosophies.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.15 }}
              className="group p-6 sm:p-8 bg-white border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <span className="text-xs tracking-wider uppercase text-primary mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {item.subtitle}
              </span>
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {item.description}
              </p>
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
    <section id="collections" className="py-16 sm:py-24 md:py-32 bg-neutral-900 overflow-hidden" aria-labelledby="collections-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <motion.span
              variants={fadeInUp}
              className="text-primary/80 text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 block"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              View our latest works
            </motion.span>
            <motion.p
              variants={fadeInUp}
              className="text-neutral-500 text-sm sm:text-base"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              We tried to design a new style to view our new jewellery to be more different than ever
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="lg:col-span-2"
          >
            <h2 id="collections-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              OUR <span className="font-medium text-gold">WORKs</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-48 sm:h-64 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full blur-3xl -z-0" aria-hidden="true" />
          
          <motion.p
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neutral-500 text-xs sm:text-sm max-w-xs mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Zales combination of statement and simplistic style helps create a look that's as unique as you are
          </motion.p>

          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {collections.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.1 }}
                className="group flex-shrink-0 w-40 sm:w-48 md:w-56"
              >
                <div className="relative aspect-[3/4] mb-3 overflow-hidden rounded-2xl sm:rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  
                  {item.category === "New" && (
                    <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.category}
                    </span>
                  )}
                </div>
                <h3 className="text-white text-xs sm:text-sm font-medium text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
              </motion.article>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <div className="w-8 h-2 bg-white/30 rounded-full" aria-hidden="true" />
            <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true" />
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
    <section id="visit" className="py-16 sm:py-24 md:py-32 bg-white" aria-labelledby="visit-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Visit Us
          </motion.span>
          <motion.h2
            id="visit-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience the <span className="text-primary font-medium">Difference</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-neutral-600 max-w-xl mx-auto text-sm sm:text-base"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Walk into our store to witness designs that are government-approved and BIS Hallmarked.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {locations.map((location, index) => (
            <motion.article
              key={location.name}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.2 }}
              className="group p-6 sm:p-8 border border-neutral-200 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs tracking-wider uppercase text-primary mb-1 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {location.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {location.name}
                  </h3>
                </div>
              </div>

              <p className="text-neutral-600 mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {location.description}
              </p>

              <a
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                data-testid={`link-directions-${location.name.toLowerCase().replace(' ', '-')}`}
                aria-label={`Get directions to ${location.name} store on Google Maps (opens in new tab)`}
              >
                Get Directions
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
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
          className="text-center p-8 sm:p-12 bg-neutral-50"
        >
          <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-4 sm:mb-6" aria-hidden="true" />
          <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Experience Our Legacy?
          </h3>
          <p className="text-neutral-600 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Visit our store and discover why families trust us generation after generation.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-none tracking-wide"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="button-contact"
            aria-label="Contact us to schedule a visit"
          >
            Contact Us Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 sm:py-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <img src={logoImage} alt="Vineeth Jewellers" className="h-12 sm:h-14 mb-4 sm:mb-6 brightness-110" />
            <p className="text-neutral-400 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Where relationships matter more than revenue. A 60-year legacy of trust and craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3" aria-label="Footer navigation">
              <a href="#about" className="block text-neutral-400 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</a>
              <a href="#visionaries" className="block text-neutral-400 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Legacy</a>
              <a href="#philosophy" className="block text-neutral-400 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Philosophy</a>
              <a href="#collections" className="block text-neutral-400 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Collections</a>
              <a href="#visit" className="block text-neutral-400 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Visit Us</a>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Connect</h4>
            <a
              href="https://www.instagram.com/vineethjewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-neutral-400 hover:text-primary transition-colors"
              data-testid="link-instagram-footer"
              aria-label="Follow Vineeth Jewellers on Instagram"
            >
              <Instagram size={20} aria-hidden="true" />
              <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>@vineethjewellers</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center sm:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
            &copy; {new Date().getFullYear()} Vineeth Jewellers. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BIS Hallmarked • Government Approved
          </p>
        </div>
      </div>
    </footer>
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
    </div>
  );
}
