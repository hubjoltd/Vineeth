# Vineeth Jewellers Website

## Overview

This is an elegant landing page website for Vineeth Jewellers, a traditional gold jewellery business in Hyderabad with 60 years of heritage. The site showcases their legacy, philosophy, collections, and store locations with beautiful animations and a sophisticated crimson red and gold design theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **January 2026**: Built complete landing page with animated sections
  - Hero section with parallax background and headline "Trends Change. Trust Doesn't."
  - About Us section highlighting company philosophy
  - Visionaries section featuring three generations of founders (Koshetty Venkatnarayana, Srinivas, Krishna)
  - Philosophy section with transparency, craftsmanship, and P-Q-D standard
  - Collections section showcasing Wedding Edit, Modern Muse, and Rajwada collections
  - Visit Us section with two store locations (Somajiguda and Habits Store)
  - Mobile-responsive hamburger menu navigation
  - Accessibility improvements (alt text, aria labels, reduced motion support)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration
  - Primary color: Crimson red (HSL 348 83% 35%)
  - Accent color: Gold/Amber tones
  - Typography: Playfair Display (serif headings), Poppins (body text)
- **Animations**: Framer Motion for scroll-based animations with reduced motion support
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework**: Express 5 (latest version)
- **Language**: TypeScript with tsx for development execution
- **API Pattern**: RESTful routes prefixed with `/api`
- **Server**: HTTP server serving static landing page

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Current State**: Static landing page - no database required for MVP

### Project Structure
```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route components
│   │   │   └── Home.tsx    # Main landing page
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and query client
│   │   └── index.css       # Design tokens and theme
│   └── index.html          # HTML with SEO meta tags
├── server/                 # Express backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Data access layer interface
│   ├── static.ts           # Static file serving for production
│   └── vite.ts             # Vite dev server integration
├── shared/                 # Shared code between client/server
│   └── schema.ts           # Database schema and types
├── attached_assets/        # Brand assets
│   ├── vineeth_logo_*.png  # Company logo
│   ├── Koshetty_*.png      # Founder photos
│   └── stock_images/       # Jewellery stock photos
└── script/                 # Build scripts
    └── build.ts            # Production build script
```

### Key Assets
- **Logo**: `attached_assets/vineeth_logo_1768976897053.png`
- **Founder Photos**: 
  - Koshetty Venkatnarayana (Founder)
  - Koshetty Srinivas (Expansion Era)
- **Stock Images**: Various jewellery images for hero and collections

### External Links
- **Instagram**: https://www.instagram.com/vineethjewellers
- **Somajiguda Store**: https://maps.app.goo.gl/tHhDAWHSymi4EfJ36
- **Habits Store**: https://maps.app.goo.gl/zTrCEqaRUW5DPRj47

## Design System

### Color Palette (Light Mode)
- Background: White (0 0% 100%)
- Foreground: Dark Gray (0 0% 12%)
- Primary: Crimson Red (348 83% 35%)
- Accent: Gold/Amber (40 60% 50%)
- Muted: Light Gray (0 0% 96%)

### Typography
- Headings: Playfair Display (serif)
- Body: Poppins (sans-serif)

### Component Patterns
- Buttons use rounded-none for sharp, elegant look
- Cards with subtle borders and hover states
- Gold gradient text for emphasis (`.text-gold` utility)
- Consistent spacing using Tailwind's spacing scale

## Build System
- **Development**: `npm run dev` - Vite dev server proxied through Express with HMR
- **Production**: `npm run build` - esbuild bundles server, Vite builds client
- **Path Aliases**: `@/` maps to client/src, `@assets/` maps to attached_assets
