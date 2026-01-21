import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, ChevronDown, Sparkles, Shield, Gem, Crown, Menu, X } from "lucide-react";

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
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, shouldReduceMotion ? 1 : 0]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section - Vineeth Jewellers"
    >
      <motion.div style={{ y: shouldReduceMotion ? "0%" : y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-1">
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2, delay: 0 }}
            className="relative overflow-hidden hidden md:block"
          >
            <img 
              src={heroImage1} 
              alt="Elegant gold necklace showcasing traditional craftsmanship" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden="true" />
          </motion.div>
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2, delay: 0.2 }}
            className="relative overflow-hidden col-span-1 md:col-span-1"
          >
            <img 
              src={heroImage2} 
              alt="Exquisite gold jewellery piece highlighting intricate details" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden="true" />
          </motion.div>
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2, delay: 0.4 }}
            className="relative overflow-hidden hidden md:block"
          >
            <img 
              src={heroImage3} 
              alt="Premium gold jewellery demonstrating masterful artistry" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden="true" />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" aria-hidden="true" />
      </motion.div>

      <motion.div style={{ opacity: shouldReduceMotion ? 1 : opacity }} className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.6 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block px-3 sm:px-4 py-2 text-xs tracking-[0.2em] sm:tracking-[0.3em] text-amber-300 uppercase border border-amber-400/30 rounded-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Since 1965 • 60 Years of Legacy
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Trends Change.<br />
          <span className="text-gold font-medium">Trust Doesn't.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 1 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Where relationships matter more than revenue
        </motion.p>

        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 1.2 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-none tracking-wide"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="button-cta-hero"
            onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Experience our legacy - scroll to visit us section"
          >
            Experience Our Legacy
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const fadeInUp = createFadeInUp(shouldReduceMotion);
  const staggerContainer = createStaggerContainer(shouldReduceMotion);
  
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-white" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={banglesImage} 
                alt="Elegant gold bangles showcasing traditional Indian craftsmanship and intricate design details" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 border border-amber-400/20" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-32 h-32 sm:w-48 sm:h-48 border border-amber-400/30" aria-hidden="true" />
            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.4, duration: 0.6 }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-primary text-white px-4 sm:px-6 py-3 sm:py-4 text-center"
            >
              <span className="block text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>60+</span>
              <span className="text-xs tracking-wider uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>Years of Trust</span>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8 order-1 md:order-2">
            <div>
              <span className="text-primary text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 block" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</span>
              <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                An Investment.<br />A Memory.<br />
                <span className="text-primary font-medium">A Blessing.</span>
              </h2>
            </div>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              At Vineeth Jewellers, we believe that jewellery is not just an accessory; it is an investment, a memory, and a blessing.
            </p>

            <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              While the world around us has changed, our core philosophy remains timeless. We don't just sell gold; we build relationships. We have spent decades learning that relationships matter more than revenue.
            </p>

            <p className="text-neutral-600 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              This commitment to integrity is why families return to us generation after generation—not just for the designs, but for the peace of mind that comes with them.
            </p>

            <div className="flex items-center gap-4 pt-2 sm:pt-4" aria-hidden="true">
              <div className="h-px flex-1 bg-gradient-to-r from-amber-400 to-transparent" />
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>
          </motion.div>
        </motion.div>
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
      description: "Our story began 60 years ago with a single belief held by our founder: never compromise on trust.",
      image: venkatnarayanaImage,
      imageAlt: "Koshetty Venkatnarayana, founder of Vineeth Jewellers"
    },
    {
      name: "Koshetty Srinivas",
      role: "The Expansion",
      years: "40+ Years",
      description: "Carrying forward the torch lit by his father, he expanded the legacy with the Habits store, growing the brand with patience and precision. His philosophy: Gold doesn't lose value; it tests patience.",
      image: srinivasImage,
      imageAlt: "Koshetty Srinivas, who expanded Vineeth Jewellers with the Habits store"
    },
    {
      name: "Koshetty Krishna",
      role: "The Protector",
      years: "30 Years at Somajiguda",
      description: "His vision is not about sales, but about the moment a customer says, 'We didn't even check anywhere else.' That sentence defines our success.",
      quote: "My biggest achievement isn't sales. It's trust. And trust is priceless.",
      imageAlt: "Koshetty Krishna, protector of the Vineeth Jewellers legacy"
    }
  ];

  return (
    <section id="visionaries" className="py-16 sm:py-24 md:py-32 bg-neutral-50" aria-labelledby="visionaries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {visionaries.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative mb-6 sm:mb-8">
                {person.image ? (
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-neutral-200 to-neutral-100">
                    <img
                      src={person.image}
                      alt={person.imageAlt}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-primary/10 to-primary/5 flex items-center justify-center" role="img" aria-label={person.imageAlt}>
                    <Crown className="w-20 h-20 sm:w-24 sm:h-24 text-primary/20" aria-hidden="true" />
                  </div>
                )}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 text-xs tracking-wider uppercase text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {person.years}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{person.name}</h3>
              <p className="text-primary text-sm tracking-wider uppercase mb-3 sm:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{person.role}</p>
              <p className="text-neutral-600 leading-relaxed mb-4 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>{person.description}</p>
              
              {person.quote && (
                <blockquote className="border-l-2 border-primary pl-4 italic text-neutral-700 text-sm sm:text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{person.quote}"
                </blockquote>
              )}
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
      description: "Most brands won't say this, but many stores don't own their manufacturing. We do. This gives us total control over quality and allows us to offer honest pricing. When you buy from us, you aren't paying for middlemen; you are paying for purity."
    },
    {
      icon: Gem,
      title: "One Design. One Customer.",
      subtitle: "Handcrafted Perfection",
      points: ["No Copies.", "No Shortcuts.", "Handcrafted Perfection."],
      description: "Luxury isn't about size—it's about intention. We believe what you wear should feel personal, not mass-produced. Every design is hand-picked and crafted carefully for the individual."
    },
    {
      icon: Crown,
      title: "The P-Q-D Standard",
      subtitle: "Price • Quality • Design",
      description: "We outperform newer brands by mastering the trifecta: Price, Quality, and Design. Our designs are a blend of classic tradition and modern aesthetics, ensuring you never have to choose between the two."
    }
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-24 md:py-32 bg-white" aria-labelledby="philosophy-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {philosophies.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: index * 0.2 }}
              className="group p-6 sm:p-8 bg-neutral-50 hover:bg-primary/5 transition-colors duration-500"
            >
              <div className="mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <span className="text-xs tracking-wider uppercase text-primary mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
              </div>

              {item.points && (
                <ul className="space-y-2 mb-4" aria-label="Key features">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-700 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

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
      title: "The Wedding Edit",
      subtitle: "Traditional & Temple",
      description: "Timeless pieces for your most sacred moments",
      image: weddingImage,
      imageAlt: "Traditional Indian bridal gold jewellery set featuring intricate temple designs"
    },
    {
      title: "The Modern Muse",
      subtitle: "Italian & 18K",
      description: "For the youth who value style",
      image: modernImage,
      imageAlt: "Modern minimalist gold ring with elegant contemporary design"
    },
    {
      title: "The Rajwada Collection",
      subtitle: "Royal Heritage",
      description: "Handcrafted to perfection over 15-20 days per piece",
      image: bridalImage,
      imageAlt: "Luxurious traditional Indian gold necklace with royal heritage craftsmanship"
    }
  ];

  return (
    <section id="collections" className="py-16 sm:py-24 md:py-32 bg-neutral-900" aria-labelledby="collections-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 block"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            The Collections
          </motion.span>
          <motion.h2
            id="collections-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Curated with <span className="text-gold font-medium">Passion</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We host a wide range of collections, handcrafted to perfection over 15–20 days per piece.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.title}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: index * 0.2 }}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" aria-hidden="true" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
                <motion.div
                  initial={{ y: shouldReduceMotion ? 0 : 20, opacity: shouldReduceMotion ? 1 : 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1 }}
                >
                  <span className="text-amber-400 text-xs tracking-wider uppercase mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {collection.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {collection.title}
                  </h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {collection.description}
                  </p>
                </motion.div>
              </div>

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </motion.article>
          ))}
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
      subtitle: "Heritage Location",
      description: "Where the expansion began. A testament to our growing legacy.",
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
              className="inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="link-instagram-footer"
              aria-label="Follow Vineeth Jewellers on Instagram (opens in new tab)"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm">@vineethjewellers</span>
            </a>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-neutral-500 text-sm text-center sm:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © {new Date().getFullYear()} Vineeth Jewellers. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm text-center sm:text-right" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BIS Hallmarked • Government Approved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
