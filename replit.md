# Sanket Pandit Portfolio Website

## Overview

This is a modern, full-stack portfolio website for Sanket Pandit, a Mumbai-based Software Engineer. The application features a high-end, futuristic design with glassmorphism effects, smooth animations, and interactive elements. Built with React, TypeScript, and Express.js, it showcases professional experience, skills, projects, and contact information in an elegant, responsive interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI components with shadcn/ui styling system
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **API Design**: RESTful endpoints with /api prefix

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Type Checking**: TypeScript with strict mode enabled
- **Code Quality**: ESLint and Prettier (implied by project structure)

## Key Components

### Portfolio Sections
1. **Hero Section**: Full-screen introduction with animated tech stack logos
2. **About Section**: Professional summary with animated skill highlights
3. **Skills Section**: Interactive categorized skill cards with hover effects
4. **Experience Section**: Timeline-based professional experience display
5. **Projects Section**: Project showcase with technology tags and links
6. **Education Section**: Academic background with institution details
7. **Contact Section**: Contact form with social media integration

### Interactive Features
- **Custom Cursor**: Dynamic cursor effects with hover states
- **Theme Toggle**: Dark/light mode switching with smooth transitions
- **Scroll Progress**: Visual scroll indicator
- **Background Particles**: Animated particle system
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Smooth Scrolling**: Programmatic navigation between sections

### UI Components
- **Glass Effects**: Glassmorphism cards and overlays
- **Animated Gradients**: CSS gradient backgrounds with animation
- **Responsive Layout**: Mobile-first design with breakpoint-based layouts
- **Accessibility**: ARIA labels and keyboard navigation support

## Data Flow

### Client-Side Flow
1. React components fetch data through TanStack Query
2. Theme state managed through React Context
3. Scroll position tracked via custom hooks
4. Form submissions handled with controlled components
5. Animation states managed by Framer Motion

### Server-Side Flow
1. Express routes handle API requests under /api prefix
2. Database operations performed through Drizzle ORM
3. Session management for user authentication (prepared but not implemented)
4. Static file serving for production builds

### Build Process
1. Development: Vite serves client files with HMR
2. Production: Vite builds client to dist/public, esbuild bundles server
3. Database migrations managed through Drizzle Kit

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support with strict configuration
- **Styling**: Tailwind CSS, Radix UI primitives, class-variance-authority
- **Animation**: Framer Motion for component animations
- **Database**: Drizzle ORM, PostgreSQL, Neon Database driver
- **Development**: Vite, esbuild, tsx for development server

### UI Components
- **Radix UI**: Comprehensive set of unstyled, accessible components
- **Lucide Icons**: Modern icon library for consistent iconography
- **Font Awesome**: Icon library for tech stack and social media icons
- **Custom Fonts**: Space Grotesk, Inter, and Outfit from Google Fonts

### Utility Libraries
- **Date Handling**: date-fns for date formatting
- **Form Validation**: React Hook Form with Zod schema validation
- **Utilities**: clsx for conditional classes, nanoid for unique IDs

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized bundle to dist/public
- **Backend**: esbuild creates single bundled server file
- **Database**: Drizzle migrations ensure schema consistency
- **Assets**: Static files served from dist/public directory

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Development**: NODE_ENV=development enables dev features
- **Production**: NODE_ENV=production optimizes for performance

### Development Workflow
1. `npm run dev`: Start development server with hot reloading
2. `npm run build`: Create production build
3. `npm run start`: Run production server
4. `npm run db:push`: Push database schema changes

The application is designed to be deployed on platforms like Vercel, Netlify, or similar services that support Node.js applications, with the database hosted on Neon or similar PostgreSQL providers.